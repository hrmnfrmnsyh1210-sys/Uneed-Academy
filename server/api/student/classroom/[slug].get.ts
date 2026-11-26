import { eq, and, asc, desc } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { classes, classModules, tasks, enrollments, taskProgress, taskSubmissions } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.id) {
    throw createError({ statusCode: 401, statusMessage: 'Silakan login terlebih dahulu' })
  }

  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Slug kelas tidak valid' })
  }

  const [cls] = await db.select().from(classes).where(eq(classes.slug, slug)).limit(1)
  if (!cls) {
    throw createError({ statusCode: 404, statusMessage: 'Kelas tidak ditemukan' })
  }

  const userId = session.user.id
  const [enrollment] = await db
    .select()
    .from(enrollments)
    .where(and(eq(enrollments.userId, userId), eq(enrollments.classId, cls.id)))
    .limit(1)

  if (!enrollment || (enrollment.status !== 'active' && enrollment.status !== 'completed')) {
    return {
      enrolled: false,
      enrollmentStatus: enrollment?.status || 'none',
      classInfo: {
        id: cls.id,
        slug: cls.slug,
        title: cls.title,
        shortDescription: cls.shortDescription,
        difficulty: cls.difficulty,
        price: Number(cls.price),
        estimatedDurationHours: cls.estimatedDurationHours,
      },
      tasks: [],
    }
  }

  const modules = await db
    .select()
    .from(classModules)
    .where(eq(classModules.classId, cls.id))
    .orderBy(asc(classModules.orderIndex))

  const progressRows = await db
    .select()
    .from(taskProgress)
    .where(and(eq(taskProgress.userId, userId), eq(taskProgress.classId, cls.id)))

  const progressMap = new Map(progressRows.map(p => [p.taskId, p]))

  const submissionsRows = await db
    .select()
    .from(taskSubmissions)
    .where(eq(taskSubmissions.userId, userId))
    .orderBy(desc(taskSubmissions.submittedAt))

  const latestSubMap = new Map<string, typeof submissionsRows[number]>()
  for (const sub of submissionsRows) {
    if (!latestSubMap.has(sub.taskId)) {
      latestSubMap.set(sub.taskId, sub)
    }
  }

  const questList = []
  let idx = 1
  for (const mod of modules) {
    const modTasks = await db
      .select()
      .from(tasks)
      .where(eq(tasks.moduleId, mod.id))
      .orderBy(asc(tasks.orderIndex))

    for (const t of modTasks) {
      const prog = progressMap.get(t.id)
      const latestSub = latestSubMap.get(t.id)
      let criteria: string[] = []
      try {
        criteria = t.instructions ? JSON.parse(t.instructions) : []
      } catch {
        criteria = t.instructions ? [t.instructions] : []
      }

      questList.push({
        id: t.id,
        order: idx++,
        title: t.title,
        description: t.description || '',
        criteria,
        xpReward: t.xpReward,
        status: prog?.status || (idx === 2 ? 'available' : 'locked'), // locked, available, submitted, completed, revision_required
        score: prog?.highestScore || 0,
        mentorFeedback: latestSub?.mentorFeedback || '',
        submissionTitle: latestSub?.title || '',
      })
    }
  }

  return {
    enrolled: true,
    enrollmentStatus: enrollment.status,
    classInfo: {
      id: cls.id,
      slug: cls.slug,
      title: cls.title,
      shortDescription: cls.shortDescription,
      difficulty: cls.difficulty,
      price: Number(cls.price),
      estimatedDurationHours: cls.estimatedDurationHours,
    },
    tasks: questList,
  }
})
