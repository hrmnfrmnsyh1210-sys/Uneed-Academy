import crypto from 'node:crypto'
import { eq } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { badges, classes, auditLogs } from '~~/server/database/schema'
import { getClassStyle } from '~~/shared/utils/class-style'

const RARITY_COLOR: Record<string, string> = {
  common: '#2563eb',
  rare: '#0284c7',
  epic: '#7c3aed',
  legendary: '#d97706',
}

export default defineEventHandler(async (event) => {
  const admin = await requireAdmin(event)
  const body = await readBody<{
    name?: string
    description?: string
    classId?: string
    rarity?: string
    xpReward?: number | string
  }>(event)

  const name = String(body?.name || '').trim()
  if (!name) throw createError({ statusCode: 400, statusMessage: 'Nama badge wajib diisi' })

  const slug = slugify(name)
  const [duplicate] = await db.select({ id: badges.id }).from(badges).where(eq(badges.slug, slug)).limit(1)
  if (duplicate) throw createError({ statusCode: 409, statusMessage: 'Slug badge sudah digunakan' })

  const rarity = ['common', 'rare', 'epic', 'legendary'].includes(String(body?.rarity || ''))
    ? String(body.rarity) : 'common'

  let iconName = 'i-heroicons-trophy'
  let colorHex = RARITY_COLOR[rarity] || '#2563eb'

  if (body?.classId) {
    const [cls] = await db.select().from(classes).where(eq(classes.id, body.classId)).limit(1)
    if (cls) {
      const style = getClassStyle(cls.slug)
      iconName = style.icon
      colorHex = style.backColor
    }
  }

  const id = crypto.randomUUID()
  await db.insert(badges).values({
    id,
    name,
    slug,
    description: body?.description || null,
    iconName,
    rarity,
    colorHex,
    xpReward: toNumber(body?.xpReward, 100),
  })

  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: 'badge.create',
    entityType: 'badge',
    entityId: id,
    details: { name, slug, iconName, colorHex },
  })

  return { success: true, id, slug }
})
