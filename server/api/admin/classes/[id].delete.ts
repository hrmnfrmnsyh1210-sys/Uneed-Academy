import crypto from 'node:crypto'
import { eq } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { classes, auditLogs } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const admin = await requireAdmin(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, statusMessage: 'ID kelas wajib diisi' })

  await db.update(classes)
    .set({ status: 'archived', deletedAt: new Date() })
    .where(eq(classes.id, id))

  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: 'class.archive',
    entityType: 'class',
    entityId: id,
  })

  return { success: true }
})
