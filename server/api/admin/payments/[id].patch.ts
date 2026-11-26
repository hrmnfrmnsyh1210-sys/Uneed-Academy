import crypto from 'node:crypto'
import { eq } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { transactions, enrollments, auditLogs, notifications } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const admin = await requireAdmin(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, statusMessage: 'ID transaksi wajib diisi' })

  const body = await readBody<{ action?: string, reason?: string }>(event)
  const action = body?.action === 'reject' ? 'reject' : 'approve'

  const [transaction] = await db.select().from(transactions).where(eq(transactions.id, id)).limit(1)
  if (!transaction) throw createError({ statusCode: 404, statusMessage: 'Transaksi tidak ditemukan' })

  const status = action === 'approve' ? 'paid' : 'rejected'
  await db.update(transactions).set({
    status,
    verifiedByUserId: admin.id,
    paidAt: action === 'approve' ? new Date() : transaction.paidAt,
    rejectionReason: action === 'reject' ? body?.reason || 'Pembayaran tidak dapat diverifikasi' : null,
  }).where(eq(transactions.id, id))

  if (action === 'approve' && transaction.enrollmentId) {
    await db.update(enrollments)
      .set({ status: 'active' })
      .where(eq(enrollments.id, transaction.enrollmentId))
  }

  await db.insert(notifications).values({
    id: crypto.randomUUID(),
    userId: transaction.userId,
    title: action === 'approve' ? 'Pembayaran disetujui' : 'Pembayaran ditolak',
    message: action === 'approve'
      ? 'Pembayaran kamu telah diverifikasi. Kelas sudah aktif dan dapat diakses.'
      : `Pembayaran kamu ditolak: ${body?.reason || 'tidak dapat diverifikasi'}`,
    type: 'payment_verified',
    linkUrl: '/student/classes',
  }).catch(() => undefined)

  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: `payment.${action}`,
    entityType: 'transaction',
    entityId: id,
    details: { orderId: transaction.orderId },
  })

  return { success: true, status }
})
