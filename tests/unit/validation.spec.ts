import { describe, it, expect } from 'vitest'
import { registerSchema, loginSchema } from '../../shared/schemas/auth'
import { taskSubmissionSchema } from '../../shared/schemas/learning'

describe('Uneed Academy — Validation & Security Rules', () => {
  it('harus memvalidasi registrasi siswa baru dengan benar', () => {
    const validData = {
      name: 'Budi Raharjo',
      username: 'budiraharjo',
      email: 'budi@uneed.id',
      phoneNumber: '081234567890',
      password: 'SecurePassword123!',
      confirmPassword: 'SecurePassword123!',
      termsAccepted: true,
    }

    const result = registerSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('harus menolak registrasi jika password konfirmasi tidak cocok', () => {
    const invalidData = {
      name: 'Budi Raharjo',
      username: 'budiraharjo',
      email: 'budi@uneed.id',
      phoneNumber: '081234567890',
      password: 'SecurePassword123!',
      confirmPassword: 'DifferentPassword!',
      termsAccepted: true,
    }

    const result = registerSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('harus memvalidasi submission tugas siswa dengan URL pengerjaan', () => {
    const submissionData = {
      taskId: 'task_003_css',
      title: 'Implementasi Layout Flexbox Profile',
      description: 'Menyelesaikan modul CSS responsive dan flexbox sesuai instruksi.',
      githubUrl: 'https://github.com/budi/profile-flexbox',
      liveUrl: 'https://profile-budi.vercel.app',
    }

    const result = taskSubmissionSchema.safeParse(submissionData)
    expect(result.success).toBe(true)
  })

  it('harus menolak submission jika deskripsi terlalu singkat (<10 karakter)', () => {
    const invalidSubmission = {
      taskId: 'task_003_css',
      title: 'Tugas',
      description: 'selesai',
    }

    const result = taskSubmissionSchema.safeParse(invalidSubmission)
    expect(result.success).toBe(false)
  })
})
