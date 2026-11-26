import { d as defineEventHandler, l as getUserSession, e as createError, c as readBody } from '../../../_/nitro.mjs';
import { eq, and, asc } from 'drizzle-orm';
import { d as db, c as classes, h as enrollments, i as classModules, t as tasks, k as transactions, p as taskProgress } from '../../../_/connection.mjs';
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

const checkout_post = defineEventHandler(async (event) => {
  var _a;
  const session = await getUserSession(event);
  if (!((_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id)) {
    throw createError({ statusCode: 401, statusMessage: "Silakan login terlebih dahulu" });
  }
  const body = await readBody(event);
  const classId = body == null ? void 0 : body.classId;
  const paymentMethod = (body == null ? void 0 : body.paymentMethod) || "qris";
  if (!classId) {
    throw createError({ statusCode: 400, statusMessage: "ID kelas wajib diisi" });
  }
  const [cls] = await db.select().from(classes).where(eq(classes.id, classId)).limit(1);
  if (!cls) {
    throw createError({ statusCode: 404, statusMessage: "Kelas tidak ditemukan" });
  }
  const userId = session.user.id;
  const [existingEnrollment] = await db.select().from(enrollments).where(and(eq(enrollments.userId, userId), eq(enrollments.classId, classId))).limit(1);
  if (existingEnrollment && (existingEnrollment.status === "active" || existingEnrollment.status === "completed")) {
    return {
      success: true,
      status: existingEnrollment.status,
      message: "Anda sudah terdaftar di kelas ini"
    };
  }
  const modules = await db.select().from(classModules).where(eq(classModules.classId, classId)).orderBy(asc(classModules.orderIndex));
  const orderedTasks = [];
  for (const mod of modules) {
    const modTasks = await db.select({ id: tasks.id }).from(tasks).where(eq(tasks.moduleId, mod.id)).orderBy(asc(tasks.orderIndex));
    orderedTasks.push(...modTasks);
  }
  const priceNum = Number(cls.price);
  const isFree = priceNum <= 0;
  const isInstant = isFree || paymentMethod === "qris";
  const enrollmentStatus = isInstant ? "active" : "pending";
  const txStatus = isInstant ? "paid" : "waiting_verification";
  const enrollmentId = (existingEnrollment == null ? void 0 : existingEnrollment.id) || crypto.randomUUID();
  if (existingEnrollment) {
    await db.update(enrollments).set({ status: enrollmentStatus, totalRequiredTasks: orderedTasks.length }).where(eq(enrollments.id, existingEnrollment.id));
  } else {
    await db.insert(enrollments).values({
      id: enrollmentId,
      userId,
      classId,
      status: enrollmentStatus,
      progressPercentage: 0,
      completedTasksCount: 0,
      totalRequiredTasks: orderedTasks.length
    });
  }
  const orderId = `UA-${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
  await db.insert(transactions).values({
    id: crypto.randomUUID(),
    userId,
    classId,
    enrollmentId,
    orderId,
    paymentMethod: isFree ? "free" : paymentMethod,
    amount: cls.price,
    status: txStatus,
    paidAt: isInstant ? /* @__PURE__ */ new Date() : null
  });
  if (isInstant) {
    for (let i = 0; i < orderedTasks.length; i++) {
      const t = orderedTasks[i];
      const [existingProg] = await db.select({ id: taskProgress.id }).from(taskProgress).where(and(eq(taskProgress.userId, userId), eq(taskProgress.taskId, t.id))).limit(1);
      if (!existingProg) {
        await db.insert(taskProgress).values({
          id: crypto.randomUUID(),
          userId,
          taskId: t.id,
          classId,
          status: i === 0 ? "available" : "locked",
          unlockedAt: i === 0 ? /* @__PURE__ */ new Date() : null
        });
      }
    }
  }
  return {
    success: true,
    status: enrollmentStatus,
    orderId,
    message: isFree ? "Pendaftaran kelas gratis berhasil! Quest 1 sudah terbuka." : isInstant ? "Pembayaran berhasil dikonfirmasi! Kelas aktif dan Quest 1 sudah terbuka." : "Pesanan dibuat. Menunggu verifikasi pembayaran oleh Admin."
  };
});

export { checkout_post as default };
//# sourceMappingURL=checkout.post.mjs.map
