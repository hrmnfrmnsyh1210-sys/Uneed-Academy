<template>
  <!-- fixed inset-0 = strictly full viewport, no bottom gap or scroll -->
  <div class="fixed inset-0 flex overflow-hidden bg-[#f5f9ff]">

    <!-- Left Panel: Royal Blue -> Cyan Branding with Mascot & Organic Waves -->
    <div class="hidden lg:flex lg:w-5/12 flex-col justify-between px-10 py-7 relative overflow-hidden flex-shrink-0 text-white"
      style="background: linear-gradient(145deg, #1e3a8a 0%, #2563eb 55%, #0284c7 100%);">
      <!-- Organic cyan wave top-right -->
      <svg class="absolute top-0 right-0 w-72 h-auto pointer-events-none opacity-80" viewBox="0 0 320 180" fill="none">
        <path d="M90 0C120 60 190 75 240 110C280 138 300 160 320 175V0H90Z" fill="#22d3ee" fill-opacity="0.35" />
      </svg>
      <!-- Organic cyan wave bottom-left -->
      <svg class="absolute bottom-0 left-0 w-80 h-auto pointer-events-none opacity-80" viewBox="0 0 320 160" fill="none">
        <path d="M0 70C70 50 120 105 185 115C245 125 280 95 320 160H0V70Z" fill="#22d3ee" fill-opacity="0.3" />
      </svg>

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 relative z-10">
        <div class="h-9 w-9 rounded-full bg-white text-blue-700 flex items-center justify-center font-black text-lg shadow-lg">U</div>
        <div>
          <div class="font-extrabold text-white text-sm leading-none">Uneed Academy</div>
          <div class="text-cyan-200 text-[11px] font-semibold mt-0.5">Powered by Uneed Developer</div>
        </div>
      </NuxtLink>

      <!-- Center Mascot + Task Flow -->
      <div class="relative z-10 flex-1 flex flex-col justify-center py-4">
        <div class="flex items-center gap-4 mb-5">
          <img
            src="/images/hero-character.jpg"
            alt="Uneed Academy Mascot"
            class="w-24 h-24 rounded-full object-cover flex-shrink-0 shadow-[0_0_25px_rgba(34,211,238,0.45)] border-2 border-cyan-300/60"
          />
          <div>
            <div class="text-[10px] font-bold uppercase tracking-widest text-cyan-200 mb-1">Sequential Learning</div>
            <h2 class="text-xl font-extrabold text-white leading-snug">
              Setiap tugas harus dibuktikan.
              <span class="text-cyan-200 block">Bukan sekadar submit.</span>
            </h2>
          </div>
        </div>

        <!-- Mini task flow visual -->
        <div class="space-y-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4">
          <div v-for="(task, i) in tasks" :key="i" class="flex items-center gap-3 text-xs">
            <div class="h-5 w-5 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[9px]"
              :class="task.status === 'done' ? 'bg-cyan-400 text-slate-900' : task.status === 'active' ? 'bg-white text-blue-700' : 'bg-white/15 text-white/50'">
              {{ task.status === 'done' ? '✓' : task.num }}
            </div>
            <span :class="task.status === 'done' ? 'text-cyan-200 text-xs' : task.status === 'active' ? 'text-white font-semibold text-xs' : 'text-white/45 text-xs'">
              {{ task.title }}
            </span>
            <span v-if="task.status === 'active'" class="ml-auto px-2 py-0.5 rounded-full bg-cyan-400/25 text-cyan-100 font-bold text-[9px]">Aktif</span>
            <span v-else-if="task.status === 'locked'" class="ml-auto text-white/35 text-[10px]">🔒</span>
          </div>
        </div>
      </div>

      <!-- Bottom quote -->
      <div class="relative z-10 border-t border-white/15 pt-4">
        <p class="text-[11px] text-blue-100 italic leading-relaxed mb-2">
          "Materinya jelas, tugasnya menantang, dan saya berhasil membangun portfolio pertama saya."
        </p>
        <div class="flex items-center gap-2">
          <div class="h-6 w-6 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center text-[9px] font-bold">RP</div>
          <div>
            <div class="text-[11px] font-bold text-white">Rizky Pratama</div>
            <div class="text-[10px] text-cyan-200">Web Developer, Jakarta</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Panel: Login Form -->
    <div class="flex-1 flex items-center justify-center px-6 overflow-hidden bg-[#f5f9ff]">
      <div class="w-full max-w-sm bg-white rounded-3xl border border-blue-100 shadow-xl shadow-blue-900/5 p-7">

        <!-- Mobile logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5 mb-5 lg:hidden">
          <div class="h-8 w-8 rounded-full flex items-center justify-center text-white font-black text-sm"
            style="background:linear-gradient(135deg,#22d3ee,#2563eb)">U</div>
          <span class="font-extrabold text-slate-900 text-sm">Uneed Academy</span>
        </NuxtLink>

        <div class="mb-5">
          <h1 class="text-xl font-extrabold text-slate-900 mb-1">Selamat datang kembali</h1>
          <p class="text-xs text-slate-500">Masuk untuk melanjutkan quest belajarmu.</p>
        </div>

        <!-- Error alert -->
        <div v-if="errorMessage" class="flex items-start gap-2.5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium mb-4">
          <UIcon name="i-heroicons-exclamation-circle" class="w-4 h-4 flex-shrink-0 mt-0.5" />
          {{ errorMessage }}
        </div>

        <form @submit.prevent="handleLogin" class="space-y-3.5">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Email atau Username</label>
            <input
              v-model="form.emailOrUsername"
              type="text"
              required
              autocomplete="username"
              placeholder="email@domain.com atau username"
              class="w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50/70 text-slate-800 placeholder-slate-400 outline-none transition"
              :class="errorMessage ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100' : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white'"
            />
          </div>

          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="text-xs font-bold text-slate-700">Password</label>
              <NuxtLink to="/auth/forgot-password" class="text-xs text-blue-600 hover:text-blue-800 font-semibold transition">Lupa password?</NuxtLink>
            </div>
            <div class="relative">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                autocomplete="current-password"
                placeholder="Masukkan password"
                class="w-full px-4 py-2.5 pr-11 rounded-xl border text-sm bg-slate-50/70 text-slate-800 placeholder-slate-400 outline-none transition"
                :class="errorMessage ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100' : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white'"
              />
              <button type="button" @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition">
                <UIcon :name="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" class="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full py-3 rounded-full text-white text-xs font-extrabold uppercase tracking-wider transition hover:opacity-90 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            style="background: linear-gradient(135deg, #22d3ee, #2563eb);"
          >
            <span v-if="loading" class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
              Memverifikasi...
            </span>
            <span v-else>Masuk Sekarang</span>
          </button>
        </form>

        <p class="text-center text-xs text-slate-500 mt-5">
          Belum punya akun?
          <NuxtLink to="/auth/register" class="text-blue-600 font-bold hover:text-blue-800 transition ml-1">Daftar Gratis</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const { fetch: refreshSession } = useUserSession()
const form = ref({ emailOrUsername: '', password: '' })
const loading = ref(false)
const errorMessage = ref('')
const showPassword = ref(false)

const tasks = [
  { num: 1, title: 'Introduction to Web Development', status: 'done' },
  { num: 2, title: 'HTML Fundamentals', status: 'done' },
  { num: 3, title: 'CSS Fundamentals & Layout', status: 'active' },
  { num: 4, title: 'Responsive Design', status: 'locked' },
  { num: 5, title: 'JavaScript Basics', status: 'locked' },
]

async function handleLogin() {
  loading.value = true
  errorMessage.value = ''
  try {
    const res: any = await $fetch('/api/auth/login', {
      method: 'POST',
      body: form.value,
    })
    // Perbarui state session di client sebelum pindah halaman.
    // Tanpa ini, middleware melihat loggedIn=false dan mengirim kembali ke /auth/login.
    await refreshSession()
    if (res.user.role === 'super_admin') await navigateTo('/admin')
    else if (res.user.role === 'mentor') await navigateTo('/mentor')
    else await navigateTo('/student')
  } catch (err: any) {
    errorMessage.value = err?.data?.statusMessage || 'Email/username atau password salah.'
  } finally {
    loading.value = false
  }
}
</script>
