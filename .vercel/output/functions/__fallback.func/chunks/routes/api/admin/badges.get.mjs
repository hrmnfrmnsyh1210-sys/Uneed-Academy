import { d as defineEventHandler, r as requireAdmin } from '../../../_/nitro.mjs';
import { sql, desc } from 'drizzle-orm';
import { d as db, b as badges, u as userBadges } from '../../../_/connection.mjs';
import 'unhead/server';
import '../../../_/vue.mjs';
import 'unhead/legacy';
import 'unhead/plugins';
import 'bcryptjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'consola';
import 'node:fs';
import 'node:path';
import 'drizzle-orm/mysql2';
import 'mysql2/promise';
import 'drizzle-orm/mysql-core';

const badges_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const rows = await db.select({
    id: badges.id,
    name: badges.name,
    slug: badges.slug,
    description: badges.description,
    iconName: badges.iconName,
    rarity: badges.rarity,
    colorHex: badges.colorHex,
    xpReward: badges.xpReward,
    earnedCount: sql`(SELECT COUNT(*) FROM ${userBadges} ub WHERE ub.badge_id = ${badges.id})`
  }).from(badges).orderBy(desc(badges.createdAt));
  return { badges: rows };
});

export { badges_get as default };
//# sourceMappingURL=badges.get.mjs.map
