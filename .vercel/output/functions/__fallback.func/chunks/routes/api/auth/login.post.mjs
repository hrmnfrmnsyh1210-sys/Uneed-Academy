import { d as defineEventHandler, c as readBody, e as createError, v as verifyPassword, j as setUserSession } from '../../../_/nitro.mjs';
import { or, eq } from 'drizzle-orm';
import { l as loginSchema } from '../../../_/auth.mjs';
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

const login_post = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  const validation = loginSchema.safeParse(body);
  if (!validation.success) {
    throw createError({
      statusCode: 400,
      statusMessage: ((_a = validation.error.errors[0]) == null ? void 0 : _a.message) || "Input tidak valid"
    });
  }
  const { emailOrUsername, password } = validation.data;
  const [user] = await db.select().from(users).where(or(eq(users.email, emailOrUsername), eq(users.username, emailOrUsername))).limit(1);
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Email/Username atau password salah"
    });
  }
  const isValid = await verifyPassword(password, user.passwordHash);
  if (!isValid) {
    throw createError({
      statusCode: 401,
      statusMessage: "Email/Username atau password salah"
    });
  }
  if (user.status !== "active") {
    throw createError({
      statusCode: 403,
      statusMessage: "Akun Anda sedang dinonaktifkan"
    });
  }
  const [assignedRole] = await db.select({ roleName: roles.name }).from(userRoles).innerJoin(roles, eq(userRoles.roleId, roles.id)).where(eq(userRoles.userId, user.id)).limit(1);
  const sessionUser = {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    role: (assignedRole == null ? void 0 : assignedRole.roleName) || "student",
    isEmailVerified: user.isEmailVerified,
    totalXp: user.totalXp,
    currentLevel: user.currentLevel
  };
  await setUserSession(event, {
    user: sessionUser,
    loggedInAt: /* @__PURE__ */ new Date()
  });
  return {
    success: true,
    message: "Login berhasil",
    user: sessionUser
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
