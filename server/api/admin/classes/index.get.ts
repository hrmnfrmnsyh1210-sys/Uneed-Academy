import { eq, desc, sql, isNull } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { classes, categories, classModules, tasks, enrollments } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  await requireAdmin(event)

  const rows = await db
    .select({
      id: classes.id,
      title: classes.title,
      slug: classes.slug,
      shortDescription: classes.shortDescription,
      difficulty: classes.difficulty,
      price: classes.price,
      discountPrice: classes.discountPrice,
      status: classes.status,
      estimatedDurationHours: classes.estimatedDurationHours,
      categoryName: categories.name,
      createdAt: classes.createdAt,
      taskCount: sql<number>`(SELECT COUNT(*) FROM ${tasks} t INNER JOIN ${classModules} m ON t.module_id = m.id WHERE m.class_id = ${classes.id})`,
      moduleCount: sql<number>`(SELECT COUNT(*) FROM ${classModules} m WHERE m.class_id = ${classes.id})`,
      enrollmentCount: sql<number>`(SELECT COUNT(*) FROM ${enrollments} e WHERE e.class_id = ${classes.id})`,
    })
    .from(classes)
    .leftJoin(categories, eq(classes.categoryId, categories.id))
    .where(isNull(classes.deletedAt))
    .orderBy(desc(classes.createdAt))

  return {
    classes: rows.map(row => ({
      ...row,
      price: Number(row.price || 0),
      discountPrice: row.discountPrice ? Number(row.discountPrice) : null,
      taskCount: Number(row.taskCount || 0),
      moduleCount: Number(row.moduleCount || 0),
      enrollmentCount: Number(row.enrollmentCount || 0),
    })),
  }
})
