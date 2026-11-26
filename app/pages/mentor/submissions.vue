<template>
  <div class="fixed inset-0 flex overflow-hidden bg-[#f5f9ff]">
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

    <div class="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
      <header class="flex-shrink-0 h-16 flex items-center justify-between px-8 bg-white/80 backdrop-blur border-b border-slate-200/60">
        <div class="text-lg font-extrabold text-slate-900">Review Tugas Siswa</div>
        <div class="flex items-center gap-2.5">
          <div class="h-9 w-9 rounded-full bg-teal-600 flex items-center justify-center text-white text-xs font-bold">M</div>
          <div class="text-xs font-bold text-slate-800">Mentor</div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-6 md:p-8 space-y-4 custom-scroll">
        <div v-for="r in reviews" :key="r.id" class="bg-white border border-blue-100 rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition">
          <div class="flex items-center gap-4">
            <div class="h-11 w-11 rounded-full text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0"
              style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
              {{ r.student.charAt(0) }}
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="font-extrabold text-slate-800 text-sm">{{ r.student }}</span>
                <span class="text-xs px-2.5 py-0.5 rounded-full font-bold"
                  :class="r.status === 'approved' ? 'bg-emerald-100 text-emerald-700' : r.status === 'revision' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'">
                  {{ r.status === 'approved' ? 'Disetujui' : r.status === 'revision' ? 'Perlu Revisi' : 'Menunggu Review' }}
                </span>
              </div>
              <div class="text-xs text-slate-500">{{ r.task }} · {{ r.class }}</div>
            </div>
          </div>

          <div v-if="r.status === 'pending'" class="flex items-center gap-2">
            <button @click="r.status = 'approved'" class="px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-sm transition">
              Setujui
            </button>
            <button @click="r.status = 'revision'" class="px-5 py-2 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition">
              Minta Revisi
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const reviews = ref([
  { id: 1, student: 'Budi Raharjo', task: 'Quest 3 — CSS Layout', class: 'Basic Web Development', status: 'pending' },
  { id: 2, student: 'Sari Dewi', task: 'Quest 2 — HTML Forms', class: 'Basic Web Development', status: 'pending' },
  { id: 3, student: 'Andi Putra', task: 'Quest 1 — Project Setup', class: 'Fullstack Web Development', status: 'pending' },
])

async function logout() {
  await $fetch('/api/auth/logout', { method: 'POST' })
  navigateTo('/auth/login')
}
</script>
