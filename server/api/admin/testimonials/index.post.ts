import crypto from 'node:crypto'
import { eq, and } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { testimonials, auditLogs } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const admin = await requireAdmin(event)
  const body = await readBody<{
    role?: string
    name?: string
    headline?: string
    quote?: string
    avatarUrl?: string
    classSlug?: string
    rating?: number | string
    sortOrder?: number | string
    isActive?: boolean
  }>(event)

  const role = String(body?.role || '').toLowerCase()
  const name = String(body?.name || '').trim()
  const quote = String(body?.quote || '').trim()
  if (!['mentor', 'alumni'].includes(role)) {
    throw createError({ statusCode: 400, statusMessage: 'Role harus mentor atau alumni' })
  }
  if (!name || !quote) {
    throw createError({ statusCode: 400, statusMessage: 'Nama dan testimoni wajib diisi' })
  }

  const [duplicate] = await db.select({ id: testimonials.id })
    .from(testimonials)
    .where(and(eq(testimonials.role, role), eq(testimonials.name, name)))
    .limit(1)
  if (duplicate) throw createError({ statusCode: 409, statusMessage: 'Testimoni dengan nama ini sudah ada' })

  const id = crypto.randomUUID()
  await db.insert(testimonials).values({
    id,
    role,
    name,
    headline: body?.headline || null,
    quote,
    avatarUrl: body?.avatarUrl || null,
    classSlug: body?.classSlug || null,
    rating: Math.min(5, Math.max(1, toNumber(body?.rating, 5))),
    sortOrder: toNumber(body?.sortOrder),
    isActive: body?.isActive !== false,
  })

  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: 'testimonial.create',
    entityType: 'testimonial',
    entityId: id,
    details: { role, name },
  })

  return { success: true, id }
})
