import { d as defineEventHandler, l as getUserSession, e as createError } from '../../../_/nitro.mjs';
import { eq, asc } from 'drizzle-orm';
import { d as db, c as classes, h as enrollments, p as taskProgress, i as classModules, t as tasks } from '../../../_/connection.mjs';
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

const classes_get = defineEventHandler(async (event) => {
  var _a;
  const session = await getUserSession(event);
  if (!((_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id)) {
    throw createError({ statusCode: 401, statusMessage: "Silakan login terlebih dahulu" });
  }
  const userId = session.user.id;
  const allClasses = await db.select().from(classes).where(eq(classes.status, "published")).orderBy(asc(classes.createdAt));
  const userEnrollments = await db.select().from(enrollments).where(eq(enrollments.userId, userId));
  const enrollmentMap = new Map(userEnrollments.map((e) => [e.classId, e]));
  const userProgress = await db.select().from(taskProgress).where(eq(taskProgress.userId, userId));
  const modules = await db.select().from(classModules);
  const moduleToClass = new Map(modules.map((m) => [m.id, m.classId]));
  const allTasks = await db.select().from(tasks);
  const taskCountMap = /* @__PURE__ */ new Map();
  for (const t of allTasks) {
    const cId = moduleToClass.get(t.moduleId);
    if (cId) taskCountMap.set(cId, (taskCountMap.get(cId) || 0) + 1);
  }
  const catalog = allClasses.map((cls) => {
    const enr = enrollmentMap.get(cls.id);
    const clsProgress = userProgress.filter((p) => p.classId === cls.id);
    const done = clsProgress.filter((p) => p.status === "completed").length;
    const review = clsProgress.filter((p) => p.status === "submitted" || p.status === "under_review").length;
    const totalTasks = taskCountMap.get(cls.id) || 0;
    const locked = Math.max(0, totalTasks - done - review);
    return {
      id: cls.id,
      slug: cls.slug,
      title: cls.title,
      shortDescription: cls.shortDescription,
      difficulty: cls.difficulty,
      price: Number(cls.price),
      estimatedDurationHours: cls.estimatedDurationHours,
      totalTasks,
      enrollmentStatus: (enr == null ? void 0 : enr.status) || "none",
      // none, pending, active, completed
      progressPercentage: (enr == null ? void 0 : enr.progressPercentage) || 0,
      done,
      review,
      locked
    };
  });
  const enrolledClasses = catalog.filter((c) => c.enrollmentStatus === "active" || c.enrollmentStatus === "completed");
  return {
    enrolledClasses,
    catalog
  };
});

export { classes_get as default };
//# sourceMappingURL=classes.get.mjs.map
