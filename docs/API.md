# UNEED ACADEMY API SPECIFICATION

Base URL: `/api`

### 1. Authentication & Session
- `POST /api/auth/register` — Registrasi akun baru (default role: student).
- `POST /api/auth/login` — Login kredensial & set HTTP-only cookie.
- `POST /api/auth/logout` — Hapus active session cookie.
- `GET /api/auth/me` — Ambil data profile pengguna yang sedang login & perannya.
- `POST /api/auth/verify-email` — Verifikasi email via token.
- `POST /api/auth/forgot-password` — Request token reset password.
- `POST /api/auth/reset-password` — Reset password via valid token.

### 2. Classes & Curriculum
- `GET /api/classes` — Ambil daftar kelas publik dengan filter kategori, level, harga, pagination.
- `GET /api/classes/:slug` — Ambil detail lengkap kelas publik, silabus, mentor, dan badge.
- `GET /api/categories` — Ambil seluruh kategori kelas.
- `POST /api/admin/classes` — Buat kelas baru (Super Admin only).
- `PATCH /api/admin/classes/:id` — Update data kelas (Super Admin only).
- `DELETE /api/admin/classes/:id` — Arsipkan kelas (Super Admin only).

### 3. Enrollments & Payments
- `GET /api/student/enrollments` — Ambil daftar kelas yang diikuti siswa.
- `POST /api/payments/checkout` — Inisialisasi pembayaran Midtrans Snap Token.
- `POST /api/payments/webhook` — Endpoint webhook notifikasi Midtrans.
- `POST /api/payments/manual` — Konfirmasi transfer bank manual & upload bukti transfer.
- `POST /api/enrollments/free` — Pendaftaran langsung untuk kelas gratis.
- `POST /api/admin/payments/:id/approve` — Verifikasi manual payment oleh admin.
- `POST /api/admin/payments/:id/reject` — Penolakan manual payment dengan alasan.

### 4. Classroom & Sequential Learning Engine
- `GET /api/student/classes/:id/curriculum` — Ambil struktur silabus kelas siswa dengan status lock/unlock aktual.
- `GET /api/student/lessons/:id` — Ambil konten materi pelajaran.
- `POST /api/student/lessons/:id/complete` — Tandai materi pelajaran telah selesai dipelajari.
- `GET /api/student/tasks/:id` — Ambil instruksi quest/tugas siswa (jika status unlocked).
- `POST /api/student/tasks/:id/submit` — Pengumpulan hasil tugas siswa (attempt baru).
- `GET /api/student/tasks/:id/submissions` — Riwayat submission siswa pada tugas tertentu.

### 5. Mentor Review Workspace
- `GET /api/mentor/classes` — Ambil kelas yang diampu mentor.
- `GET /api/mentor/submissions` — Review queue antrean tugas siswa.
- `GET /api/mentor/submissions/:id` — Detail tugas siswa beserta rubric penilaian.
- `POST /api/mentor/submissions/:id/approve` — Luluskan tugas, berikan skor, buka task berikutnya, berikan badge/XP.
- `POST /api/mentor/submissions/:id/revision` — Kembalikan tugas untuk revisi dengan catatan mentor.

### 6. Gamification & Certificates
- `GET /api/student/achievements` — Ambil perolehan badge, total XP, dan riwayat level.
- `GET /api/student/certificates` — Ambil daftar sertifikat digital siswa.
- `GET /api/certificates/verify/:code` — Halaman verifikasi keaslian sertifikat publik.
- `POST /api/student/classes/:id/claim-certificate` — Evaluasi kelulusan & terbitkan sertifikat PDF jika syarat terpenuhi.
