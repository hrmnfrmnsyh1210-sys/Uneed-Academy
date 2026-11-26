import crypto from 'node:crypto'
import { eq, sql } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { classes, classModules, auditLogs } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const admin = await requireAdmin(event)
  const body = await readBody<{ classId?: string, title?: string, description?: string }>(event)

  const classId = String(body?.classId || '')
  const title = String(body?.title || '').trim()
  if (!classId || !title) {
    throw createError({ statusCode: 400, statusMessage: 'Kelas dan judul modul wajib diisi' })
  }

  const [cls] = await db.select({ id: classes.id }).from(classes).where(eq(classes.id, classId)).limit(1)
  if (!cls) throw createError({ statusCode: 404, statusMessage: 'Kelas tidak ditemukan' })

  const [order] = await db.select({
    value: sql<number>`COALESCE(MAX(${classModules.orderIndex}), -1) + 1`,
  }).from(classModules).where(eq(classModules.classId, classId))

  const id = crypto.randomUUID()
  await db.insert(classModules).values({
    id,
    classId,
    title,
    description: body?.description || null,
    orderIndex: Number(order?.value || 0),
  })

  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: 'curriculum.module.create',
    entityType: 'module',
    entityId: id,
    details: { classId, title },
  })

  return { success: true, id }
})
