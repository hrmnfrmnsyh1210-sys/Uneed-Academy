import crypto from 'node:crypto'
import { eq } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { classes, badges, auditLogs } from '~~/server/database/schema'
import { getClassStyle } from '~~/shared/utils/class-style'

export default defineEventHandler(async (event) => {
  const admin = await requireAdmin(event)
  const body = await readBody<{
    title?: string
    slug?: string
    shortDescription?: string
    fullDescription?: string
    difficulty?: string
    price?: number | string
    discountPrice?: number | string
    estimatedDurationHours?: number | string
    status?: string
  }>(event)

  const title = String(body?.title || '').trim()
  if (!title) {
    throw createError({ statusCode: 400, statusMessage: 'Nama kelas wajib diisi' })
  }

  const slug = String(body?.slug || '').trim() || slugify(title)
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Slug kelas tidak valid' })
  }

  const [duplicate] = await db.select({ id: classes.id }).from(classes).where(eq(classes.slug, slug)).limit(1)
  if (duplicate) {
    throw createError({ statusCode: 409, statusMessage: 'Slug kelas sudah digunakan' })
  }

  const difficulty = ['beginner', 'intermediate', 'advanced'].includes(String(body?.difficulty || '').toLowerCase())
    ? String(body.difficulty).toLowerCase()
    : 'beginner'
  const status = ['draft', 'published', 'archived'].includes(String(body?.status || '').toLowerCase())
    ? String(body.status).toLowerCase()
    : 'draft'

  const id = crypto.randomUUID()
  await db.insert(classes).values({
    id,
    title,
    slug,
    shortDescription: body?.shortDescription || null,
    fullDescription: body?.fullDescription || null,
    difficulty,
    price: String(toNumber(body?.price)),
    discountPrice: body?.discountPrice ? String(toNumber(body.discountPrice)) : null,
    estimatedDurationHours: toNumber(body?.estimatedDurationHours, 10),
    status,
    version: 1,
  })

  // Automatically create a matching badge for this class using its topic icon & color
  const style = getClassStyle(slug)
  const badgeSlug = `badge-${slug}`
  const [existingBadge] = await db.select({ id: badges.id }).from(badges).where(eq(badges.slug, badgeSlug)).limit(1)
  if (!existingBadge) {
    await db.insert(badges).values({
      id: crypto.randomUUID(),
      name: `Lulusan ${title}`,
      slug: badgeSlug,
      description: `Menyelesaikan seluruh quest di kelas ${title}.`,
      iconName: style.icon,
      rarity: difficulty === 'advanced' ? 'legendary' : difficulty === 'intermediate' ? 'epic' : 'rare',
      colorHex: style.backColor,
      xpReward: difficulty === 'advanced' ? 300 : difficulty === 'intermediate' ? 200 : 150,
    })
  }

  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: 'class.create',
    entityType: 'class',
    entityId: id,
    details: { title, slug, status },
  })

  return { success: true, id, slug }
})
