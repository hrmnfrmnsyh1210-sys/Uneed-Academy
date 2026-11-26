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
        <div class="text-lg font-extrabold text-slate-900">Kelas Diampu</div>
        <div class="flex items-center gap-2.5">
          <div class="h-9 w-9 rounded-full bg-teal-600 flex items-center justify-center text-white text-xs font-bold">M</div>
          <div class="text-xs font-bold text-slate-800">Mentor</div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 custom-scroll">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div v-for="(c, idx) in classes" :key="c.title"
            class="bg-white border border-blue-100 rounded-3xl p-6 space-y-4 hover:shadow-lg hover:shadow-blue-500/10 transition flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-3 mb-4">
                <StudentFolderIcon size="lg" :icon="c.icon" :back-color="c.backColor" :front-gradient="c.frontGradient" />
                <span class="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase">{{ c.level }}</span>
              </div>
              <h3 class="font-extrabold text-slate-800 text-base">{{ c.title }}</h3>
              <p class="text-xs text-slate-500 mt-1">{{ c.students }} Siswa Aktif · {{ c.quests }} Quest</p>
            </div>
            <div class="pt-3 border-t border-slate-100">
              <NuxtLink to="/mentor/submissions"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-xs font-bold shadow-sm hover:opacity-90 transition"
                style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
                Lihat Antrean Review →
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

const classes = [
  { title: 'Basic Web Development', level: 'Beginner', students: 24, quests: 8, icon: 'i-heroicons-code-bracket', backColor: '#db2777', frontGradient: 'linear-gradient(135deg,#f472b6,#ec4899)' },
  { title: 'Vibe Coding with AI', level: 'Beginner', students: 15, quests: 10, icon: 'i-heroicons-cpu-chip', backColor: '#059669', frontGradient: 'linear-gradient(135deg,#34d399,#10b981)' },
  { title: 'Fullstack Web Development', level: 'Intermediate', students: 9, quests: 15, icon: 'i-heroicons-server-stack', backColor: '#0284c7', frontGradient: 'linear-gradient(135deg,#38bdf8,#2563eb)' },
]

async function logout() {
  await $fetch('/api/auth/logout', { method: 'POST' })
  navigateTo('/auth/login')
}
</script>
