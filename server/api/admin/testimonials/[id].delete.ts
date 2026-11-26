import crypto from 'node:crypto'
import { eq } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { testimonials, auditLogs } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const admin = await requireAdmin(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, statusMessage: 'ID testimoni wajib diisi' })

  await db.delete(testimonials).where(eq(testimonials.id, id))
  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: 'testimonial.delete',
    entityType: 'testimonial',
    entityId: id,
  })

  return { success: true }
})
