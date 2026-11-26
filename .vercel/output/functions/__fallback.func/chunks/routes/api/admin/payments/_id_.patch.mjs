import { d as defineEventHandler, r as requireAdmin, h as getRouterParam, e as createError, c as readBody } from '../../../../_/nitro.mjs';
import crypto from 'node:crypto';
import { eq } from 'drizzle-orm';
import { d as db, k as transactions, h as enrollments, n as notifications, a as auditLogs } from '../../../../_/connection.mjs';
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

const _id__patch = defineEventHandler(async (event) => {
  const admin = await requireAdmin(event);
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, statusMessage: "ID transaksi wajib diisi" });
  const body = await readBody(event);
  const action = (body == null ? void 0 : body.action) === "reject" ? "reject" : "approve";
  const [transaction] = await db.select().from(transactions).where(eq(transactions.id, id)).limit(1);
  if (!transaction) throw createError({ statusCode: 404, statusMessage: "Transaksi tidak ditemukan" });
  const status = action === "approve" ? "paid" : "rejected";
  await db.update(transactions).set({
    status,
    verifiedByUserId: admin.id,
    paidAt: action === "approve" ? /* @__PURE__ */ new Date() : transaction.paidAt,
    rejectionReason: action === "reject" ? (body == null ? void 0 : body.reason) || "Pembayaran tidak dapat diverifikasi" : null
  }).where(eq(transactions.id, id));
  if (action === "approve" && transaction.enrollmentId) {
    await db.update(enrollments).set({ status: "active" }).where(eq(enrollments.id, transaction.enrollmentId));
  }
  await db.insert(notifications).values({
    id: crypto.randomUUID(),
    userId: transaction.userId,
    title: action === "approve" ? "Pembayaran disetujui" : "Pembayaran ditolak",
    message: action === "approve" ? "Pembayaran kamu telah diverifikasi. Kelas sudah aktif dan dapat diakses." : `Pembayaran kamu ditolak: ${(body == null ? void 0 : body.reason) || "tidak dapat diverifikasi"}`,
    type: "payment_verified",
    linkUrl: "/student/classes"
  }).catch(() => void 0);
  await db.insert(auditLogs).values({
    id: crypto.randomUUID(),
    userId: admin.id,
    action: `payment.${action}`,
    entityType: "transaction",
    entityId: id,
    details: { orderId: transaction.orderId }
  });
  return { success: true, status };
});

export { _id__patch as default };
//# sourceMappingURL=_id_.patch.mjs.map
