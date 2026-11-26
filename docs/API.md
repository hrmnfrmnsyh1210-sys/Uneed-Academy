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
- `GET /api/public/classes` — **Terimplementasi.** Daftar kelas published dari database (level, harga, durasi, jumlah quest, total XP, mentor, warna kartu).
- `GET /api/public/classes/:slug` — **Terimplementasi.** Detail kelas: deskripsi, outcome, prasyarat, target, tools, modul + materi + quest, mentor, testimoni, dan kelas terkait.
- `GET /api/public/testimonials` — **Terimplementasi.** Data mentor & alumni aktif dari tabel `testimonials` untuk landing page.
- `GET /api/classes` — Ambil daftar kelas publik dengan filter kategori, level, harga, pagination.
- `GET /api/classes/:slug` — Ambil detail lengkap kelas publik, silabus, mentor, dan badge.
- `GET /api/categories` — Ambil seluruh kategori kelas.
- `POST /api/admin/classes` — **Terimplementasi.** Buat kelas baru (Super Admin only).
- `PATCH /api/admin/classes/:id` — **Terimplementasi.** Update data/status kelas (Super Admin only).
- `DELETE /api/admin/classes/:id` — **Terimplementasi.** Arsipkan kelas (Super Admin only).

### 2b. Admin Console (Super Admin only)
Semua endpoint di bawah membutuhkan session dengan role `super_admin` atau `admin`.
- `GET /api/admin/overview` — Statistik pendapatan, siswa, review, sertifikat, kelas/modul/quest, transaksi terbaru.
- `GET /api/admin/classes` — Daftar lengkap kelas beserta jumlah modul, quest, dan pendaftar.
- `GET /api/admin/students` — Daftar siswa beserta kelas aktif, progress rata-rata, XP, dan sertifikat.
- `GET /api/admin/curriculum` — Struktur kurikulum semua kelas (modul, materi, quest).
- `POST /api/admin/curriculum/modules` — Tambah modul pada kelas.
- `POST /api/admin/curriculum/tasks` — Tambah quest pada modul.
- `GET /api/admin/payments` — Daftar transaksi beserta siswa, kelas, dan status.
- `PATCH /api/admin/payments/:id` — Setujui/tolak pembayaran (`{ "action": "approve" | "reject", "reason"?: string }`); otomatis mengaktifkan enrollment & notifikasi.
- `GET /api/admin/badges` — Daftar badge beserta jumlah perolehan.
- `POST /api/admin/badges` — Tambah badge gamifikasi.
- `GET /api/admin/certificates` — Daftar sertifikat yang diterbitkan.
- `GET /api/admin/testimonials` — Daftar mentor & alumni.
- `POST /api/admin/testimonials` — Tambah testimoni.
- `PATCH /api/admin/testimonials/:id` — Edit testimoni / aktif-nonaktifkan.
- `DELETE /api/admin/testimonials/:id` — Hapus testimoni.

### 3. Enrollments & Payments
- `GET /api/student/enrollments` — Ambil daftar kelas yang diikuti siswa.
- `POST /api/payments/checkout` — Inisialisasi pembayaran Midtrans Snap Token.
- `POST /api/payments/webhook` — Endpoint webhook notifikasi Midtrans.
- `POST /api/payments/manual` — Konfirmasi transfer bank manual & upload bukti transfer.
- `POST /api/enrollments/free` — Pendaftaran langsung untuk kelas gratis.
- `PATCH /api/admin/payments/:id` — Verifikasi manual payment oleh admin (lihat bagian 2b).

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
