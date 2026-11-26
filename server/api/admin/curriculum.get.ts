import { eq, asc, isNull } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { classes, classModules, lessons, tasks } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  await requireAdmin(event)

  const classRows = await db.select({
    id: classes.id,
    title: classes.title,
    slug: classes.slug,
    status: classes.status,
  }).from(classes).where(isNull(classes.deletedAt)).orderBy(asc(classes.title))

  const moduleRows = await db.select().from(classModules).orderBy(asc(classModules.orderIndex))
  const lessonRows = await db.select().from(lessons).orderBy(asc(lessons.orderIndex))
  const taskRows = await db.select().from(tasks).orderBy(asc(tasks.orderIndex))

  const curriculum = classRows.map((cls) => {
    const modules = moduleRows.filter(mod => mod.classId === cls.id).map((mod) => ({
      id: mod.id,
      title: mod.title,
      description: mod.description,
      orderIndex: mod.orderIndex,
      lessons: lessonRows
        .filter(lesson => lesson.moduleId === mod.id)
        .map(lesson => ({
          id: lesson.id,
          title: lesson.title,
          contentType: lesson.contentType,
          estimatedMinutes: lesson.estimatedMinutes,
        })),
      tasks: taskRows
        .filter(task => task.moduleId === mod.id)
        .map(task => ({
          id: task.id,
          title: task.title,
          taskType: task.taskType,
          xpReward: task.xpReward,
          status: task.status,
          orderIndex: task.orderIndex,
        })),
    }))

    return {
      ...cls,
      modules,
      totalTasks: modules.reduce((sum, mod) => sum + mod.tasks.length, 0),
      totalXp: modules.reduce((sum, mod) => sum + mod.tasks.reduce((s, task) => s + task.xpReward, 0), 0),
    }
  })

  return { curriculum }
})
