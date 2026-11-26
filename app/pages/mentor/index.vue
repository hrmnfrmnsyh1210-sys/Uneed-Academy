<template>
  <div class="fixed inset-0 flex overflow-hidden bg-[#f5f9ff]">
    <!-- Mentor Sidebar -->
    <aside class="w-24 md:w-28 h-full flex-shrink-0 flex flex-col items-center py-8 select-none z-20"
      style="background: linear-gradient(180deg, #1e3a8a 0%, #1d4ed8 58%, #0284c7 100%); box-shadow: 4px 0 24px rgba(30,58,138,0.16);">
      <div class="h-11 w-11 rounded-full bg-white flex items-center justify-center text-blue-700 font-black text-xl shadow-lg mb-10">M</div>

      <nav class="flex-1 flex flex-col items-center gap-2 w-full px-3">
        <NuxtLink to="/mentor"
          class="w-full flex flex-col items-center gap-1 py-3 px-2 rounded-2xl text-white/70 hover:text-white hover:bg-white/15 transition-all text-center"
          exact-active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-squares-2x2" class="w-5 h-5" />
          <span class="text-[10px] font-bold">Dashboard</span>
        </NuxtLink>
        <NuxtLink to="/mentor/classes"
          class="w-full flex flex-col items-center gap-1 py-3 px-2 rounded-2xl text-white/70 hover:text-white hover:bg-white/15 transition-all text-center"
          active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
          <span class="text-[10px] font-bold">Kelas</span>
        </NuxtLink>
        <NuxtLink to="/mentor/submissions"
          class="w-full flex flex-col items-center gap-1 py-3 px-2 rounded-2xl text-white/70 hover:text-white hover:bg-white/15 transition-all text-center"
          active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-clipboard-document-check" class="w-5 h-5" />
          <span class="text-[10px] font-bold">Review</span>
        </NuxtLink>
      </nav>

      <button @click="logout" class="p-3 rounded-2xl text-white/30 hover:text-rose-400 hover:bg-white/10 transition mt-4">
        <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-5 h-5" />
      </button>
    </aside>

    <!-- Right: navbar + content -->
    <div class="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
      <header class="flex-shrink-0 h-16 flex items-center justify-between px-8 bg-white/80 backdrop-blur border-b border-slate-200/60">
        <div class="text-lg font-extrabold text-slate-900">Dashboard Mentor</div>
        <div class="flex items-center gap-2.5">
          <div class="h-9 w-9 rounded-full bg-teal-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-teal-200">M</div>
          <div>
            <div class="text-xs font-bold text-slate-800">Mentor</div>
            <div class="text-[10px] text-slate-400">Uneed Academy</div>
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 custom-scroll">
        <!-- Hero Banner -->
        <div class="rounded-3xl p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-blue-500/15"
          style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #06b6d4 100%);">
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0">
              <UIcon name="i-heroicons-academic-cap" class="w-6 h-6 text-cyan-200" />
            </div>
            <div>
              <span class="text-[10px] font-bold uppercase tracking-widest text-cyan-200">Portal Mentor</span>
              <h2 class="text-xl font-extrabold text-white">Selamat Datang, Mentor!</h2>
              <p class="text-xs text-blue-100 mt-0.5">Periksa submission siswa dan bantu mereka membuka quest berikutnya.</p>
            </div>
          </div>
          <NuxtLink to="/mentor/submissions"
            class="px-5 py-2.5 rounded-full bg-white text-blue-700 text-xs font-extrabold uppercase tracking-wider shadow-md hover:bg-cyan-50 transition flex-shrink-0">
            Mulai Review →
          </NuxtLink>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="s in stats" :key="s.label" class="bg-white border border-blue-100 rounded-3xl p-5 shadow-sm">
            <div class="text-xs text-slate-400 font-bold uppercase">{{ s.label }}</div>
            <div class="text-2xl font-black text-blue-700 mt-1">{{ s.value }}</div>
          </div>
        </div>

        <!-- Pending reviews -->
        <div class="bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-sm">
          <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 class="font-extrabold text-slate-800">Submission Menunggu Review</h2>
            <span class="bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">{{ pendingReviews.length }} pending</span>
          </div>
          <div class="divide-y divide-slate-100">
            <div v-for="r in pendingReviews" :key="r.student" class="px-6 py-4 flex items-center gap-4 hover:bg-blue-50/30 transition">
              <div class="h-9 w-9 rounded-full text-white flex items-center justify-center font-bold text-xs flex-shrink-0"
                style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
                {{ r.student.charAt(0) }}
              </div>
              <div class="flex-1">
                <div class="text-sm font-bold text-slate-800">{{ r.student }}</div>
                <div class="text-xs text-slate-500">{{ r.task }} · {{ r.class }}</div>
              </div>
              <NuxtLink to="/mentor/submissions" class="px-4 py-2 rounded-full text-white text-xs font-bold transition hover:opacity-90 shadow-sm"
                style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
                Review
              </NuxtLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const stats = [
  { label: 'Kelas Diampu', value: '3' },
  { label: 'Total Murid', value: '48' },
  { label: 'Pending Review', value: '7' },
  { label: 'Disetujui Bulan Ini', value: '23' },
]

const pendingReviews = [
  { student: 'Budi Raharjo', task: 'Quest 3 — CSS Layout', class: 'Basic Web Development' },
  { student: 'Sari Dewi', task: 'Quest 2 — HTML Forms', class: 'Basic Web Development' },
  { student: 'Andi Putra', task: 'Quest 1 — Project Setup', class: 'Fullstack Web Development' },
]

async function logout() {
  await $fetch('/api/auth/logout', { method: 'POST' })
  navigateTo('/auth/login')
}
</script>
