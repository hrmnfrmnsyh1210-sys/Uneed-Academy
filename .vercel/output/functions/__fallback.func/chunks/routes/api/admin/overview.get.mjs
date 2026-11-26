import { d as defineEventHandler, r as requireAdmin } from '../../../_/nitro.mjs';
import { sql, eq, inArray, desc, isNull } from 'drizzle-orm';
import { d as db, e as users, j as userRoles, r as roles, k as transactions, c as classes, m as taskSubmissions, f as certificates, i as classModules, t as tasks, h as enrollments } from '../../../_/connection.mjs';
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

const overview_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const [[counts], paidRows, recentTransactions, recentClasses] = await Promise.all([
    db.select({
      students: sql`COUNT(DISTINCT ${users.id})`
    }).from(users).innerJoin(userRoles, eq(userRoles.userId, users.id)).innerJoin(roles, eq(roles.id, userRoles.roleId)).where(eq(roles.name, "student")),
    db.select({
      status: transactions.status,
      value: sql`COALESCE(SUM(${transactions.amount}), 0)`,
      count: sql`COUNT(*)`
    }).from(transactions).where(inArray(transactions.status, ["paid", "waiting_verification"])).groupBy(transactions.status),
    db.select({
      id: transactions.id,
      orderId: transactions.orderId,
      amount: transactions.amount,
      status: transactions.status,
      paymentMethod: transactions.paymentMethod,
      createdAt: transactions.createdAt,
      studentName: users.name,
      className: classes.title
    }).from(transactions).innerJoin(users, eq(transactions.userId, users.id)).innerJoin(classes, eq(transactions.classId, classes.id)).orderBy(desc(transactions.createdAt)).limit(5),
    db.select({
      id: classes.id,
      title: classes.title,
      status: classes.status,
      difficulty: classes.difficulty,
      price: classes.price
    }).from(classes).where(isNull(classes.deletedAt)).orderBy(desc(classes.createdAt)).limit(5)
  ]);
  const [reviewRow] = await db.select({
    count: sql`COUNT(*)`
  }).from(taskSubmissions).where(inArray(taskSubmissions.status, ["submitted", "under_review"]));
  const [certRow] = await db.select({
    count: sql`COUNT(*)`
  }).from(certificates).where(eq(certificates.status, "valid"));
  const [classRow] = await db.select({ count: sql`COUNT(*)` }).from(classes);
  const [moduleRow] = await db.select({ count: sql`COUNT(*)` }).from(classModules);
  const [taskRow] = await db.select({ count: sql`COUNT(*)` }).from(tasks);
  const [activeEnrollmentRow] = await db.select({
    count: sql`COUNT(*)`
  }).from(enrollments).where(eq(enrollments.status, "active"));
  const paid = paidRows.find((row) => row.status === "paid");
  const waiting = paidRows.find((row) => row.status === "waiting_verification");
  return {
    stats: {
      revenue: Number((paid == null ? void 0 : paid.value) || 0),
      students: Number((counts == null ? void 0 : counts.students) || 0),
      activeEnrollments: Number((activeEnrollmentRow == null ? void 0 : activeEnrollmentRow.count) || 0),
      pendingReviews: Number((reviewRow == null ? void 0 : reviewRow.count) || 0),
      pendingPayments: Number((waiting == null ? void 0 : waiting.count) || 0),
      certificates: Number((certRow == null ? void 0 : certRow.count) || 0),
      classes: Number((classRow == null ? void 0 : classRow.count) || 0),
      modules: Number((moduleRow == null ? void 0 : moduleRow.count) || 0),
      tasks: Number((taskRow == null ? void 0 : taskRow.count) || 0)
    },
    recentTransactions: recentTransactions.map((row) => ({
      ...row,
      amount: Number(row.amount || 0)
    })),
    recentClasses: recentClasses.map((row) => ({
      ...row,
      price: Number(row.price || 0)
    }))
  };
});

export { overview_get as default };
//# sourceMappingURL=overview.get.mjs.map
