import { eq, desc } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { transactions, classes } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.id) {
    throw createError({ statusCode: 401, statusMessage: 'Silakan login terlebih dahulu' })
  }

  const rows = await db
    .select({
      id: transactions.id,
      orderId: transactions.orderId,
      classTitle: classes.title,
      classSlug: classes.slug,
      paymentMethod: transactions.paymentMethod,
      amount: transactions.amount,
      status: transactions.status,
      createdAt: transactions.createdAt,
    })
    .from(transactions)
    .innerJoin(classes, eq(transactions.classId, classes.id))
    .where(eq(transactions.userId, session.user.id))
    .orderBy(desc(transactions.createdAt))

  return { transactions: rows }
})
