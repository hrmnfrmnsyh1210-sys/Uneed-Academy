import { eq, or } from 'drizzle-orm'
import { loginSchema } from '~~/shared/schemas/auth'
import { verifyPassword } from '~~/server/utils/security'
import { db } from '~~/server/database/connection'
import { users, roles, userRoles } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const validation = loginSchema.safeParse(body)

  if (!validation.success) {
    throw createError({
      statusCode: 400,
      statusMessage: validation.error.errors[0]?.message || 'Input tidak valid',
    })
  }

  const { emailOrUsername, password } = validation.data

  const [user] = await db
    .select()
    .from(users)
    .where(or(eq(users.email, emailOrUsername), eq(users.username, emailOrUsername)))
    .limit(1)

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Email/Username atau password salah',
    })
  }

  const isValid = await verifyPassword(password, user.passwordHash)
  if (!isValid) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Email/Username atau password salah',
    })
  }

  if (user.status !== 'active') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Akun Anda sedang dinonaktifkan',
    })
  }

  const [assignedRole] = await db
    .select({ roleName: roles.name })
    .from(userRoles)
    .innerJoin(roles, eq(userRoles.roleId, roles.id))
    .where(eq(userRoles.userId, user.id))
    .limit(1)

  const sessionUser = {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    role: assignedRole?.roleName || 'student',
    isEmailVerified: user.isEmailVerified,
    totalXp: user.totalXp,
    currentLevel: user.currentLevel,
  }

  await setUserSession(event, {
    user: sessionUser,
    loggedInAt: new Date(),
  })

  return {
    success: true,
    message: 'Login berhasil',
    user: sessionUser,
  }
})
