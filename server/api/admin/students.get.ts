import { eq, desc, sql } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { users, roles, userRoles, enrollments, classes, certificates } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  await requireAdmin(event)

  const rows = await db
    .select({
      id: users.id,
      name: users.name,
      username: users.username,
      email: users.email,
      status: users.status,
      totalXp: users.totalXp,
      currentLevel: users.currentLevel,
      createdAt: users.createdAt,
      activeClasses: sql<number>`(SELECT COUNT(*) FROM ${enrollments} e WHERE e.user_id = ${users.id} AND e.status = 'active')`,
      latestClass: sql<string | null>`(SELECT c.title FROM ${enrollments} e INNER JOIN ${classes} c ON c.id = e.class_id WHERE e.user_id = ${users.id} ORDER BY e.enrolled_at DESC LIMIT 1)`,
      averageProgress: sql<number>`COALESCE((SELECT ROUND(AVG(e.progress_percentage)) FROM ${enrollments} e WHERE e.user_id = ${users.id}), 0)`,
      certificates: sql<number>`(SELECT COUNT(*) FROM ${certificates} c WHERE c.user_id = ${users.id} AND c.status = 'valid')`,
    })
    .from(users)
    .innerJoin(userRoles, eq(userRoles.userId, users.id))
    .innerJoin(roles, eq(roles.id, userRoles.roleId))
    .where(eq(roles.name, 'student'))
    .orderBy(desc(users.createdAt))

  return {
    students: rows.map(row => ({ ...row, totalXp: Number(row.totalXp || 0) })),
  }
})
