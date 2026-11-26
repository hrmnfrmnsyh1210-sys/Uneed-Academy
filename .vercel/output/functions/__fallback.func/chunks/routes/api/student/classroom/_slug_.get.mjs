import { d as defineEventHandler, l as getUserSession, e as createError, h as getRouterParam } from '../../../../_/nitro.mjs';
import { eq, and, asc, desc } from 'drizzle-orm';
import { d as db, c as classes, h as enrollments, i as classModules, p as taskProgress, m as taskSubmissions, t as tasks } from '../../../../_/connection.mjs';
import 'unhead/server';
import '../../../../_/vue.mjs';
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

const _slug__get = defineEventHandler(async (event) => {
  var _a;
  const session = await getUserSession(event);
  if (!((_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id)) {
    throw createError({ statusCode: 401, statusMessage: "Silakan login terlebih dahulu" });
  }
  const slug = getRouterParam(event, "slug");
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: "Slug kelas tidak valid" });
  }
  const [cls] = await db.select().from(classes).where(eq(classes.slug, slug)).limit(1);
  if (!cls) {
    throw createError({ statusCode: 404, statusMessage: "Kelas tidak ditemukan" });
  }
  const userId = session.user.id;
  const [enrollment] = await db.select().from(enrollments).where(and(eq(enrollments.userId, userId), eq(enrollments.classId, cls.id))).limit(1);
  if (!enrollment || enrollment.status !== "active" && enrollment.status !== "completed") {
    return {
      enrolled: false,
      enrollmentStatus: (enrollment == null ? void 0 : enrollment.status) || "none",
      classInfo: {
        id: cls.id,
        slug: cls.slug,
        title: cls.title,
        shortDescription: cls.shortDescription,
        difficulty: cls.difficulty,
        price: Number(cls.price),
        estimatedDurationHours: cls.estimatedDurationHours
      },
      tasks: []
    };
  }
  const modules = await db.select().from(classModules).where(eq(classModules.classId, cls.id)).orderBy(asc(classModules.orderIndex));
  const progressRows = await db.select().from(taskProgress).where(and(eq(taskProgress.userId, userId), eq(taskProgress.classId, cls.id)));
  const progressMap = new Map(progressRows.map((p) => [p.taskId, p]));
  const submissionsRows = await db.select().from(taskSubmissions).where(eq(taskSubmissions.userId, userId)).orderBy(desc(taskSubmissions.submittedAt));
  const latestSubMap = /* @__PURE__ */ new Map();
  for (const sub of submissionsRows) {
    if (!latestSubMap.has(sub.taskId)) {
      latestSubMap.set(sub.taskId, sub);
    }
  }
  const questList = [];
  let idx = 1;
  for (const mod of modules) {
    const modTasks = await db.select().from(tasks).where(eq(tasks.moduleId, mod.id)).orderBy(asc(tasks.orderIndex));
    for (const t of modTasks) {
      const prog = progressMap.get(t.id);
      const latestSub = latestSubMap.get(t.id);
      let criteria = [];
      try {
        criteria = t.instructions ? JSON.parse(t.instructions) : [];
      } catch {
        criteria = t.instructions ? [t.instructions] : [];
      }
      questList.push({
        id: t.id,
        order: idx++,
        title: t.title,
        description: t.description || "",
        criteria,
        xpReward: t.xpReward,
        status: (prog == null ? void 0 : prog.status) || (idx === 2 ? "available" : "locked"),
        // locked, available, submitted, completed, revision_required
        score: (prog == null ? void 0 : prog.highestScore) || 0,
        mentorFeedback: (latestSub == null ? void 0 : latestSub.mentorFeedback) || "",
        submissionTitle: (latestSub == null ? void 0 : latestSub.title) || ""
      });
    }
  }
  return {
    enrolled: true,
    enrollmentStatus: enrollment.status,
    classInfo: {
      id: cls.id,
      slug: cls.slug,
      title: cls.title,
      shortDescription: cls.shortDescription,
      difficulty: cls.difficulty,
      price: Number(cls.price),
      estimatedDurationHours: cls.estimatedDurationHours
    },
    tasks: questList
  };
});

export { _slug__get as default };
//# sourceMappingURL=_slug_.get.mjs.map
