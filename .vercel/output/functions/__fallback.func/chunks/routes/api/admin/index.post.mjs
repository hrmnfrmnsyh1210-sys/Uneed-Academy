import { d as defineEventHandler, r as requireAdmin, c as readBody, e as createError, s as slugify, f as toNumber } from '../../../_/nitro.mjs';
import crypto from 'node:crypto';
import { eq } from 'drizzle-orm';
import { d as db, c as classes, a as auditLogs } from '../../../_/connection.mjs';
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
  const title = String((body == null ? void 0 : body.title) || "").trim();
  if (!title) {
    throw createError({ statusCode: 400, statusMessage: "Nama kelas wajib diisi" });
  }
  const slug = String((body == null ? void 0 : body.slug) || "").trim() || slugify(title);
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: "Slug kelas tidak valid" });
  }
  const [duplicate] = await db.select({ id: classes.id }).from(classes).where(eq(classes.slug, slug)).limit(1);
  if (duplicate) {
    throw createError({ statusCode: 409, statusMessage: "Slug kelas sudah digunakan" });
  }
  const difficulty = ["beginner", "intermediate", "advanced"].includes(String((body == null ? void 0 : body.difficulty) || "").toLowerCase()) ? String(body.difficulty).toLowerCase() : "beginner";
  const status = ["draft", "published", "archived"].includes(String((body == null ? void 0 : body.status) || "").toLowerCase()) ? String(body.status).toLowerCase() : "draft";
  const id = crypto.randomUUID();
  await db.insert(classes).values({
    id,
    title,
    slug,
    shortDescription: (body == null ? void 0 : body.shortDescription) || null,
    fullDescription: (body == null ? void 0 : body.fullDescription) || null,
    difficulty,
    price: String(toNumber(body == null ? void 0 : body.price)),
    discountPrice: (body == null ? void 0 : body.discountPrice) ? String(toNumber(body.discountPrice)) : null,
    estimatedDurationHours: toNumber(body == null ? void 0 : body.estimatedDurationHours, 10),
    status,
    version: 1
  });
  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: "class.create",
    entityType: "class",
    entityId: id,
    details: { title, slug, status }
  });
  return { success: true, id, slug };
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
