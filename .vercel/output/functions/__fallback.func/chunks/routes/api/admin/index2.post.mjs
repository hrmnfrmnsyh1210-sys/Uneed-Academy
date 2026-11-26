import { d as defineEventHandler, r as requireAdmin, c as readBody, e as createError, f as toNumber } from '../../../_/nitro.mjs';
import crypto from 'node:crypto';
import { and, eq } from 'drizzle-orm';
import { d as db, o as testimonials, a as auditLogs } from '../../../_/connection.mjs';
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

const index_post = defineEventHandler(async (event) => {
  const admin = await requireAdmin(event);
  const body = await readBody(event);
  const role = String((body == null ? void 0 : body.role) || "").toLowerCase();
  const name = String((body == null ? void 0 : body.name) || "").trim();
  const quote = String((body == null ? void 0 : body.quote) || "").trim();
  if (!["mentor", "alumni"].includes(role)) {
    throw createError({ statusCode: 400, statusMessage: "Role harus mentor atau alumni" });
  }
  if (!name || !quote) {
    throw createError({ statusCode: 400, statusMessage: "Nama dan testimoni wajib diisi" });
  }
  const [duplicate] = await db.select({ id: testimonials.id }).from(testimonials).where(and(eq(testimonials.role, role), eq(testimonials.name, name))).limit(1);
  if (duplicate) throw createError({ statusCode: 409, statusMessage: "Testimoni dengan nama ini sudah ada" });
  const id = crypto.randomUUID();
  await db.insert(testimonials).values({
    id,
    role,
    name,
    headline: (body == null ? void 0 : body.headline) || null,
    quote,
    avatarUrl: (body == null ? void 0 : body.avatarUrl) || null,
    classSlug: (body == null ? void 0 : body.classSlug) || null,
    rating: Math.min(5, Math.max(1, toNumber(body == null ? void 0 : body.rating, 5))),
    sortOrder: toNumber(body == null ? void 0 : body.sortOrder),
    isActive: (body == null ? void 0 : body.isActive) !== false
  });
  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: "testimonial.create",
    entityType: "testimonial",
    entityId: id,
    details: { role, name }
  });
  return { success: true, id };
});

export { index_post as default };
//# sourceMappingURL=index2.post.mjs.map
