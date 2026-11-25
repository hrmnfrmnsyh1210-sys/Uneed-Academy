import { z } from 'zod'

export const taskSubmissionSchema = z.object({
  taskId: z.string().min(1, 'Task ID wajib disertakan'),
  title: z.string().min(3, 'Judul pengerjaan minimal 3 karakter'),
  description: z.string().min(10, 'Deskripsi pengerjaan minimal 10 karakter'),
  githubUrl: z.string().url('URL GitHub harus valid').optional().or(z.literal('')),
  liveUrl: z.string().url('URL Live demo harus valid').optional().or(z.literal('')),
  attachmentUrl: z.string().url().optional().or(z.literal('')),
  notes: z.string().optional(),
})

export const taskReviewSchema = z.object({
  submissionId: z.string().min(1),
  status: z.enum(['approved', 'revision_required']),
  score: z.number().min(0).max(100),
  feedback: z.string().min(5, 'Feedback mentor minimal 5 karakter'),
})
