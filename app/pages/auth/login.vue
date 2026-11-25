<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-[#0F172A]">
    <div class="max-w-md w-full bg-white dark:bg-[#1E293B] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
      <div class="text-center mb-8">
        <NuxtLink to="/" class="inline-flex items-center gap-2 mb-4">
          <div class="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">U</div>
          <span class="font-bold text-lg text-slate-900 dark:text-white">Uneed Academy</span>
        </NuxtLink>
        <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">Masuk ke Akun Anda</h2>
        <p class="text-xs text-slate-500 mt-1">Lanjutkan progres belajar dan quest teknologi Anda</p>
      </div>

      <div v-if="errorMessage" class="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email atau Username</label>
          <input
            v-model="form.emailOrUsername"
            type="text"
            required
            placeholder="admin@uneed.id atau budiraharjo"
            class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Password</label>
            <NuxtLink to="/auth/forgot-password" class="text-xs text-indigo-500 hover:underline">Lupa Password?</NuxtLink>
          </div>
          <input
            v-model="form.password"
            type="password"
            required
            placeholder="••••••••"
            class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/25 transition disabled:opacity-50"
        >
          {{ loading ? 'Memverifikasi...' : 'Masuk Sekarang' }}
        </button>
      </form>

      <div class="mt-6 text-center text-xs text-slate-500">
        Belum memiliki akun?
        <NuxtLink to="/auth/register" class="text-indigo-500 font-semibold hover:underline">Daftar Akun Siswa</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const form = ref({
  emailOrUsername: '',
  password: '',
})

const loading = ref(false)
const errorMessage = ref('')

async function handleLogin() {
  loading.value = true
  errorMessage.value = ''
  try {
    const res: any = await $fetch('/api/auth/login', {
      method: 'POST',
      body: form.value,
    })
    
    if (res.user.role === 'super_admin') {
      navigateTo('/admin')
    } else if (res.user.role === 'mentor') {
      navigateTo('/mentor')
    } else {
      navigateTo('/student')
    }
  } catch (err: any) {
    errorMessage.value = err?.data?.statusMessage || 'Login gagal, periksa kredensial Anda'
  } finally {
    loading.value = false
  }
}
</script>
