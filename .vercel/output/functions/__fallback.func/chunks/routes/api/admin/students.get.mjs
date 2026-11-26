import { d as defineEventHandler, r as requireAdmin } from '../../../_/nitro.mjs';
import { sql, eq, desc } from 'drizzle-orm';
import { d as db, e as users, f as certificates, h as enrollments, c as classes, j as userRoles, r as roles } from '../../../_/connection.mjs';
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

const students_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const rows = await db.select({
    id: users.id,
    name: users.name,
    username: users.username,
    email: users.email,
    status: users.status,
    totalXp: users.totalXp,
    currentLevel: users.currentLevel,
    createdAt: users.createdAt,
    activeClasses: sql`(SELECT COUNT(*) FROM ${enrollments} e WHERE e.user_id = ${users.id} AND e.status = 'active')`,
    latestClass: sql`(SELECT c.title FROM ${enrollments} e INNER JOIN ${classes} c ON c.id = e.class_id WHERE e.user_id = ${users.id} ORDER BY e.enrolled_at DESC LIMIT 1)`,
    averageProgress: sql`COALESCE((SELECT ROUND(AVG(e.progress_percentage)) FROM ${enrollments} e WHERE e.user_id = ${users.id}), 0)`,
    certificates: sql`(SELECT COUNT(*) FROM ${certificates} c WHERE c.user_id = ${users.id} AND c.status = 'valid')`
  }).from(users).innerJoin(userRoles, eq(userRoles.userId, users.id)).innerJoin(roles, eq(roles.id, userRoles.roleId)).where(eq(roles.name, "student")).orderBy(desc(users.createdAt));
  return {
    students: rows.map((row) => ({ ...row, totalXp: Number(row.totalXp || 0) }))
  };
});

export { students_get as default };
//# sourceMappingURL=students.get.mjs.map
