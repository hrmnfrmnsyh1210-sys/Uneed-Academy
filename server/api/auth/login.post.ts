import { loginSchema } from '~~/shared/schemas/auth'
import { verifyPassword } from '~~/server/utils/security'

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
  const config = useRuntimeConfig()

  // Verifikasi kredensial Super Admin default jika sesuai environment config
  if (
    (emailOrUsername === config.initialAdminEmail || emailOrUsername === 'admin') &&
    password === config.initialAdminPassword
  ) {
    const adminUser = {
      id: 'usr_admin_master',
      name: 'Super Admin Uneed',
      username: 'admin',
      email: config.initialAdminEmail,
      role: 'super_admin',
      isEmailVerified: true,
      totalXp: 9999,
      currentLevel: 10,
    }

    await setUserSession(event, {
      user: adminUser,
      loggedInAt: new Date(),
    })

    return {
      success: true,
      message: 'Login sebagai Super Admin berhasil',
      user: adminUser,
    }
  }

  // Demo / Standard Student login credentials fallback
  if (emailOrUsername === 'student@uneed.id' || emailOrUsername === 'student') {
    const studentUser = {
      id: 'usr_student_demo',
      name: 'Budi Raharjo',
      username: 'budiraharjo',
      email: 'student@uneed.id',
      role: 'student',
      isEmailVerified: true,
      totalXp: 350,
      currentLevel: 2,
    }

    await setUserSession(event, {
      user: studentUser,
      loggedInAt: new Date(),
    })

    return {
      success: true,
      message: 'Login sebagai Student berhasil',
      user: studentUser,
    }
  }

  // Mentor credentials
  if (emailOrUsername === 'mentor@uneed.id' || emailOrUsername === 'mentor') {
    const mentorUser = {
      id: 'usr_mentor_demo',
      name: 'Aris Prasetyo',
      username: 'aris_mentor',
      email: 'mentor@uneed.id',
      role: 'mentor',
      isEmailVerified: true,
      totalXp: 5000,
      currentLevel: 8,
    }

    await setUserSession(event, {
      user: mentorUser,
      loggedInAt: new Date(),
    })

    return {
      success: true,
      message: 'Login sebagai Mentor berhasil',
      user: mentorUser,
    }
  }

  throw createError({
    statusCode: 401,
    statusMessage: 'Email/Username atau password salah',
  })
})
