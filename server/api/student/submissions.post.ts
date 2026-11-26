import { eq, and } from 'drizzle-orm'
import { db } from '~~/server/database/connection'
import { taskProgress, taskSubmissions } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.id) {
    throw createError({ statusCode: 401, statusMessage: 'Silakan login terlebih dahulu' })
  }

  const body = await readBody<{
    taskId?: string
    title?: string
    githubUrl?: string
    liveUrl?: string
    description?: string
  }>(event)

  if (!body?.taskId || !body?.title || !body?.description) {
    throw createError({ statusCode: 400, statusMessage: 'Judul pengerjaan dan catatan wajib diisi' })
  }

  const userId = session.user.id
  const [prog] = await db
    .select()
    .from(taskProgress)
    .where(and(eq(taskProgress.userId, userId), eq(taskProgress.taskId, body.taskId)))
    .limit(1)

  if (!prog) {
    throw createError({ statusCode: 404, statusMessage: 'Progress tugas tidak ditemukan' })
  }

  if (prog.status === 'locked') {
    throw createError({ statusCode: 403, statusMessage: 'Tugas ini masih terkunci. Selesaikan tugas sebelumnya terlebih dahulu.' })
  }

  await db.insert(taskSubmissions).values({
    id: crypto.randomUUID(),
    taskProgressId: prog.id,
    userId,
    taskId: body.taskId,
    attemptNumber: 1,
    title: body.title,
    description: body.description,
    githubUrl: body.githubUrl || null,
    liveUrl: body.liveUrl || null,
    status: 'submitted',
  })

  await db
    .update(taskProgress)
    .set({ status: 'submitted' })
    .where(eq(taskProgress.id, prog.id))

  return {
    success: true,
    message: 'Tugas berhasil dikumpulkan dan menunggu review mentor!',
  }
})
