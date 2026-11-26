import { eq, desc, sql } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { classes, users, userRoles, roles, transactions, taskSubmissions, certificates } from '~~/server/database/schema'

export default defineEventHandler(async () => {
  const [revenueRow] = await db
    .select({ total: sql<number>`coalesce(sum(amount), 0)` })
    .from(transactions)
    .where(eq(transactions.status, 'paid'))

  const [studentRow] = await db
    .select({ count: sql<number>`count(*)` })
    .from(users)
    .innerJoin(userRoles, eq(users.id, userRoles.userId))
    .innerJoin(roles, eq(userRoles.roleId, roles.id))
    .where(eq(roles.name, 'student'))

  const [pendingReviewRow] = await db
    .select({ count: sql<number>`count(*)` })
    .from(taskSubmissions)
    .where(eq(taskSubmissions.status, 'submitted'))

  const [certRow] = await db
    .select({ count: sql<number>`count(*)` })
    .from(certificates)

  const allClasses = await db.select().from(classes)

  const allTransactions = await db
    .select({
      id: transactions.id,
      orderId: transactions.orderId,
      studentName: users.name,
      studentEmail: users.email,
      classTitle: classes.title,
      paymentMethod: transactions.paymentMethod,
      amount: transactions.amount,
      status: transactions.status,
      createdAt: transactions.createdAt,
    })
    .from(transactions)
    .innerJoin(users, eq(transactions.userId, users.id))
    .innerJoin(classes, eq(transactions.classId, classes.id))
    .orderBy(desc(transactions.createdAt))

  return {
    stats: {
      totalRevenue: Number(revenueRow?.total || 0),
      totalStudents: Number(studentRow?.count || 0),
      pendingReviews: Number(pendingReviewRow?.count || 0),
      totalCertificates: Number(certRow?.count || 0),
    },
    classes: allClasses.map(c => ({
      id: c.id,
      title: c.title,
      difficulty: c.difficulty,
      price: Number(c.price),
      status: c.status,
    })),
    transactions: allTransactions,
  }
})
