import { d as defineEventHandler, r as requireAdmin, h as getRouterParam, e as createError, c as readBody, f as toNumber } from '../../../../_/nitro.mjs';
import crypto from 'node:crypto';
import { eq } from 'drizzle-orm';
import { d as db, c as classes, a as auditLogs } from '../../../../_/connection.mjs';
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
  if (!id) throw createError({ statusCode: 400, statusMessage: "ID kelas wajib diisi" });
  const body = await readBody(event);
  const patch = {};
  for (const field of ["title", "shortDescription", "fullDescription"]) {
    if (typeof (body == null ? void 0 : body[field]) === "string") patch[field] = body[field].trim() || null;
  }
  if (typeof (body == null ? void 0 : body.difficulty) === "string" && ["beginner", "intermediate", "advanced"].includes(body.difficulty)) {
    patch.difficulty = body.difficulty;
  }
  if (typeof (body == null ? void 0 : body.status) === "string" && ["draft", "published", "archived"].includes(body.status)) {
    patch.status = body.status;
  }
  if ((body == null ? void 0 : body.price) !== void 0) patch.price = String(toNumber(body.price));
  if ((body == null ? void 0 : body.discountPrice) !== void 0) {
    patch.discountPrice = body.discountPrice ? String(toNumber(body.discountPrice)) : null;
  }
  if ((body == null ? void 0 : body.estimatedDurationHours) !== void 0) {
    patch.estimatedDurationHours = toNumber(body.estimatedDurationHours, 10);
  }
  if (Array.isArray(body == null ? void 0 : body.learningOutcomes)) patch.learningOutcomes = body.learningOutcomes;
  if (Array.isArray(body == null ? void 0 : body.prerequisites)) patch.prerequisites = body.prerequisites;
  if (Array.isArray(body == null ? void 0 : body.targetAudience)) patch.targetAudience = body.targetAudience;
  if (Array.isArray(body == null ? void 0 : body.toolsRequired)) patch.toolsRequired = body.toolsRequired;
  if (!Object.keys(patch).length) {
    throw createError({ statusCode: 400, statusMessage: "Tidak ada data yang diubah" });
  }
  await db.update(classes).set(patch).where(eq(classes.id, id));
  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: "class.update",
    entityType: "class",
    entityId: id,
    details: patch
  });
  return { success: true };
});

export { _id__patch as default };
//# sourceMappingURL=_id_.patch.mjs.map
