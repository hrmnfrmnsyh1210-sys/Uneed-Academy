import { d as defineEventHandler, r as requireAdmin, c as readBody, e as createError, s as slugify, f as toNumber } from '../../../_/nitro.mjs';
import crypto from 'node:crypto';
import { eq } from 'drizzle-orm';
import { d as db, b as badges, a as auditLogs } from '../../../_/connection.mjs';
import 'unhead/server';
import '../../../_/vue.mjs';
import 'unhead/legacy';
import 'unhead/plugins';
import 'bcryptjs';
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

const badges_post = defineEventHandler(async (event) => {
  const admin = await requireAdmin(event);
  const body = await readBody(event);
  const name = String((body == null ? void 0 : body.name) || "").trim();
  if (!name) throw createError({ statusCode: 400, statusMessage: "Nama badge wajib diisi" });
  const slug = slugify(name);
  const [duplicate] = await db.select({ id: badges.id }).from(badges).where(eq(badges.slug, slug)).limit(1);
  if (duplicate) throw createError({ statusCode: 409, statusMessage: "Slug badge sudah digunakan" });
  const rarity = ["common", "rare", "epic", "legendary"].includes(String((body == null ? void 0 : body.rarity) || "")) ? String(body.rarity) : "common";
  const id = crypto.randomUUID();
  await db.insert(badges).values({
    id,
    name,
    slug,
    description: (body == null ? void 0 : body.description) || null,
    iconName: (body == null ? void 0 : body.iconName) || "Award",
    rarity,
    colorHex: (body == null ? void 0 : body.colorHex) || "#6366F1",
    xpReward: toNumber(body == null ? void 0 : body.xpReward, 100)
  });
  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: "badge.create",
    entityType: "badge",
    entityId: id,
    details: { name, slug }
  });
  return { success: true, id, slug };
});

export { badges_post as default };
//# sourceMappingURL=badges.post.mjs.map
