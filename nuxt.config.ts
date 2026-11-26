export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    'nuxt-auth-utils'
  ],

  css: ['~/assets/css/main.css'],

  // Pastikan file halaman dinamis seperti [slug].vue ikut dipindai Tailwind.
  tailwindcss: {
    experimental: {
      strictScanContentPaths: true
    }
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  },

  runtimeConfig: {
    // Secret keys (server only)
    databaseUrl: process.env.DATABASE_URL,
    sessionPassword: process.env.NUXT_SESSION_PASSWORD,
    r2AccountId: process.env.R2_ACCOUNT_ID,
    r2AccessKeyId: process.env.R2_ACCESS_KEY_ID,
    r2SecretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    r2BucketName: process.env.R2_BUCKET_NAME || 'uneed-academy-assets',
    midtransServerKey: process.env.MIDTRANS_SERVER_KEY,
    resendApiKey: process.env.RESEND_API_KEY,
    emailFrom: process.env.EMAIL_FROM || 'Uneed Academy <noreply@uneed.id>',
    initialAdminEmail: process.env.INITIAL_ADMIN_EMAIL || 'admin@uneed.id',
    initialAdminPassword: process.env.INITIAL_ADMIN_PASSWORD || 'UneedSuperAdmin2026!',

    // Public keys
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME || 'Uneed Academy',
      appUrl: process.env.NUXT_PUBLIC_APP_URL || 'http://localhost:3000',
      midtransClientKey: process.env.MIDTRANS_CLIENT_KEY,
      midtransIsProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
      r2PublicDomain: process.env.R2_PUBLIC_DOMAIN || ''
    }
  },

  nitro: {
    preset: 'vercel'
  }
})
