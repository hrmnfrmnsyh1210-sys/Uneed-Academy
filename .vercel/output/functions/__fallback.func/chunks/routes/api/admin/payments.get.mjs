import { d as defineEventHandler, r as requireAdmin } from '../../../_/nitro.mjs';
import { eq, desc } from 'drizzle-orm';
import { d as db, h as enrollments, c as classes, e as users, k as transactions } from '../../../_/connection.mjs';
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

const payments_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const rows = await db.select({
    id: transactions.id,
    orderId: transactions.orderId,
    amount: transactions.amount,
    status: transactions.status,
    paymentMethod: transactions.paymentMethod,
    paymentProofUrl: transactions.paymentProofUrl,
    rejectionReason: transactions.rejectionReason,
    createdAt: transactions.createdAt,
    paidAt: transactions.paidAt,
    studentName: users.name,
    studentEmail: users.email,
    className: classes.title,
    enrollmentStatus: enrollments.status
  }).from(transactions).innerJoin(users, eq(transactions.userId, users.id)).innerJoin(classes, eq(transactions.classId, classes.id)).leftJoin(enrollments, eq(transactions.enrollmentId, enrollments.id)).orderBy(desc(transactions.createdAt));
  return {
    payments: rows.map((row) => ({ ...row, amount: Number(row.amount || 0) }))
  };
});

export { payments_get as default };
//# sourceMappingURL=payments.get.mjs.map
