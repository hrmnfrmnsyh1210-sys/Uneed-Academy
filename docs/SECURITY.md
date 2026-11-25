# SECURITY SPECIFICATION — UNEED ACADEMY

## 1. Authentication & Session Defense
- **Session Layer**: Nuxt Auth Utils via sealed HTTP-only cookies (`SameSite=Lax`, `Secure` in production).
- **Password Security**: Bcrypt hash with standard cost factor 12.
- **Brute Force Protection**: Rate limiting on `/api/auth/login` and `/api/auth/register` (Serverless-safe KV / sliding window).
- **CSRF & Security Headers**: Strict Content-Security-Policy (CSP), X-Frame-Options (`DENY`), X-Content-Type-Options (`nosniff`), Strict-Transport-Security (HSTS).

## 2. Server-Side Authorization & Anti-Tampering
- **Zero Trust Frontend**: Nilai tugas, harga kelas, status unlock, progress kelulusan, dan status pembayaran divalidasi dan dihitung 100% di server.
- **Sequential Learning Isolation**: Endpoint task submission dan lesson completion memverifikasi bahwa task sebelumnya benar-benar berstatus `completed`. Percobaan bypass langsung via API URL akan menghasilkan HTTP `403 Forbidden`.
- **Database Transactions**: Pemberian badge, penambahan XP, update progress, dan unlock task berikutnya dieksekusi dalam satu database transaction atomic dengan row locking untuk mencegah *race condition* atau *double spending/earning*.

## 3. Payment & Webhook Security
- **Midtrans Signature Verification**: Webhook memverifikasi SHA-512 signature `SHA512(order_id + status_code + gross_amount + ServerKey)`.
- **Idempotency**: Webhook mencatat `order_id` dan log transaksi. Jika webhook yang sama diterima berulang kali oleh Midtrans retry mechanism, transaksi tidak diproses dua kali.
- **Harga Kelas Terproteksi**: Total tagihan ditarik langsung dari database server (`classes.discount_price` atau `classes.price`), bukan parameter request dari browser pengguna.

## 4. File Upload & Storage Security (Cloudflare R2)
- **Direct Presigned URLs**: Klien meminta presigned upload URL dengan validasi ukuran file maksimum dan MIME-type whitelist (misal: image/jpeg, image/png, application/pdf, application/zip).
- **Private Isolation**: Bukti pembayaran (payment proof) dan tugas sensitif disimpan dalam bucket berakses private tanpa public URL, diakses via presigned download URL berwaktu singkat.
- **SSRF Prevention**: URL live demo atau GitHub yang dikirim siswa tidak diambil (fetched/crawled) secara otomatis oleh server aplikasi tanpa sanitasi ketat. Source code siswa tidak pernah dieksekusi langsung di server aplikasi.
