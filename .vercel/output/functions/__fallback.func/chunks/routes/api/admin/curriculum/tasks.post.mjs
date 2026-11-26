import { d as defineEventHandler, r as requireAdmin, c as readBody, e as createError, f as toNumber, s as slugify } from '../../../../_/nitro.mjs';
import crypto from 'node:crypto';
import { eq, sql } from 'drizzle-orm';
import { d as db, i as classModules, t as tasks, a as auditLogs } from '../../../../_/connection.mjs';
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

const tasks_post = defineEventHandler(async (event) => {
  const admin = await requireAdmin(event);
  const body = await readBody(event);
  const moduleId = String((body == null ? void 0 : body.moduleId) || "");
  const title = String((body == null ? void 0 : body.title) || "").trim();
  if (!moduleId || !title) {
    throw createError({ statusCode: 400, statusMessage: "Modul dan judul quest wajib diisi" });
  }
  const [mod] = await db.select().from(classModules).where(eq(classModules.id, moduleId)).limit(1);
  if (!mod) throw createError({ statusCode: 404, statusMessage: "Modul tidak ditemukan" });
  const [order] = await db.select({
    value: sql`COALESCE(MAX(${tasks.orderIndex}), -1) + 1`
  }).from(tasks).where(eq(tasks.moduleId, moduleId));
  const taskType = ["reading", "coding", "project", "quiz", "deployment", "final_project"].includes(String((body == null ? void 0 : body.taskType) || "")) ? String(body.taskType) : "coding";
  const id = crypto.randomUUID();
  await db.insert(tasks).values({
    id,
    moduleId,
    title,
    slug: `${slugify(title) || "quest"}-${id.slice(0, 6)}`,
    taskType,
    description: (body == null ? void 0 : body.description) || null,
    instructions: (body == null ? void 0 : body.instructions) || null,
    estimatedDurationMinutes: toNumber(body == null ? void 0 : body.estimatedDurationMinutes, 60),
    orderIndex: Number((order == null ? void 0 : order.value) || 0),
    xpReward: toNumber(body == null ? void 0 : body.xpReward, 100),
    status: "published"
  });
  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: "curriculum.task.create",
    entityType: "task",
    entityId: id,
    details: { moduleId, title }
  });
  return { success: true, id };
});

export { tasks_post as default };
//# sourceMappingURL=tasks.post.mjs.map
