<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-[#0F172A]">
    <div class="max-w-md w-full bg-white dark:bg-[#1E293B] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
      <div class="text-center mb-8">
        <NuxtLink to="/" class="inline-flex items-center gap-2 mb-4">
          <div class="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">U</div>
          <span class="font-bold text-lg text-slate-900 dark:text-white">Uneed Academy</span>
        </NuxtLink>
        <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">Daftar Akun Siswa</h2>
        <p class="text-xs text-slate-500 mt-1">Mulai perjalanan sequential learning teknologi Anda</p>
      </div>

      <div v-if="errorMessage" class="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleRegister" class="space-y-3.5">
        <div>
          <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Nama Lengkap</label>
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="Contoh: Budi Raharjo"
            class="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Username</label>
            <input
              v-model="form.username"
              type="text"
              required
              placeholder="budiraharjo"
              class="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">WhatsApp</label>
            <input
              v-model="form.phoneNumber"
              type="text"
              required
              placeholder="08123456789"
              class="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            required
            placeholder="nama@email.com"
            class="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Password</label>
            <input
              v-model="form.password"
              type="password"
              required
              placeholder="Min 8 karakter"
              class="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Konfirmasi</label>
            <input
              v-model="form.confirmPassword"
              type="password"
              required
              placeholder="Ulangi password"
              class="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div class="flex items-center gap-2 pt-1">
          <input
            v-model="form.termsAccepted"
            type="checkbox"
            id="terms"
            required
            class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label for="terms" class="text-xs text-slate-600 dark:text-slate-400">
            Saya menyetujui Syarat & Ketentuan Uneed Academy
          </label>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full mt-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/25 transition disabled:opacity-50"
        >
          {{ loading ? 'Mendaftarkan Akun...' : 'Daftar Sekarang' }}
        </button>
      </form>

      <div class="mt-6 text-center text-xs text-slate-500">
        Sudah memiliki akun?
        <NuxtLink to="/auth/login" class="text-indigo-500 font-semibold hover:underline">Masuk di Sini</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const form = ref({
  name: '',
  username: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  termsAccepted: false,
})

const loading = ref(false)
const errorMessage = ref('')

async function handleRegister() {
  loading.value = true
  errorMessage.value = ''
  try {
    await $fetch('/api/auth/register', {
      method: 'POST',
      body: form.value,
    })
    navigateTo('/student')
  } catch (err: any) {
    errorMessage.value = err?.data?.statusMessage || 'Registrasi gagal, periksa data Anda'
  } finally {
    loading.value = false
  }
}
</script>
