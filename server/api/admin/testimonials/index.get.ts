import { asc, desc } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { testimonials } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  await requireAdmin(event)

  const rows = await db.select().from(testimonials).orderBy(asc(testimonials.role), desc(testimonials.sortOrder))
  return { testimonials: rows }
})
