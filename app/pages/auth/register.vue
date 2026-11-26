<template>
  <!-- fixed inset-0 = strictly full viewport, no bottom gap or scroll -->
  <div class="fixed inset-0 flex overflow-hidden bg-[#f5f9ff]">

    <!-- Left Panel: Royal Blue -> Cyan Branding -->
    <div class="hidden lg:flex lg:w-5/12 flex-col justify-between px-10 py-7 relative overflow-hidden flex-shrink-0 text-white"
      style="background: linear-gradient(145deg, #1e3a8a 0%, #2563eb 55%, #0284c7 100%);">
      <svg class="absolute top-0 right-0 w-72 h-auto pointer-events-none opacity-80" viewBox="0 0 320 180" fill="none">
        <path d="M90 0C120 60 190 75 240 110C280 138 300 160 320 175V0H90Z" fill="#22d3ee" fill-opacity="0.35" />
      </svg>
      <svg class="absolute bottom-0 left-0 w-80 h-auto pointer-events-none opacity-80" viewBox="0 0 320 160" fill="none">
        <path d="M0 70C70 50 120 105 185 115C245 125 280 95 320 160H0V70Z" fill="#22d3ee" fill-opacity="0.3" />
      </svg>

      <NuxtLink to="/" class="flex items-center gap-3 relative z-10">
        <div class="h-9 w-9 rounded-full bg-white text-blue-700 flex items-center justify-center font-black text-lg shadow-lg">U</div>
        <div>
          <div class="font-extrabold text-white text-sm leading-none">Uneed Academy</div>
          <div class="text-cyan-200 text-[11px] font-semibold mt-0.5">Powered by Uneed Developer</div>
        </div>
      </NuxtLink>

      <div class="relative z-10 flex-1 flex flex-col justify-center py-4">
        <div class="flex items-center gap-4 mb-5">
          <img
            src="/images/hero-character.jpg"
            alt="Uneed Academy Mascot"
            class="w-24 h-24 rounded-full object-cover flex-shrink-0 shadow-[0_0_25px_rgba(34,211,238,0.45)] border-2 border-cyan-300/60"
          />
          <div>
            <div class="text-[10px] font-bold uppercase tracking-widest text-cyan-200 mb-1">Bergabung Sekarang</div>
            <h2 class="text-xl font-extrabold text-white leading-snug">
              Mulai perjalananmu.
              <span class="text-cyan-200 block">Bangun portfolio nyata.</span>
            </h2>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div v-for="perk in perks" :key="perk.title" class="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/15">
            <div class="text-lg mb-1">{{ perk.emoji }}</div>
            <div class="text-[11px] font-bold text-white mb-0.5">{{ perk.title }}</div>
            <div class="text-[10px] text-blue-100 leading-tight">{{ perk.desc }}</div>
          </div>
        </div>
      </div>

      <div class="relative z-10 border-t border-white/15 pt-4">
        <div class="flex -space-x-2 mb-2">
          <div v-for="(c, i) in ['bg-cyan-400','bg-sky-400','bg-blue-400','bg-indigo-400']" :key="i"
            class="h-6 w-6 rounded-full ring-2 ring-blue-900 flex items-center justify-center text-white text-[9px] font-bold" :class="c">
            {{ ['R','A','B','S'][i] }}
          </div>
          <div class="h-6 w-6 rounded-full ring-2 ring-blue-900 bg-white/20 flex items-center justify-center text-white text-[9px] font-bold">+</div>
        </div>
        <p class="text-[11px] text-blue-100">Bergabung bersama <strong class="text-white">5.200+</strong> peserta aktif di Uneed Academy.</p>
      </div>
    </div>

    <!-- Right Panel: Register Form -->
    <div class="flex-1 flex items-center justify-center px-6 overflow-hidden bg-[#f5f9ff]">
      <div class="w-full max-w-sm bg-white rounded-3xl border border-blue-100 shadow-xl shadow-blue-900/5 p-6">

        <NuxtLink to="/" class="flex items-center gap-2.5 mb-4 lg:hidden">
          <div class="h-8 w-8 rounded-full flex items-center justify-center text-white font-black text-sm"
            style="background:linear-gradient(135deg,#22d3ee,#2563eb)">U</div>
          <span class="font-extrabold text-slate-900 text-sm">Uneed Academy</span>
        </NuxtLink>

        <div class="mb-4">
          <h1 class="text-xl font-extrabold text-slate-900 mb-0.5">Buat akun baru</h1>
          <p class="text-xs text-slate-500">Gratis untuk memulai. Tidak butuh kartu kredit.</p>
        </div>

        <div v-if="errorMessage" class="flex items-start gap-2.5 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium mb-3">
          <UIcon name="i-heroicons-exclamation-circle" class="w-4 h-4 flex-shrink-0 mt-0.5" />
          {{ errorMessage }}
        </div>

        <form @submit.prevent="handleRegister" class="space-y-2.5">
          <div>
            <label class="block text-[11px] font-bold text-slate-700 mb-1">Nama Lengkap</label>
            <input v-model="form.name" type="text" required placeholder="Contoh: Budi Raharjo"
              class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm bg-slate-50/70 text-slate-800 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition" />
          </div>

          <div class="grid grid-cols-2 gap-2.5">
            <div>
              <label class="block text-[11px] font-bold text-slate-700 mb-1">Username</label>
              <input v-model="form.username" type="text" required placeholder="budiraharjo"
                class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm bg-slate-50/70 text-slate-800 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-slate-700 mb-1">WhatsApp</label>
              <input v-model="form.phoneNumber" type="text" required placeholder="081234567890"
                class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm bg-slate-50/70 text-slate-800 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition" />
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-slate-700 mb-1">Email</label>
            <input v-model="form.email" type="email" required placeholder="nama@email.com"
              class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm bg-slate-50/70 text-slate-800 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition" />
          </div>

          <div class="grid grid-cols-2 gap-2.5">
            <div>
              <label class="block text-[11px] font-bold text-slate-700 mb-1">Password</label>
              <input v-model="form.password" type="password" required placeholder="Min. 8 karakter"
                class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm bg-slate-50/70 text-slate-800 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-slate-700 mb-1">Konfirmasi</label>
              <input v-model="form.confirmPassword" type="password" required placeholder="Ulangi"
                class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm bg-slate-50/70 text-slate-800 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition" />
            </div>
          </div>

          <div class="flex items-start gap-2 pt-0.5">
            <input v-model="form.termsAccepted" type="checkbox" id="terms" required
              class="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer flex-shrink-0" />
            <label for="terms" class="text-[11px] text-slate-500 leading-snug cursor-pointer">
              Saya menyetujui <NuxtLink to="/terms" class="text-blue-600 font-semibold hover:underline">Syarat & Ketentuan</NuxtLink>
              dan <NuxtLink to="/privacy" class="text-blue-600 font-semibold hover:underline">Kebijakan Privasi</NuxtLink>.
            </label>
          </div>

          <button type="submit" :disabled="loading"
            class="w-full py-3 rounded-full text-white text-xs font-extrabold uppercase tracking-wider transition hover:opacity-90 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
            <span v-if="loading" class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
              Mendaftarkan akun...
            </span>
            <span v-else>Daftar Sekarang — Gratis</span>
          </button>
        </form>

        <p class="text-center text-[11px] text-slate-500 mt-3.5">
          Sudah punya akun?
          <NuxtLink to="/auth/login" class="text-blue-600 font-bold hover:text-blue-800 transition ml-1">Masuk di sini</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const form = ref({
  name: '', username: '', email: '', phoneNumber: '',
  password: '', confirmPassword: '', termsAccepted: false,
})
const loading = ref(false)
const errorMessage = ref('')

const perks = [
  { emoji: '🎯', title: 'Sequential Tasks', desc: 'Tugas bertahap, disetujui mentor' },
  { emoji: '🏆', title: 'Badge & XP', desc: 'Reward otomatis tiap pencapaian' },
  { emoji: '📜', title: 'Sertifikat', desc: 'Digital, verifiable QR Code' },
  { emoji: '👨‍💻', title: 'Mentor Review', desc: 'Feedback langsung dari mentor' },
]

async function handleRegister() {
  loading.value = true
  errorMessage.value = ''
  try {
    await $fetch('/api/auth/register', { method: 'POST', body: form.value })
    navigateTo('/student')
  } catch (err: any) {
    errorMessage.value = err?.data?.statusMessage || 'Registrasi gagal, periksa data Anda.'
  } finally {
    loading.value = false
  }
}
</script>
