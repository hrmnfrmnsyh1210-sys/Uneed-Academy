import { d as defineEventHandler, c as readBody, e as createError, m as hashPassword, j as setUserSession } from '../../../_/nitro.mjs';
import { or, eq } from 'drizzle-orm';
import { r as registerSchema } from '../../../_/auth.mjs';
import { d as db, e as users, r as roles, j as userRoles } from '../../../_/connection.mjs';
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
import 'zod';
import 'drizzle-orm/mysql2';
import 'mysql2/promise';
import 'drizzle-orm/mysql-core';

const register_post = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  const validation = registerSchema.safeParse(body);
  if (!validation.success) {
    throw createError({
      statusCode: 400,
      statusMessage: ((_a = validation.error.errors[0]) == null ? void 0 : _a.message) || "Validasi form gagal"
    });
  }
  const { name, username, email, phoneNumber, password } = validation.data;
  const existing = await db.select({ id: users.id }).from(users).where(or(eq(users.email, email), eq(users.username, username))).limit(1);
  if (existing.length > 0) {
    throw createError({
      statusCode: 409,
      statusMessage: "Email atau username sudah terdaftar"
    });
  }
  const hashedPassword = await hashPassword(password);
  const userId = crypto.randomUUID();
  await db.insert(users).values({
    id: userId,
    name,
    username,
    email,
    phoneNumber,
    passwordHash: hashedPassword,
    isEmailVerified: false,
    status: "active",
    totalXp: 0,
    currentLevel: 1
  });
  let [studentRole] = await db.select().from(roles).where(eq(roles.name, "student")).limit(1);
  if (!studentRole) {
    const roleId = crypto.randomUUID();
    await db.insert(roles).values({
      id: roleId,
      name: "student",
      description: "Siswa Uneed Academy"
    });
    studentRole = { id: roleId, name: "student", description: "Siswa Uneed Academy", createdAt: /* @__PURE__ */ new Date() };
  }
  await db.insert(userRoles).values({
    userId,
    roleId: studentRole.id
  });
  const studentUser = {
    id: userId,
    name,
    username,
    email,
    phoneNumber,
    role: "student",
    isEmailVerified: false,
    totalXp: 0,
    currentLevel: 1
  };
  await setUserSession(event, {
    user: studentUser,
    loggedInAt: /* @__PURE__ */ new Date()
  });
  return {
    success: true,
    message: "Registrasi berhasil",
    user: studentUser
  };
});

export { register_post as default };
//# sourceMappingURL=register.post.mjs.map
