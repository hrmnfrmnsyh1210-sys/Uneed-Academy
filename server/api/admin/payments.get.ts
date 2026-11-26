import { desc, eq } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { transactions, users, classes, enrollments } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  await requireAdmin(event)

  const rows = await db
    .select({
      id: transactions.id,
      orderId: transactions.orderId,
      amount: transactions.amount,
      status: transactions.status,
      paymentMethod: transactions.paymentMethod,
      paymentProofUrl: transactions.paymentProofUrl,
      rejectionReason: transactions.rejectionReason,
      createdAt: transactions.createdAt,
      paidAt: transactions.paidAt,
      studentName: users.name,
      studentEmail: users.email,
      className: classes.title,
      enrollmentStatus: enrollments.status,
    })
    .from(transactions)
    .innerJoin(users, eq(transactions.userId, users.id))
    .innerJoin(classes, eq(transactions.classId, classes.id))
    .leftJoin(enrollments, eq(transactions.enrollmentId, enrollments.id))
    .orderBy(desc(transactions.createdAt))

  return {
    payments: rows.map(row => ({ ...row, amount: Number(row.amount || 0) })),
  }
})
