export default defineNuxtRouteMiddleware(async (to) => {
  if (!to.path.startsWith('/admin')) return

  const { loggedIn, user } = useUserSession()

  if (!loggedIn.value) {
    return navigateTo({ path: '/auth/login', query: { redirect: to.fullPath } })
  }

  const role = (user.value as { role?: string } | null)?.role
  if (!['super_admin', 'admin'].includes(role || '')) {
    return navigateTo('/student')
  }
})
