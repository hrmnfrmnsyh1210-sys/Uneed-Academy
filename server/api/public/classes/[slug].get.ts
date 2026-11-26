import { eq, and, asc, ne, inArray } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import {
  categories,
  classes,
  classMentors,
  classModules,
  lessons,
  tasks,
  testimonials,
  users,
} from '~~/server/database/schema'
import { getClassPresentation, formatPrice } from '../../../../shared/utils/class-presentation'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Slug kelas tidak ditemukan' })
  }

  const [cls] = await db
    .select({
      id: classes.id,
      slug: classes.slug,
      title: classes.title,
      shortDescription: classes.shortDescription,
      fullDescription: classes.fullDescription,
      difficulty: classes.difficulty,
      price: classes.price,
      discountPrice: classes.discountPrice,
      estimatedDurationHours: classes.estimatedDurationHours,
      learningOutcomes: classes.learningOutcomes,
      prerequisites: classes.prerequisites,
      targetAudience: classes.targetAudience,
      toolsRequired: classes.toolsRequired,
      categoryName: categories.name,
    })
    .from(classes)
    .leftJoin(categories, eq(classes.categoryId, categories.id))
    .where(and(eq(classes.slug, slug), eq(classes.status, 'published')))
    .limit(1)

  if (!cls) {
    throw createError({ statusCode: 404, statusMessage: 'Kelas tidak ditemukan' })
  }

  const modules = await db
    .select()
    .from(classModules)
    .where(eq(classModules.classId, cls.id))
    .orderBy(asc(classModules.orderIndex))

  const moduleIds = modules.map(m => m.id)
  const moduleLessons = moduleIds.length
    ? await db.select().from(lessons).where(inArray(lessons.moduleId, moduleIds)).orderBy(asc(lessons.orderIndex))
    : []
  const moduleTasks = moduleIds.length
    ? await db.select().from(tasks).where(inArray(tasks.moduleId, moduleIds)).orderBy(asc(tasks.orderIndex))
    : []

  const assignedMentors = await db
    .select({ name: users.name, headline: users.headline, avatarUrl: users.avatarUrl })
    .from(classMentors)
    .leftJoin(users, eq(classMentors.mentorId, users.id))
    .where(eq(classMentors.classId, cls.id))

  let mentors = assignedMentors
    .filter(m => m.name)
    .map(m => ({ name: m.name!, headline: m.headline, avatarUrl: m.avatarUrl }))

  if (mentors.length === 0) {
    const fallbackMentors = await db
      .select({
        name: testimonials.name,
        headline: testimonials.headline,
        avatarUrl: testimonials.avatarUrl,
      })
      .from(testimonials)
      .where(and(eq(testimonials.role, 'mentor'), eq(testimonials.classSlug, slug), eq(testimonials.isActive, true)))
      .orderBy(asc(testimonials.sortOrder))
    mentors = fallbackMentors
  }

  const classTestimonials = await db
    .select({
      role: testimonials.role,
      name: testimonials.name,
      headline: testimonials.headline,
      quote: testimonials.quote,
      avatarUrl: testimonials.avatarUrl,
      rating: testimonials.rating,
    })
    .from(testimonials)
    .where(and(eq(testimonials.classSlug, slug), eq(testimonials.isActive, true)))
    .orderBy(asc(testimonials.sortOrder))
    .limit(3)

  const related = await db
    .select({
      slug: classes.slug,
      title: classes.title,
      shortDescription: classes.shortDescription,
      difficulty: classes.difficulty,
      price: classes.price,
      estimatedDurationHours: classes.estimatedDurationHours,
    })
    .from(classes)
    .where(and(eq(classes.status, 'published'), ne(classes.id, cls.id)))
    .orderBy(asc(classes.createdAt))
    .limit(3)

  const price = Number(cls.price || 0)
  const discount = cls.discountPrice ? Number(cls.discountPrice) : null
  const effectivePrice = discount && discount < price ? discount : price

  return {
    class: {
      ...cls,
      price,
      discountedPrice: discount && discount < price ? discount : null,
      priceLabel: formatPrice(effectivePrice),
      totalTasks: moduleTasks.length,
      totalLessons: moduleLessons.length,
      totalXp: moduleTasks.reduce((sum, t) => sum + (t.xpReward || 0), 0),
      mentors,
      ...getClassPresentation(cls.slug),
    },
    modules: modules.map((mod) => ({
      id: mod.id,
      title: mod.title,
      description: mod.description,
      lessons: moduleLessons
        .filter(l => l.moduleId === mod.id)
        .map(l => ({ id: l.id, title: l.title, contentType: l.contentType, estimatedMinutes: l.estimatedMinutes })),
      tasks: moduleTasks
        .filter(t => t.moduleId === mod.id)
        .map(t => ({
          id: t.id,
          title: t.title,
          description: t.description,
          taskType: t.taskType,
          estimatedDurationMinutes: t.estimatedDurationMinutes,
          xpReward: t.xpReward,
        })),
    })),
    testimonials: classTestimonials,
    related: related.map((item) => ({
      ...item,
      price: Number(item.price || 0),
      priceLabel: formatPrice(Number(item.price || 0)),
      ...getClassPresentation(item.slug),
    })),
  }
})
