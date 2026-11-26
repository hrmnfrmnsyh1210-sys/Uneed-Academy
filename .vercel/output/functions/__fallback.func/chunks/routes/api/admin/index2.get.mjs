import { d as defineEventHandler, r as requireAdmin } from '../../../_/nitro.mjs';
import { asc, desc } from 'drizzle-orm';
import { d as db, o as testimonials } from '../../../_/connection.mjs';
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

const index_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const rows = await db.select().from(testimonials).orderBy(asc(testimonials.role), desc(testimonials.sortOrder));
  return { testimonials: rows };
});

export { index_get as default };
//# sourceMappingURL=index2.get.mjs.map
