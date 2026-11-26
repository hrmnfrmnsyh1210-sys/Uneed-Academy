import { eq, and, asc } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { transactions, enrollments, classModules, tasks, taskProgress } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody<{ transactionId?: string }>(event)
  if (!body?.transactionId) {
    throw createError({ statusCode: 400, statusMessage: 'ID transaksi wajib diisi' })
  }

  const [tx] = await db
    .select()
    .from(transactions)
    .where(eq(transactions.id, body.transactionId))
    .limit(1)

  if (!tx) {
    throw createError({ statusCode: 404, statusMessage: 'Transaksi tidak ditemukan' })
  }

  await db
    .update(transactions)
    .set({ status: 'paid', paidAt: new Date() })
    .where(eq(transactions.id, tx.id))

  if (tx.enrollmentId) {
    await db
      .update(enrollments)
      .set({ status: 'active' })
      .where(eq(enrollments.id, tx.enrollmentId))
  }

  // Unlock Task 1 for the student
  const modules = await db
    .select()
    .from(classModules)
    .where(eq(classModules.classId, tx.classId))
    .orderBy(asc(classModules.orderIndex))

  const orderedTasks: Array<{ id: string }> = []
  for (const mod of modules) {
    const modTasks = await db
      .select({ id: tasks.id })
      .from(tasks)
      .where(eq(tasks.moduleId, mod.id))
      .orderBy(asc(tasks.orderIndex))
    orderedTasks.push(...modTasks)
  }

  for (let i = 0; i < orderedTasks.length; i++) {
    const t = orderedTasks[i]!
    const [existing] = await db
      .select({ id: taskProgress.id })
      .from(taskProgress)
      .where(and(eq(taskProgress.userId, tx.userId), eq(taskProgress.taskId, t.id)))
      .limit(1)

    if (!existing) {
      await db.insert(taskProgress).values({
        id: crypto.randomUUID(),
        userId: tx.userId,
        taskId: t.id,
        classId: tx.classId,
        status: i === 0 ? 'available' : 'locked',
        unlockedAt: i === 0 ? new Date() : null,
      })
    }
  }

  return { success: true, message: 'Pembayaran diverifikasi dan kelas aktif!' }
})
