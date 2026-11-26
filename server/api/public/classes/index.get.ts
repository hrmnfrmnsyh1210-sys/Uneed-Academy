import { eq, asc } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { categories, classes, classMentors, classModules, tasks, users } from '~~/server/database/schema'
import { getClassPresentation, formatPrice } from '../../../../shared/utils/class-presentation'

export default defineEventHandler(async () => {
  const publishedClasses = await db
    .select({
      id: classes.id,
      slug: classes.slug,
      title: classes.title,
      shortDescription: classes.shortDescription,
      difficulty: classes.difficulty,
      price: classes.price,
      discountPrice: classes.discountPrice,
      estimatedDurationHours: classes.estimatedDurationHours,
      learningOutcomes: classes.learningOutcomes,
      status: classes.status,
      categoryName: categories.name,
    })
    .from(classes)
    .leftJoin(categories, eq(classes.categoryId, categories.id))
    .where(eq(classes.status, 'published'))
    .orderBy(asc(classes.createdAt))

  const modules = await db.select().from(classModules)
  const moduleToClass = new Map(modules.map(m => [m.id, m.classId]))

  const publishedTasks = await db
    .select({ moduleId: tasks.moduleId, xpReward: tasks.xpReward })
    .from(tasks)
    .where(eq(tasks.status, 'published'))

  const taskCounts = new Map<string, number>()
  const xpTotals = new Map<string, number>()
  for (const task of publishedTasks) {
    const classId = moduleToClass.get(task.moduleId)
    if (!classId) continue
    taskCounts.set(classId, (taskCounts.get(classId) || 0) + 1)
    xpTotals.set(classId, (xpTotals.get(classId) || 0) + (task.xpReward || 0))
  }

  const mentorRows = await db
    .select({ classId: classMentors.classId, name: users.name, headline: users.headline })
    .from(classMentors)
    .leftJoin(users, eq(classMentors.mentorId, users.id))

  const mentorsByClass = new Map<string, { name: string, headline: string | null }[]>()
  for (const row of mentorRows) {
    if (!row.name) continue
    const list = mentorsByClass.get(row.classId) || []
    list.push({ name: row.name, headline: row.headline })
    mentorsByClass.set(row.classId, list)
  }

  return {
    classes: publishedClasses.map((cls) => {
      const price = Number(cls.price || 0)
      const discount = cls.discountPrice ? Number(cls.discountPrice) : null
      return {
        ...cls,
        price,
        discountedPrice: discount && discount < price ? discount : null,
        priceLabel: formatPrice(discount && discount < price ? discount : price),
        totalTasks: taskCounts.get(cls.id) || 0,
        totalXp: xpTotals.get(cls.id) || 0,
        mentors: mentorsByClass.get(cls.id) || [],
        ...getClassPresentation(cls.slug),
      }
    }),
  }
})
