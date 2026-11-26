import crypto from 'node:crypto'
import { eq } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { testimonials, auditLogs } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const admin = await requireAdmin(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, statusMessage: 'ID testimoni wajib diisi' })

  const body = await readBody<Record<string, any>>(event)
  const patch: Record<string, unknown> = {}

  for (const field of ['name', 'headline', 'quote', 'avatarUrl', 'classSlug'] as const) {
    if (typeof body?.[field] === 'string') patch[field] = body[field].trim() || null
  }
  if (body?.role === 'mentor' || body?.role === 'alumni') patch.role = body.role
  if (body?.rating !== undefined) patch.rating = Math.min(5, Math.max(1, toNumber(body.rating, 5)))
  if (body?.sortOrder !== undefined) patch.sortOrder = toNumber(body.sortOrder)
  if (body?.isActive !== undefined) patch.isActive = toBoolean(body.isActive)

  if (!Object.keys(patch).length) throw createError({ statusCode: 400, statusMessage: 'Tidak ada data yang diubah' })

  await db.update(testimonials).set(patch).where(eq(testimonials.id, id))
  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: 'testimonial.update',
    entityType: 'testimonial',
    entityId: id,
    details: patch,
  })

  return { success: true }
})
