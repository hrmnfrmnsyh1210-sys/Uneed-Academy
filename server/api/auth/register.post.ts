import { registerSchema } from '~~/shared/schemas/auth'
import { hashPassword } from '~~/server/utils/security'
import { v4 as uuidv4 } from 'uuid'

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
  const hashedPassword = await hashPassword(password)
  const userId = `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`

  // Buat sesi login otomatis bagi role Student
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
