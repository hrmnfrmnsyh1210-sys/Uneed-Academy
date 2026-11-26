import { eq, asc, sql } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { classes, classModules, tasks, users, userRoles, roles, certificates } from '~~/server/database/schema'

export default defineEventHandler(async () => {
  const publishedClasses = await db
    .select()
    .from(classes)
    .where(eq(classes.status, 'published'))
    .orderBy(asc(classes.createdAt))

  const modules = await db.select().from(classModules)
  const modToClass = new Map(modules.map(m => [m.id, m.classId]))
  const allTasks = await db.select({ id: tasks.id, moduleId: tasks.moduleId }).from(tasks)
  const taskCounts = new Map<string, number>()
  for (const t of allTasks) {
    const cId = modToClass.get(t.moduleId)
    if (cId) taskCounts.set(cId, (taskCounts.get(cId) || 0) + 1)
  }

  // Real mentors from DB
  const mentors = await db
    .select({
      id: users.id,
      name: users.name,
      headline: users.headline,
    })
    .from(users)
    .innerJoin(userRoles, eq(users.id, userRoles.userId))
    .innerJoin(roles, eq(userRoles.roleId, roles.id))
    .where(eq(roles.name, 'mentor'))
    .limit(4)

  // Real counts from DB
  const [studentCountRow] = await db
    .select({ count: sql<number>`count(*)` })
    .from(users)
    .innerJoin(userRoles, eq(users.id, userRoles.userId))
    .innerJoin(roles, eq(userRoles.roleId, roles.id))
    .where(eq(roles.name, 'student'))

  const [certCountRow] = await db
    .select({ count: sql<number>`count(*)` })
    .from(certificates)

  return {
    stats: {
      totalStudents: Number(studentCountRow?.count || 0),
      totalClasses: publishedClasses.length,
      totalCertificates: Number(certCountRow?.count || 0),
    },
    mentors,
    classes: publishedClasses.map(c => ({
      id: c.id,
      slug: c.slug,
      title: c.title,
      shortDescription: c.shortDescription,
      difficulty: c.difficulty,
      price: Number(c.price),
      estimatedDurationHours: c.estimatedDurationHours,
      totalTasks: taskCounts.get(c.id) || 0,
    })),
  }
})
