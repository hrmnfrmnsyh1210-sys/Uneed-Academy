# SYSTEM ARCHITECTURE — UNEED ACADEMY

## 1. High-Level Architecture Overview

```text
┌────────────────────────────────────────────────────────────────────────┐
│                          Client Layer (Browser)                        │
│   - Public Portal & Catalog (/classes, /verify, /portfolio)           │
│   - Student Classroom & Dashboard (/student, /classroom)               │
│   - Mentor Review Workspace (/mentor)                                  │
│   - Super Admin Console (/admin)                                       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTPS / WSS
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   Nuxt 4 Fullstack Application Layer                   │
│  ┌─────────────────────────┐        ┌───────────────────────────────┐  │
│  │ Vue 3 App (Client/SSR)  │◄──────►│ Nitro Server Engine           │  │
│  │ - Pinia State Stores    │        │ - Nuxt Auth Utils (HTTP-Only) │  │
│  │ - Nuxt UI & Tailwind    │        │ - Zod Validation Middleware   │  │
│  │ - Client Routing & RBAC │        │ - RBAC Server Enforcers       │  │
│  └─────────────────────────┘        └──────────────┬────────────────┘  │
└────────────────────────────────────────────────────┼───────────────────┘
                                                     │
                   ┌─────────────────────────────────┼─────────────────────────────────┐
                   │                                 │                                 │
                   ▼                                 ▼                                 ▼
┌───────────────────────────────────┐ ┌───────────────────────────────┐ ┌───────────────────────────────────┐
│     TiDB Cloud (Relational DB)    │ │   Cloudflare R2 (S3 Storage)  │ │      Third-Party Services         │
│  - Drizzle ORM (MySQL TLS Pool)   │ │ - Presigned Upload / Download │ │ - Midtrans (Snap & Webhooks)      │
│  - ACID Transactions              │ │ - Submissions, Proofs, Badges │ │ - Resend (Transactional Email)    │
│  - Sequential Engine State        │ │ - Generated PDF Certificates  │ │ - PDF-lib & QRCode Generator      │
└───────────────────────────────────┘ └───────────────────────────────┘ └───────────────────────────────────┘
```

## 2. Key Modules & Subsystems

### A. Authentication & Session Management
- **Nuxt Auth Utils**: Session terenkripsi berbasis HTTP-only cookies dengan signing secret (`NUXT_SESSION_PASSWORD`).
- **Role-Based Access Control (RBAC)**: Tiga role baku: `super_admin`, `mentor`, `student`. Validasi ganda pada client router middleware dan Nitro server handler.
- **Password Security**: Bcrypt / Argon2 hashing dengan salt cost terstandarisasi.
- **Account Protection**: Email verification token expiry (24 jam) dan one-time password reset token expiry (1 jam).

### B. Sequential Learning Engine
- Aturan ketat pembukaan materi/tugas:
  1. Siswa harus memiliki status enrollment `active`.
  2. Task 1 otomatis berstatus `available`.
  3. Task $N$ berstatus `locked` hingga Task $N-1$ disetujui (`completed`) oleh Mentor atau sistem otomatis jika tipe quiz/confirmation.
  4. Penilaian mentor menghasilkan status `completed` (lulus) atau `revision_required` (wajib revisi).
  5. Penguncian divalidasi pada level server database transaction, mencegah manipulasi API URL maupun concurrent double-submission.

### C. Financial & Enrollment Subsystem
- Mendukung dua alur pembayaran:
  1. **Automated Midtrans Gateway**: Menggunakan Snap API, verifikasi signature SHA512, pemrosesan webhook idempotent.
  2. **Manual Bank Transfer**: Verifikasi bukti transfer manual oleh admin via private R2 presigned link.
- Aktivasi enrollment otomatis dan idempotensi webhook (menghindari duplikasi enrollment pada retry Midtrans).

### D. Digital Certificate Subsystem
- Certificate eligibility:
  - Enrollment berstatus `active` atau `completed`.
  - 100% tugas wajib berstatus `completed`.
  - Nilai akhir memenuhi minimum passing score.
- Diterbitkan dengan nomor resmi: `UA-{YYYY}-{UUID8}`.
- Digenerate menggunakan `pdf-lib` dan `qrcode`, diunggah ke Cloudflare R2, dan dapat diverifikasi secara publik di `/verify/{code}`.
