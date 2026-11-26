import { d as defineEventHandler } from '../../../_/nitro.mjs';
import { eq, asc } from 'drizzle-orm';
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

const testimonials_get = defineEventHandler(async () => {
  const rows = await db.select({
    id: testimonials.id,
    role: testimonials.role,
    name: testimonials.name,
    headline: testimonials.headline,
    quote: testimonials.quote,
    avatarUrl: testimonials.avatarUrl,
    classSlug: testimonials.classSlug,
    rating: testimonials.rating,
    sortOrder: testimonials.sortOrder
  }).from(testimonials).where(eq(testimonials.isActive, true)).orderBy(asc(testimonials.sortOrder), asc(testimonials.name));
  return {
    mentors: rows.filter((row) => row.role === "mentor"),
    alumni: rows.filter((row) => row.role === "alumni")
  };
});

export { testimonials_get as default };
//# sourceMappingURL=testimonials.get.mjs.map
