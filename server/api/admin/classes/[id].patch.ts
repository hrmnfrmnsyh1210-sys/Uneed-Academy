import crypto from 'node:crypto'
import { eq } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { classes, auditLogs } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const admin = await requireAdmin(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, statusMessage: 'ID kelas wajib diisi' })

  const body = await readBody<Record<string, any>>(event)
  const patch: Record<string, unknown> = {}

  for (const field of ['title', 'shortDescription', 'fullDescription'] as const) {
    if (typeof body?.[field] === 'string') patch[field] = body[field].trim() || null
  }
  if (typeof body?.difficulty === 'string' && ['beginner', 'intermediate', 'advanced'].includes(body.difficulty)) {
    patch.difficulty = body.difficulty
  }
  if (typeof body?.status === 'string' && ['draft', 'published', 'archived'].includes(body.status)) {
    patch.status = body.status
  }
  if (body?.price !== undefined) patch.price = String(toNumber(body.price))
  if (body?.discountPrice !== undefined) {
    patch.discountPrice = body.discountPrice ? String(toNumber(body.discountPrice)) : null
  }
  if (body?.estimatedDurationHours !== undefined) {
    patch.estimatedDurationHours = toNumber(body.estimatedDurationHours, 10)
  }
  if (Array.isArray(body?.learningOutcomes)) patch.learningOutcomes = body.learningOutcomes
  if (Array.isArray(body?.prerequisites)) patch.prerequisites = body.prerequisites
  if (Array.isArray(body?.targetAudience)) patch.targetAudience = body.targetAudience
  if (Array.isArray(body?.toolsRequired)) patch.toolsRequired = body.toolsRequired

  if (!Object.keys(patch).length) {
    throw createError({ statusCode: 400, statusMessage: 'Tidak ada data yang diubah' })
  }

  await db.update(classes).set(patch).where(eq(classes.id, id))
  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: 'class.update',
    entityType: 'class',
    entityId: id,
    details: patch,
  })

  return { success: true }
})
