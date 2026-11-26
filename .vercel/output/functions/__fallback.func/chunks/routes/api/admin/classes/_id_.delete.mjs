import { d as defineEventHandler, r as requireAdmin, h as getRouterParam, e as createError } from '../../../../_/nitro.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  const admin = await requireAdmin(event);
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, statusMessage: "ID kelas wajib diisi" });
  await db.update(classes).set({ status: "archived", deletedAt: /* @__PURE__ */ new Date() }).where(eq(classes.id, id));
  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: "class.archive",
    entityType: "class",
    entityId: id
  });
  return { success: true };
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
