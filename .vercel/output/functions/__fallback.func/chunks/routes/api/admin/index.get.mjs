import { d as defineEventHandler, r as requireAdmin } from '../../../_/nitro.mjs';
import { sql, eq, isNull, desc } from 'drizzle-orm';
import { d as db, c as classes, g as categories, h as enrollments, i as classModules, t as tasks } from '../../../_/connection.mjs';
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
  const rows = await db.select({
    id: classes.id,
    title: classes.title,
    slug: classes.slug,
    shortDescription: classes.shortDescription,
    difficulty: classes.difficulty,
    price: classes.price,
    discountPrice: classes.discountPrice,
    status: classes.status,
    estimatedDurationHours: classes.estimatedDurationHours,
    categoryName: categories.name,
    createdAt: classes.createdAt,
    taskCount: sql`(SELECT COUNT(*) FROM ${tasks} t INNER JOIN ${classModules} m ON t.module_id = m.id WHERE m.class_id = ${classes.id})`,
    moduleCount: sql`(SELECT COUNT(*) FROM ${classModules} m WHERE m.class_id = ${classes.id})`,
    enrollmentCount: sql`(SELECT COUNT(*) FROM ${enrollments} e WHERE e.class_id = ${classes.id})`
  }).from(classes).leftJoin(categories, eq(classes.categoryId, categories.id)).where(isNull(classes.deletedAt)).orderBy(desc(classes.createdAt));
  return {
    classes: rows.map((row) => ({
      ...row,
      price: Number(row.price || 0),
      discountPrice: row.discountPrice ? Number(row.discountPrice) : null,
      taskCount: Number(row.taskCount || 0),
      moduleCount: Number(row.moduleCount || 0),
      enrollmentCount: Number(row.enrollmentCount || 0)
    }))
  };
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
