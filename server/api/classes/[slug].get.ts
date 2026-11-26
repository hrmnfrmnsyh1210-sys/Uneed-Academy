import { eq, asc, and } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { classes, classModules, tasks, enrollments } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Slug kelas tidak valid' })
  }

  const [cls] = await db.select().from(classes).where(eq(classes.slug, slug)).limit(1)
  if (!cls) {
    throw createError({ statusCode: 404, statusMessage: 'Kelas tidak ditemukan' })
  }

  const modules = await db
    .select()
    .from(classModules)
    .where(eq(classModules.classId, cls.id))
    .orderBy(asc(classModules.orderIndex))

  const syllabus = []
  let idx = 1
  for (const mod of modules) {
    const modTasks = await db
      .select()
      .from(tasks)
      .where(eq(tasks.moduleId, mod.id))
      .orderBy(asc(tasks.orderIndex))

    for (const t of modTasks) {
      syllabus.push({
        id: t.id,
        order: idx++,
        title: t.title,
        description: t.description,
        xpReward: t.xpReward,
      })
    }
  }

  const session = await getUserSession(event)
  let enrollmentStatus = 'none'
  if (session?.user?.id) {
    const [enr] = await db
      .select({ status: enrollments.status })
      .from(enrollments)
      .where(and(eq(enrollments.userId, session.user.id), eq(enrollments.classId, cls.id)))
      .limit(1)
    if (enr) enrollmentStatus = enr.status
  }

  return {
    classInfo: {
      id: cls.id,
      slug: cls.slug,
      title: cls.title,
      shortDescription: cls.shortDescription,
      difficulty: cls.difficulty,
      price: Number(cls.price),
      estimatedDurationHours: cls.estimatedDurationHours,
    },
    enrollmentStatus,
    syllabus,
  }
})
