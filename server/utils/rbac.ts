import type { H3Event } from 'h3'

export async function requireAuthUser(event: H3Event) {
  const session = await getUserSession(event)
  if (!session?.user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: Sesi tidak ditemukan atau telah berakhir',
    })
  }
  return session.user
}

export async function requireUserRole(event: H3Event, allowedRoles: string[]) {
  const user = await requireAuthUser(event)
  const userRole = (user as any).role || 'student'
  
  if (!allowedRoles.includes(userRole)) {
    throw createError({
      statusCode: 403,
      statusMessage: `Forbidden: Membutuhkan role [${allowedRoles.join(', ')}]`,
    })
  }
  return user
}
