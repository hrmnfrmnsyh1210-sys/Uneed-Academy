# PRODUCTION & DEPLOYMENT GUIDE — UNEED ACADEMY

## 1. Hosting Architecture on Vercel
- **Framework**: Nuxt 4 (Server-Side Rendering & Nitro Serverless Handlers).
- **Preset**: `@nuxt/nitro` Vercel preset (`preset: 'vercel'`).
- **Database**: TiDB Cloud via MySQL2 connection pool dengan TLS/SSL `rejectUnauthorized: true`.
- **Object Storage**: Cloudflare R2 via `@aws-sdk/client-s3` (Presigned URL model).

---

## 2. Environment Variables Checklist
Konfigurasikan variabel berikut pada **Vercel Project Settings > Environment Variables**:

| Variable | Description | Example |
|---|---|---|
| `NUXT_PUBLIC_APP_NAME` | Nama brand aplikasi | `Uneed Academy` |
| `NUXT_PUBLIC_APP_URL` | Domain publik | `https://academy.uneed.id` |
| `DATABASE_URL` | TiDB Cloud TLS Connection String | `mysql://user:pass@gateway.tidbcloud.com:4000/uneed_academy?ssl={"rejectUnauthorized":true}` |
| `NUXT_SESSION_PASSWORD` | Kunci enkripsi cookie sesi (min 32 char) | `rand-key-minimum-32-characters-secure` |
| `R2_ACCOUNT_ID` | Cloudflare Account ID | `abcdef1234567890` |
| `R2_ACCESS_KEY_ID` | Cloudflare R2 Access Key | `r2-access-key` |
| `R2_SECRET_ACCESS_KEY` | Cloudflare R2 Secret Key | `r2-secret-key` |
| `R2_BUCKET_NAME` | Nama bucket penyimpanan | `uneed-academy-storage` |
| `MIDTRANS_SERVER_KEY` | Kunci server Midtrans | `SB-Mid-server-XXXXX` |
| `MIDTRANS_CLIENT_KEY` | Kunci client Midtrans | `SB-Mid-client-XXXXX` |
| `MIDTRANS_IS_PRODUCTION` | Mode Midtrans | `false` (staging) / `true` |
| `RESEND_API_KEY` | Kunci API Resend email | `re_12345678` |
| `EMAIL_FROM` | Alamat pengirim email notifikasi | `Uneed Academy <noreply@uneed.id>` |

---

## 3. Database Migration Command
Jalankan migrasi schema ke TiDB Cloud sebelum rilis produksi:
```bash
npx drizzle-kit push
```

Untuk inisialisasi data awal super admin dan kelas dasar:
```bash
npm run db:seed
```
