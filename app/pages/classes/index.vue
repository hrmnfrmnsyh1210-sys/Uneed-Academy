<template>
  <div class="min-h-screen bg-[#f5f9ff] text-slate-800 font-sans">
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-blue-100 shadow-sm">
      <div class="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-6">
        <NuxtLink to="/" class="flex items-center gap-2.5 flex-shrink-0">
          <div class="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-black text-base shadow">U</div>
          <div class="leading-tight">
            <div class="font-extrabold text-sm text-slate-900">Uneed</div>
            <div class="font-extrabold text-sm text-slate-900 -mt-1">Academy</div>
          </div>
        </NuxtLink>

        <div class="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <NuxtLink to="/" class="hover:text-slate-900 transition">Beranda</NuxtLink>
          <NuxtLink to="/classes" class="text-blue-600 font-semibold border-b-2 border-blue-500 pb-0.5">Kelas</NuxtLink>
          <NuxtLink to="/#mentor" class="hover:text-slate-900 transition">Mentor</NuxtLink>
          <NuxtLink to="/#faq" class="hover:text-slate-900 transition">FAQ</NuxtLink>
        </div>

        <div class="flex items-center gap-3">
          <NuxtLink to="/auth/login" class="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 transition">Masuk</NuxtLink>
          <NuxtLink to="/auth/register"
            class="text-sm font-bold text-white px-5 py-2.5 rounded-full transition hover:opacity-90 shadow-md shadow-blue-500/30"
            style="background:linear-gradient(135deg,#22d3ee,#2563eb)">
            Daftar Gratis
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Header & Filter -->
    <div class="max-w-7xl mx-auto px-5 pt-12 pb-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-blue-600">Katalog Kurikulum</span>
          <h1 class="text-3xl font-extrabold text-slate-900 mt-1">Jelajahi Semua Kelas</h1>
          <p class="text-sm text-slate-500 mt-1">Pilih jalur belajar berbasis project nyata dengan bimbingan mentor.</p>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <div class="relative">
            <UIcon name="i-heroicons-magnifying-glass" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              v-model="search"
              type="text"
              placeholder="Cari kelas..."
              class="pl-10 pr-4 py-2.5 rounded-xl border border-blue-100 bg-white text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 w-56"
            />
          </div>
          <select
            v-model="selectedLevel"
            class="px-4 py-2.5 rounded-xl border border-blue-100 bg-white text-sm text-slate-700 outline-none focus:border-blue-400"
          >
            <option value="ALL">Semua Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Grid -->
    <div class="max-w-7xl mx-auto px-5 pb-16">
      <div v-if="filteredClasses.length === 0" class="text-center py-16 bg-white border border-blue-100 rounded-3xl">
        <div class="text-4xl mb-3">🔍</div>
        <div class="font-bold text-slate-800">Kelas tidak ditemukan</div>
        <p class="text-xs text-slate-500 mt-1">Coba kata kunci atau filter level yang lain.</p>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="cls in filteredClasses" :key="cls.slug"
          class="bg-white border border-blue-100 rounded-3xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition duration-200 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-3 mb-4">
              <StudentFolderIcon size="lg" :icon="styleOf(cls.slug).icon" :back-color="styleOf(cls.slug).backColor" :front-gradient="styleOf(cls.slug).frontGradient" />
              <span class="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">{{ cls.difficulty }}</span>
            </div>
            <h3 class="font-extrabold text-slate-800 text-base mb-1 leading-snug">{{ cls.title }}</h3>
            <p class="text-xs text-slate-500 leading-relaxed mb-4">{{ cls.shortDescription }}</p>
          </div>
          <div>
            <div class="flex items-center gap-3 text-[10px] text-slate-400 mb-3">
              <span class="flex items-center gap-1"><UIcon name="i-heroicons-clipboard-document-list" class="w-3.5 h-3.5" /> {{ cls.totalTasks }} Quest</span>
              <span class="flex items-center gap-1"><UIcon name="i-heroicons-clock" class="w-3.5 h-3.5" /> {{ cls.estimatedDurationHours }} Jam</span>
            </div>
            <div class="flex items-center justify-between pt-3 border-t border-slate-100">
              <div class="font-extrabold text-sm" :class="cls.price === 0 ? 'text-emerald-600' : 'text-blue-700'">
                {{ cls.price === 0 ? 'Gratis' : 'Rp' + cls.price.toLocaleString('id-ID') }}
              </div>
              <NuxtLink :to="`/classes/${cls.slug}`"
                class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-bold transition hover:opacity-85 shadow-sm"
                style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
                Detail Kelas
                <UIcon name="i-heroicons-arrow-right" class="w-3.5 h-3.5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const search = ref('')
const selectedLevel = ref('ALL')

const { data } = await useFetch('/api/public/overview')
const classes = computed(() => data.value?.classes || [])

const styleMap: Record<string, { icon: string; backColor: string; frontGradient: string }> = {
  'basic-web-development': { icon: 'i-heroicons-code-bracket', backColor: '#db2777', frontGradient: 'linear-gradient(135deg,#f472b6,#ec4899)' },
  'vibe-coding-ai': { icon: 'i-heroicons-cpu-chip', backColor: '#059669', frontGradient: 'linear-gradient(135deg,#34d399,#10b981)' },
  'fullstack-web-development': { icon: 'i-heroicons-server-stack', backColor: '#0284c7', frontGradient: 'linear-gradient(135deg,#38bdf8,#2563eb)' },
  'database-engineering': { icon: 'i-heroicons-circle-stack', backColor: '#d97706', frontGradient: 'linear-gradient(135deg,#fbbf24,#f59e0b)' },
  'ui-ux-fundamentals': { icon: 'i-heroicons-paint-brush', backColor: '#e11d48', frontGradient: 'linear-gradient(135deg,#fb7185,#f43f5e)' },
  'react-nextjs': { icon: 'i-heroicons-bolt', backColor: '#7c3aed', frontGradient: 'linear-gradient(135deg,#a78bfa,#6366f1)' },
}

function styleOf(slug: string) {
  return styleMap[slug] || { icon: 'i-heroicons-academic-cap', backColor: '#2563eb', frontGradient: 'linear-gradient(135deg,#60a5fa,#3b82f6)' }
}

const filteredClasses = computed(() => {
  return classes.value.filter((c: any) => {
    const matchLevel = selectedLevel.value === 'ALL' || c.difficulty === selectedLevel.value
    const matchSearch = !search.value.trim() || c.title.toLowerCase().includes(search.value.toLowerCase()) || (c.shortDescription || '').toLowerCase().includes(search.value.toLowerCase())
    return matchLevel && matchSearch
  })
})
</script>
