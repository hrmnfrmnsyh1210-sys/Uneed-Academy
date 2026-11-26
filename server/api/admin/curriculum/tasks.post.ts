import crypto from 'node:crypto'
import { eq, sql } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { classModules, tasks, auditLogs } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const admin = await requireAdmin(event)
  const body = await readBody<{
    moduleId?: string
    title?: string
    description?: string
    instructions?: string
    taskType?: string
    xpReward?: number | string
    estimatedDurationMinutes?: number | string
  }>(event)

  const moduleId = String(body?.moduleId || '')
  const title = String(body?.title || '').trim()
  if (!moduleId || !title) {
    throw createError({ statusCode: 400, statusMessage: 'Modul dan judul quest wajib diisi' })
  }

  const [mod] = await db.select().from(classModules).where(eq(classModules.id, moduleId)).limit(1)
  if (!mod) throw createError({ statusCode: 404, statusMessage: 'Modul tidak ditemukan' })

  const [order] = await db.select({
    value: sql<number>`COALESCE(MAX(${tasks.orderIndex}), -1) + 1`,
  }).from(tasks).where(eq(tasks.moduleId, moduleId))

  const taskType = ['reading', 'coding', 'project', 'quiz', 'deployment', 'final_project']
    .includes(String(body?.taskType || '')) ? String(body.taskType) : 'coding'

  const id = crypto.randomUUID()
  await db.insert(tasks).values({
    id,
    moduleId,
    title,
    slug: `${slugify(title) || 'quest'}-${id.slice(0, 6)}`,
    taskType,
    description: body?.description || null,
    instructions: body?.instructions || null,
    estimatedDurationMinutes: toNumber(body?.estimatedDurationMinutes, 60),
    orderIndex: Number(order?.value || 0),
    xpReward: toNumber(body?.xpReward, 100),
    status: 'published',
  })

  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: 'curriculum.task.create',
    entityType: 'task',
    entityId: id,
    details: { moduleId, title },
  })

  return { success: true, id }
})
