import { d as defineEventHandler, r as requireAdmin, h as getRouterParam, e as createError } from '../../../../_/nitro.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  const admin = await requireAdmin(event);
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, statusMessage: "ID testimoni wajib diisi" });
  await db.delete(testimonials).where(eq(testimonials.id, id));
  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: "testimonial.delete",
    entityType: "testimonial",
    entityId: id
  });
  return { success: true };
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
