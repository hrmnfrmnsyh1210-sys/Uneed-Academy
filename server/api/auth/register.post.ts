import { eq, or } from 'drizzle-orm'
import { registerSchema } from '~~/shared/schemas/auth'
import { hashPassword } from '~~/server/utils/security'
import { db } from '~~/server/database/connection'
import { users, roles, userRoles } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const validation = registerSchema.safeParse(body)

  if (!validation.success) {
    throw createError({
      statusCode: 400,
      statusMessage: validation.error.errors[0]?.message || 'Validasi form gagal',
    })
  }

  const { name, username, email, phoneNumber, password } = validation.data

  // Check duplicate email or username
  const existing = await db
    .select({ id: users.id })
    .from(users)
    .where(or(eq(users.email, email), eq(users.username, username)))
    .limit(1)

  if (existing.length > 0) {
    throw createError({
      statusCode: 409,
      statusMessage: 'Email atau username sudah terdaftar',
    })
  }

  const hashedPassword = await hashPassword(password)
  const userId = crypto.randomUUID()

  await db.insert(users).values({
    id: userId,
    name,
    username,
    email,
    phoneNumber,
    passwordHash: hashedPassword,
    isEmailVerified: false,
    status: 'active',
    totalXp: 0,
    currentLevel: 1,
  })

  // Ensure 'student' role exists and assign it
  let [studentRole] = await db
    .select()
    .from(roles)
    .where(eq(roles.name, 'student'))
    .limit(1)

  if (!studentRole) {
    const roleId = crypto.randomUUID()
    await db.insert(roles).values({
      id: roleId,
      name: 'student',
      description: 'Siswa Uneed Academy',
    })
    studentRole = { id: roleId, name: 'student', description: 'Siswa Uneed Academy', createdAt: new Date() }
  }

  await db.insert(userRoles).values({
    userId,
    roleId: studentRole.id,
  })

  const studentUser = {
    id: userId,
    name,
    username,
    email,
    phoneNumber,
    role: 'student',
    isEmailVerified: false,
    totalXp: 0,
    currentLevel: 1,
  }

  await setUserSession(event, {
    user: studentUser,
    loggedInAt: new Date(),
  })

  return {
    success: true,
    message: 'Registrasi berhasil',
    user: studentUser,
  }
})
