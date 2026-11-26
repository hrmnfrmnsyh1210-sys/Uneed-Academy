import { d as defineEventHandler, l as getUserSession, e as createError } from '../../../_/nitro.mjs';
import { eq, asc } from 'drizzle-orm';
import { d as db, t as tasks, p as taskProgress, c as classes } from '../../../_/connection.mjs';
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

const quests_get = defineEventHandler(async (event) => {
  var _a;
  const session = await getUserSession(event);
  if (!((_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id)) {
    throw createError({ statusCode: 401, statusMessage: "Silakan login terlebih dahulu" });
  }
  const rows = await db.select({
    id: taskProgress.id,
    taskId: tasks.id,
    title: tasks.title,
    classTitle: classes.title,
    classSlug: classes.slug,
    status: taskProgress.status,
    xpReward: tasks.xpReward,
    orderIndex: tasks.orderIndex
  }).from(taskProgress).innerJoin(tasks, eq(taskProgress.taskId, tasks.id)).innerJoin(classes, eq(taskProgress.classId, classes.id)).where(eq(taskProgress.userId, session.user.id)).orderBy(asc(tasks.orderIndex));
  return { quests: rows };
});

export { quests_get as default };
//# sourceMappingURL=quests.get.mjs.map
