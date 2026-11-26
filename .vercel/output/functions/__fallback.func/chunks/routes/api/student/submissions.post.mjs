import { d as defineEventHandler, l as getUserSession, e as createError, c as readBody } from '../../../_/nitro.mjs';
import { and, eq } from 'drizzle-orm';
import { d as db, p as taskProgress, m as taskSubmissions } from '../../../_/connection.mjs';
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

const submissions_post = defineEventHandler(async (event) => {
  var _a;
  const session = await getUserSession(event);
  if (!((_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id)) {
    throw createError({ statusCode: 401, statusMessage: "Silakan login terlebih dahulu" });
  }
  const body = await readBody(event);
  if (!(body == null ? void 0 : body.taskId) || !(body == null ? void 0 : body.title) || !(body == null ? void 0 : body.description)) {
    throw createError({ statusCode: 400, statusMessage: "Judul pengerjaan dan catatan wajib diisi" });
  }
  const userId = session.user.id;
  const [prog] = await db.select().from(taskProgress).where(and(eq(taskProgress.userId, userId), eq(taskProgress.taskId, body.taskId))).limit(1);
  if (!prog) {
    throw createError({ statusCode: 404, statusMessage: "Progress tugas tidak ditemukan" });
  }
  if (prog.status === "locked") {
    throw createError({ statusCode: 403, statusMessage: "Tugas ini masih terkunci. Selesaikan tugas sebelumnya terlebih dahulu." });
  }
  await db.insert(taskSubmissions).values({
    id: crypto.randomUUID(),
    taskProgressId: prog.id,
    userId,
    taskId: body.taskId,
    attemptNumber: 1,
    title: body.title,
    description: body.description,
    githubUrl: body.githubUrl || null,
    liveUrl: body.liveUrl || null,
    status: "submitted"
  });
  await db.update(taskProgress).set({ status: "submitted" }).where(eq(taskProgress.id, prog.id));
  return {
    success: true,
    message: "Tugas berhasil dikumpulkan dan menunggu review mentor!"
  };
});

export { submissions_post as default };
//# sourceMappingURL=submissions.post.mjs.map
