import { d as defineEventHandler, r as requireAdmin, h as getRouterParam, e as createError, c as readBody, f as toNumber, i as toBoolean } from '../../../../_/nitro.mjs';
import crypto from 'node:crypto';
import { eq } from 'drizzle-orm';
import { d as db, o as testimonials, a as auditLogs } from '../../../../_/connection.mjs';
import 'unhead/server';
import '../../../../_/vue.mjs';
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

const _id__patch = defineEventHandler(async (event) => {
  const admin = await requireAdmin(event);
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, statusMessage: "ID testimoni wajib diisi" });
  const body = await readBody(event);
  const patch = {};
  for (const field of ["name", "headline", "quote", "avatarUrl", "classSlug"]) {
    if (typeof (body == null ? void 0 : body[field]) === "string") patch[field] = body[field].trim() || null;
  }
  if ((body == null ? void 0 : body.role) === "mentor" || (body == null ? void 0 : body.role) === "alumni") patch.role = body.role;
  if ((body == null ? void 0 : body.rating) !== void 0) patch.rating = Math.min(5, Math.max(1, toNumber(body.rating, 5)));
  if ((body == null ? void 0 : body.sortOrder) !== void 0) patch.sortOrder = toNumber(body.sortOrder);
  if ((body == null ? void 0 : body.isActive) !== void 0) patch.isActive = toBoolean(body.isActive);
  if (!Object.keys(patch).length) throw createError({ statusCode: 400, statusMessage: "Tidak ada data yang diubah" });
  await db.update(testimonials).set(patch).where(eq(testimonials.id, id));
  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: "testimonial.update",
    entityType: "testimonial",
    entityId: id,
    details: patch
  });
  return { success: true };
});

export { _id__patch as default };
//# sourceMappingURL=_id_.patch.mjs.map
