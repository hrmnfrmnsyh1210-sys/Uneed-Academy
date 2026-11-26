import { eq, asc } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { taskProgress, tasks, classes } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.id) {
    throw createError({ statusCode: 401, statusMessage: 'Silakan login terlebih dahulu' })
  }

  const rows = await db
    .select({
      id: taskProgress.id,
      taskId: tasks.id,
      title: tasks.title,
      classTitle: classes.title,
      classSlug: classes.slug,
      status: taskProgress.status,
      xpReward: tasks.xpReward,
      orderIndex: tasks.orderIndex,
    })
    .from(taskProgress)
    .innerJoin(tasks, eq(taskProgress.taskId, tasks.id))
    .innerJoin(classes, eq(taskProgress.classId, classes.id))
    .where(eq(taskProgress.userId, session.user.id))
    .orderBy(asc(tasks.orderIndex))

  return { quests: rows }
})
