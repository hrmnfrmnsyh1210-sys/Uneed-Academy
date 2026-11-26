import { desc, sql } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { badges, userBadges } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  await requireAdmin(event)

  const rows = await db
    .select({
      id: badges.id,
      name: badges.name,
      slug: badges.slug,
      description: badges.description,
      iconName: badges.iconName,
      rarity: badges.rarity,
      colorHex: badges.colorHex,
      xpReward: badges.xpReward,
      earnedCount: sql<number>`(SELECT COUNT(*) FROM ${userBadges} ub WHERE ub.badge_id = ${badges.id})`,
    })
    .from(badges)
    .orderBy(desc(badges.createdAt))

  return { badges: rows }
})
