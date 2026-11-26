import { eq, and, asc, inArray } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { classes, classModules, tasks, enrollments, taskProgress } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.id) {
    throw createError({ statusCode: 401, statusMessage: 'Silakan login terlebih dahulu' })
  }
  const userId = session.user.id

  const allClasses = await db
    .select()
    .from(classes)
    .where(eq(classes.status, 'published'))
    .orderBy(asc(classes.createdAt))

  const userEnrollments = await db
    .select()
    .from(enrollments)
    .where(eq(enrollments.userId, userId))

  const enrollmentMap = new Map(userEnrollments.map(e => [e.classId, e]))

  const userProgress = await db
    .select()
    .from(taskProgress)
    .where(eq(taskProgress.userId, userId))

  // Count tasks per class
  const modules = await db.select().from(classModules)
  const moduleToClass = new Map(modules.map(m => [m.id, m.classId]))
  const allTasks = await db.select().from(tasks)
  const taskCountMap = new Map<string, number>()
  for (const t of allTasks) {
    const cId = moduleToClass.get(t.moduleId)
    if (cId) taskCountMap.set(cId, (taskCountMap.get(cId) || 0) + 1)
  }

  const catalog = allClasses.map((cls) => {
    const enr = enrollmentMap.get(cls.id)
    const clsProgress = userProgress.filter(p => p.classId === cls.id)
    const done = clsProgress.filter(p => p.status === 'completed').length
    const review = clsProgress.filter(p => p.status === 'submitted' || p.status === 'under_review').length
    const totalTasks = taskCountMap.get(cls.id) || 0
    const locked = Math.max(0, totalTasks - done - review)

    return {
      id: cls.id,
      slug: cls.slug,
      title: cls.title,
      shortDescription: cls.shortDescription,
      difficulty: cls.difficulty,
      price: Number(cls.price),
      estimatedDurationHours: cls.estimatedDurationHours,
      totalTasks,
      enrollmentStatus: enr?.status || 'none', // none, pending, active, completed
      progressPercentage: enr?.progressPercentage || 0,
      done,
      review,
      locked,
    }
  })

  const enrolledClasses = catalog.filter(c => c.enrollmentStatus === 'active' || c.enrollmentStatus === 'completed')

  return {
    enrolledClasses,
    catalog,
  }
})
