# DEVELOPMENT PROGRESS & AUDIT LOG — UNEED ACADEMY

## Status Dashboard
- **Current Phase**: Phase 1 — Project Foundation & Architecture
- **Overall Completion**: In Progress
- **Local Time**: 2026-11-25 Asia/Jakarta

---

## 1. Fitur yang Sudah Selesai (Completed)
- [x] Dokumen Arsitektur Sistem (`docs/ARCHITECTURE.md`)
- [x] Entity Relationship Diagram & Spesifikasi Skema Database (`docs/DATABASE.md`)
- [x] Spesifikasi Keamanan & Pencegahan Bypass (`docs/SECURITY.md`)
- [x] Inisialisasi Git repositori lokal (`.git`)

---

## 2. Fitur yang Sedang Dikerjakan (In Progress)
- [x] Inisialisasi Project Nuxt 4 Fullstack
- [x] Konfigurasi TypeScript, Tailwind CSS, Nuxt UI, Lucide Icons, Pinia
- [x] Setup Drizzle ORM dengan TiDB Cloud MySQL driver
- [x] Implementasi Database Schema (`server/database/schema/*.ts`)
- [x] Setup Nuxt Auth Utils & RBAC Middleware
- [x] Panel admin: dashboard analytics, kelas, kurikulum, siswa, pembayaran, badge, sertifikat, mentor & alumni (data real dari database)
- [ ] Integrasi payment gateway Midtrans & verifikasi manual
- [ ] Learning engine lengkap (submit, review mentor, sequential unlock otomatis)

### Catatan pembaruan publik (2026-11-25)
- Landing page, katalog, dan halaman detail kelas kini memakai data real dari database melalui `/api/public/*`.
- Tabel `testimonials` ditambahkan sebagai sumber data Mentor & Alumni; data awal diisi via `npm run db:seed:public`.
- Setiap kelas memiliki halaman detail `/classes/:slug` lengkap dengan kurikulum, mentor, prasyarat, dan testimoni.
- Navbar landing bersifat fixed: transparan dengan teks putih di bagian atas, berubah solid setelah scroll.
- Perbaikan Tailwind: `strictScanContentPaths` diaktifkan agar halaman dinamis (`[slug].vue`, `[id].vue`, `[code].vue`) ikut dipindai; sebelumnya class CSS di halaman detail tidak tergenerate sehingga layout berantakan.

### Catatan pembaruan panel admin (2026-11-25)
- Seluruh halaman `/admin/*` tidak lagi memakai data hardcode; semuanya diambil dari database melalui `/api/admin/*`.
- Endpoint admin dilindungi RBAC (`super_admin`/`admin`) dan `app/middleware/admin.global.ts` mengalihkan pengguna non-admin.
- CRUD kelas, penambahan modul/quest, verifikasi pembayaran (aktifkan enrollment + notifikasi), pengelolaan badge, dan pengelolaan testimoni mentor/alumni sudah berfungsi.
- Akun super admin awal dibuat via `npm run db:seed:admin`: `admin@uneed.academy` / `Admin123!` (bisa diganti lewat env `ADMIN_EMAIL` / `ADMIN_PASSWORD`).
- Layout admin sekarang responsif: sidebar drawer di mobile, tabel dengan horizontal scroll, dan header menampilkan identitas akun yang login.

---

## 3. Fitur yang Belum Selesai (Pending)
- [x] Phase 2: Public Website (Landing page, Katalog kelas, Detail kelas, Auth pages)
- [x] Phase 3: Class Management (Admin CRUD kelas, modul, quest, curriculum builder)
- [ ] Phase 4: Payment & Enrollment (Midtrans gateway, manual payment, aktivasi otomatis)
- [ ] Phase 5: Learning Engine (Workspace Uneed Classroom, sequential task lock/unlock, submission & mentor review)
- [ ] Phase 6: Gamification (Badge reward otomatis, XP transaction, level system)
- [ ] Phase 7: Digital Certification (PDF-lib generation, Cloudflare R2 upload, QR Code, verification page)
- [ ] Phase 8: Supporting Features (Notifications, student portfolio, analytics dashboard, settings)
- [ ] Phase 9: Production Hardening & Testing (Unit/Integration tests, build verification)

---

## 4. Kebutuhan Kredensial Eksternal
Untuk koneksi live saat deploy/production, pengguna dapat melengkapi variabel pada `.env`:
1. **TiDB Cloud**: `DATABASE_URL` atau host, port, user, password, database dengan TLS enabled.
2. **Cloudflare R2**: `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET_NAME`.
3. **Midtrans**: `MIDTRANS_SERVER_KEY`, `MIDTRANS_CLIENT_KEY`, `MIDTRANS_IS_PRODUCTION`.
4. **Resend**: `RESEND_API_KEY`, `EMAIL_FROM`.
5. **Session Secret**: `NUXT_SESSION_PASSWORD` (min 32 karakter).
