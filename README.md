# Uneed Academy — Learn. Build. Achieve.

> Powered by Uneed Developer

Uneed Academy adalah platform Learning Management System (LMS) modern berstandar enterprise yang berfokus pada pembelajaran teknologi, pemrograman terapan, *project-based learning*, *sequential learning engine*, dan *gamification*.

---

## 1. Quick Overview

- **Tagline**: Learn. Build. Achieve.
- **Brand**: Uneed Developer
- **Method**: Project-Based & Sequential Learning
- **Business Model**: Pay Per Class & Free Community Classes
- **Primary Language**: Bahasa Indonesia (IDR Currency, Asia/Jakarta Timezone)
- **Tech Stack**:
  - **Framework**: Nuxt 4 (Vue 3 Composition API, Nitro Engine, TypeScript)
  - **Styling & UI**: Tailwind CSS, Nuxt UI, Lucide Icons, Plus Jakarta Sans & JetBrains Mono
  - **Database**: TiDB Cloud (MySQL wire protocol compatible with TLS & Serverless pooling) via Drizzle ORM
  - **Auth**: Nuxt Auth Utils with secure HTTP-only cookies, role-based access control (RBAC), and bcrypt password hashing
  - **Storage**: Cloudflare R2 (Private & Public buckets via S3-compatible client & Presigned URLs)
  - **Integrations**: Midtrans (Payment Gateway), Resend (Transactional Email), PDF-lib & QRCode (Certificate generator), Chart.js (Analytics)

---

## 2. System Architecture

Lihat detail arsitektur lengkap di:
- [ARCHITECTURE.md](file:///d:/Uneed%20Academy/docs/ARCHITECTURE.md)
- [DATABASE.md](file:///d:/Uneed%20Academy/docs/DATABASE.md)
- [API.md](file:///d:/Uneed%20Academy/docs/API.md)
- [SECURITY.md](file:///d:/Uneed%20Academy/docs/SECURITY.md)
- [DEPLOYMENT.md](file:///d:/Uneed%20Academy/docs/DEPLOYMENT.md)
- [PROGRESS.md](file:///d:/Uneed%20Academy/docs/PROGRESS.md)

---

## 3. Getting Started

### Prerequisites
- Node.js >= 20.x (Current: Node.js 26.x supported)
- npm or pnpm
- Akun TiDB Cloud (MySQL driver compatible)
- Akun Cloudflare R2
- Akun Midtrans (Sandbox / Production)
- Akun Resend

### Installation

1. Clone repositori & install dependencies:
   ```bash
   npm install
   ```

2. Konfigurasi file environment:
   ```bash
   cp .env.example .env
   ```
   Isi seluruh credential yang dibutuhkan (Database URL, Midtrans, Resend, Cloudflare R2, Session Secret).

3. Jalankan Database Migration & Seeding:
   ```bash
   npm run db:push
   npm run db:seed
   ```

4. Jalankan Development Server:
   ```bash
   npm run dev
   ```

5. Akses website:
   - Public Website: `http://localhost:3000`
   - Student Dashboard: `http://localhost:3000/student`
   - Mentor Workspace: `http://localhost:3000/mentor`
   - Super Admin Console: `http://localhost:3000/admin`
