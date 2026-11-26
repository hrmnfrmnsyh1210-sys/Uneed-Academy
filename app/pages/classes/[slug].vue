<template>
  <div class="min-h-screen bg-[#f5f9ff] text-slate-800 font-sans">
    <!-- Top Navbar -->
    <nav class="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-blue-100 shadow-sm">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2.5">
          <div class="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-black text-base shadow">U</div>
          <span class="font-extrabold text-sm text-slate-900">Uneed Academy</span>
        </NuxtLink>
        <div class="flex items-center gap-3">
          <NuxtLink to="/classes" class="text-xs font-bold text-slate-600 hover:text-blue-700 transition">Semua Kelas</NuxtLink>
          <NuxtLink v-if="loggedIn" to="/student"
            class="px-4 py-2 rounded-full text-white text-xs font-bold shadow-sm"
            style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
            Dashboard Saya
          </NuxtLink>
          <NuxtLink v-else to="/auth/login"
            class="px-4 py-2 rounded-full text-white text-xs font-bold shadow-sm"
            style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
            Masuk
          </NuxtLink>
        </div>
      </div>
    </nav>

    <div v-if="data?.classInfo" class="max-w-6xl mx-auto px-6 py-10 space-y-8">
      <!-- Hero Detail Card -->
      <div class="rounded-3xl p-8 text-white shadow-xl relative overflow-hidden"
        style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #0284c7 100%);">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div class="flex items-start gap-5">
            <StudentFolderIcon size="lg" :icon="style.icon" :back-color="style.backColor" :front-gradient="style.frontGradient" />
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-3 py-0.5 rounded-full bg-white/20 text-[11px] font-bold uppercase">{{ data.classInfo.difficulty }}</span>
                <span class="text-xs text-cyan-200 font-semibold">{{ syllabus.length }} Quest · {{ data.classInfo.estimatedDurationHours }} Jam</span>
              </div>
              <h1 class="text-2xl md:text-3xl font-black text-white">{{ data.classInfo.title }}</h1>
              <p class="text-sm text-blue-100 mt-2 max-w-2xl leading-relaxed">{{ data.classInfo.shortDescription }}</p>
            </div>
          </div>

          <div class="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-5 min-w-[220px] text-center space-y-3">
            <div class="text-xs text-cyan-100 font-semibold">Investasi Belajar</div>
            <div class="text-2xl font-black text-white">
              {{ data.classInfo.price === 0 ? 'Gratis' : 'Rp' + data.classInfo.price.toLocaleString('id-ID') }}
            </div>

            <NuxtLink v-if="data.enrollmentStatus === 'active' || data.enrollmentStatus === 'completed'"
              :to="`/student/classroom/${data.classInfo.slug}`"
              class="block w-full py-2.5 rounded-full bg-white text-blue-700 text-xs font-extrabold uppercase tracking-wider shadow hover:bg-cyan-50 transition">
              Masuk Classroom →
            </NuxtLink>
            <NuxtLink v-else-if="data.enrollmentStatus === 'pending'"
              to="/student/transactions"
              class="block w-full py-2.5 rounded-full bg-amber-400 text-slate-900 text-xs font-extrabold uppercase tracking-wider">
              Menunggu Verifikasi
            </NuxtLink>
            <button v-else @click="handleAction"
              class="w-full py-2.5 rounded-full bg-white text-blue-700 text-xs font-extrabold uppercase tracking-wider shadow hover:bg-cyan-50 transition">
              {{ data.classInfo.price === 0 ? 'Daftar Gratis Sekarang' : 'Beli Kelas Sekarang' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Syllabus / Kurikulum Quest -->
      <div class="bg-white rounded-3xl border border-blue-100 p-7 shadow-sm space-y-5">
        <div>
          <h2 class="text-lg font-extrabold text-slate-900">Silabus & Daftar Quest Berurutan</h2>
          <p class="text-xs text-slate-500 mt-0.5">Setiap quest harus diselesaikan dan disetujui mentor sebelum membuka quest berikutnya.</p>
        </div>

        <div class="space-y-3">
          <div v-for="q in syllabus" :key="q.id"
            class="p-4 rounded-2xl border border-slate-100 bg-slate-50/70 flex items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <div class="h-9 w-9 rounded-xl bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                {{ q.order }}
              </div>
              <div>
                <div class="text-sm font-bold text-slate-800">{{ q.title }}</div>
                <div class="text-xs text-slate-500 mt-0.5">{{ q.description }}</div>
              </div>
            </div>
            <span class="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold flex-shrink-0">
              +{{ q.xpReward }} XP
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const { loggedIn } = useUserSession()

const { data } = await useFetch(() => `/api/classes/${slug.value}`)
const syllabus = computed(() => data.value?.syllabus || [])

const styleMap: Record<string, { icon: string; backColor: string; frontGradient: string }> = {
  'basic-web-development': { icon: 'i-heroicons-code-bracket', backColor: '#db2777', frontGradient: 'linear-gradient(135deg,#f472b6,#ec4899)' },
  'vibe-coding-ai': { icon: 'i-heroicons-cpu-chip', backColor: '#059669', frontGradient: 'linear-gradient(135deg,#34d399,#10b981)' },
  'fullstack-web-development': { icon: 'i-heroicons-server-stack', backColor: '#0284c7', frontGradient: 'linear-gradient(135deg,#38bdf8,#2563eb)' },
  'database-engineering': { icon: 'i-heroicons-circle-stack', backColor: '#d97706', frontGradient: 'linear-gradient(135deg,#fbbf24,#f59e0b)' },
  'ui-ux-fundamentals': { icon: 'i-heroicons-paint-brush', backColor: '#e11d48', frontGradient: 'linear-gradient(135deg,#fb7185,#f43f5e)' },
  'react-nextjs': { icon: 'i-heroicons-bolt', backColor: '#7c3aed', frontGradient: 'linear-gradient(135deg,#a78bfa,#6366f1)' },
}

const style = computed(() => styleMap[slug.value] || { icon: 'i-heroicons-academic-cap', backColor: '#2563eb', frontGradient: 'linear-gradient(135deg,#60a5fa,#3b82f6)' })

function handleAction() {
  if (!loggedIn.value) {
    navigateTo('/auth/login')
    return
  }
  navigateTo('/student/classes')
}
</script>
