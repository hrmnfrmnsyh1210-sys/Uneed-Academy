import { d as defineEventHandler, r as requireAdmin } from '../../../_/nitro.mjs';
import { isNull, asc } from 'drizzle-orm';
import { d as db, c as classes, i as classModules, l as lessons, t as tasks } from '../../../_/connection.mjs';
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

const curriculum_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const classRows = await db.select({
    id: classes.id,
    title: classes.title,
    slug: classes.slug,
    status: classes.status
  }).from(classes).where(isNull(classes.deletedAt)).orderBy(asc(classes.title));
  const moduleRows = await db.select().from(classModules).orderBy(asc(classModules.orderIndex));
  const lessonRows = await db.select().from(lessons).orderBy(asc(lessons.orderIndex));
  const taskRows = await db.select().from(tasks).orderBy(asc(tasks.orderIndex));
  const curriculum = classRows.map((cls) => {
    const modules = moduleRows.filter((mod) => mod.classId === cls.id).map((mod) => ({
      id: mod.id,
      title: mod.title,
      description: mod.description,
      orderIndex: mod.orderIndex,
      lessons: lessonRows.filter((lesson) => lesson.moduleId === mod.id).map((lesson) => ({
        id: lesson.id,
        title: lesson.title,
        contentType: lesson.contentType,
        estimatedMinutes: lesson.estimatedMinutes
      })),
      tasks: taskRows.filter((task) => task.moduleId === mod.id).map((task) => ({
        id: task.id,
        title: task.title,
        taskType: task.taskType,
        xpReward: task.xpReward,
        status: task.status,
        orderIndex: task.orderIndex
      }))
    }));
    return {
      ...cls,
      modules,
      totalTasks: modules.reduce((sum, mod) => sum + mod.tasks.length, 0),
      totalXp: modules.reduce((sum, mod) => sum + mod.tasks.reduce((s, task) => s + task.xpReward, 0), 0)
    };
  });
  return { curriculum };
});

export { curriculum_get as default };
//# sourceMappingURL=curriculum.get.mjs.map
