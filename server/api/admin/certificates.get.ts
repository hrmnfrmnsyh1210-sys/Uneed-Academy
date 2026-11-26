import { desc, eq } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { certificates, users, classes } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  await requireAdmin(event)

  const rows = await db
    .select({
      id: certificates.id,
      certificateNumber: certificates.certificateNumber,
      status: certificates.status,
      finalScore: certificates.finalScore,
      issuedAt: certificates.issuedAt,
      mentorName: certificates.mentorName,
      recipientName: users.name,
      recipientEmail: users.email,
      className: classes.title,
      classSlug: classes.slug,
    })
    .from(certificates)
    .innerJoin(users, eq(certificates.userId, users.id))
    .innerJoin(classes, eq(certificates.classId, classes.id))
    .orderBy(desc(certificates.issuedAt))

  return { certificates: rows }
})
