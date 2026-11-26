import { d as defineEventHandler, r as requireAdmin, c as readBody, e as createError } from '../../../../_/nitro.mjs';
import crypto from 'node:crypto';
import { eq, sql } from 'drizzle-orm';
import { d as db, c as classes, i as classModules, a as auditLogs } from '../../../../_/connection.mjs';
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

const modules_post = defineEventHandler(async (event) => {
  const admin = await requireAdmin(event);
  const body = await readBody(event);
  const classId = String((body == null ? void 0 : body.classId) || "");
  const title = String((body == null ? void 0 : body.title) || "").trim();
  if (!classId || !title) {
    throw createError({ statusCode: 400, statusMessage: "Kelas dan judul modul wajib diisi" });
  }
  const [cls] = await db.select({ id: classes.id }).from(classes).where(eq(classes.id, classId)).limit(1);
  if (!cls) throw createError({ statusCode: 404, statusMessage: "Kelas tidak ditemukan" });
  const [order] = await db.select({
    value: sql`COALESCE(MAX(${classModules.orderIndex}), -1) + 1`
  }).from(classModules).where(eq(classModules.classId, classId));
  const id = crypto.randomUUID();
  await db.insert(classModules).values({
    id,
    classId,
    title,
    description: (body == null ? void 0 : body.description) || null,
    orderIndex: Number((order == null ? void 0 : order.value) || 0)
  });
  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: "curriculum.module.create",
    entityType: "module",
    entityId: id,
    details: { classId, title }
  });
  return { success: true, id };
});

export { modules_post as default };
//# sourceMappingURL=modules.post.mjs.map
