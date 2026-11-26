import { eq, asc } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { testimonials } from '~~/server/database/schema'

export default defineEventHandler(async () => {
  const rows = await db
    .select({
      id: testimonials.id,
      role: testimonials.role,
      name: testimonials.name,
      headline: testimonials.headline,
      quote: testimonials.quote,
      avatarUrl: testimonials.avatarUrl,
      classSlug: testimonials.classSlug,
      rating: testimonials.rating,
      sortOrder: testimonials.sortOrder,
    })
    .from(testimonials)
    .where(eq(testimonials.isActive, true))
    .orderBy(asc(testimonials.sortOrder), asc(testimonials.name))

  return {
    mentors: rows.filter(row => row.role === 'mentor'),
    alumni: rows.filter(row => row.role === 'alumni'),
  }
})
