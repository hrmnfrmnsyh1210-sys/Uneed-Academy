import { d as defineEventHandler, l as getUserSession, e as createError } from '../../../_/nitro.mjs';
import { eq, desc } from 'drizzle-orm';
import { d as db, k as transactions, c as classes } from '../../../_/connection.mjs';
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

const transactions_get = defineEventHandler(async (event) => {
  var _a;
  const session = await getUserSession(event);
  if (!((_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id)) {
    throw createError({ statusCode: 401, statusMessage: "Silakan login terlebih dahulu" });
  }
  const rows = await db.select({
    id: transactions.id,
    orderId: transactions.orderId,
    classTitle: classes.title,
    classSlug: classes.slug,
    paymentMethod: transactions.paymentMethod,
    amount: transactions.amount,
    status: transactions.status,
    createdAt: transactions.createdAt
  }).from(transactions).innerJoin(classes, eq(transactions.classId, classes.id)).where(eq(transactions.userId, session.user.id)).orderBy(desc(transactions.createdAt));
  return { transactions: rows };
});

export { transactions_get as default };
//# sourceMappingURL=transactions.get.mjs.map
