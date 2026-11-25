<template>
  <div class="space-y-8">
    <!-- Welcome Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-indigo-900/40 via-slate-900 to-slate-900 border border-indigo-500/20">
      <div>
        <h1 class="text-2xl font-black text-white">Selamat Datang Kembali, Budi! 👋</h1>
        <p class="text-xs text-slate-400 mt-1">Lanjutkan quest belajar hari ini dan jaga learning streak Anda.</p>
      </div>
      <div class="flex items-center gap-4">
        <div class="text-right">
          <div class="text-xs text-slate-400">Tingkat Kemampuan</div>
          <div class="text-sm font-bold text-indigo-400">Level 2: Explorer</div>
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1E293B]">
        <div class="text-xs text-slate-400 font-medium">Kelas Aktif</div>
        <div class="text-2xl font-black text-slate-900 dark:text-white mt-1">2</div>
      </div>
      <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1E293B]">
        <div class="text-xs text-slate-400 font-medium">Quest Selesai</div>
        <div class="text-2xl font-black text-emerald-500 mt-1">5</div>
      </div>
      <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1E293B]">
        <div class="text-xs text-slate-400 font-medium">Total Badge</div>
        <div class="text-2xl font-black text-amber-500 mt-1">3</div>
      </div>
      <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1E293B]">
        <div class="text-xs text-slate-400 font-medium">Sertifikat Digital</div>
        <div class="text-2xl font-black text-sky-500 mt-1">1</div>
      </div>
    </div>

    <!-- Continue Learning Section -->
    <div>
      <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Lanjutkan Belajar</h2>
      <div class="p-6 rounded-2xl border border-indigo-500/30 bg-white dark:bg-[#1E293B] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="inline-block px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
            Sequential Learning Track
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">Basic Web Development</h3>
          <p class="text-xs text-slate-400">Quest Saat Ini: <span class="text-indigo-400 font-semibold">Task 3: CSS Fundamentals & Layout</span></p>
          <!-- Progress Bar -->
          <div class="w-full max-w-md bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-3">
            <div class="bg-indigo-600 h-full rounded-full" style="width: 25%"></div>
          </div>
          <div class="text-[11px] text-slate-400 font-medium">2 dari 8 Quest Selesai (25%)</div>
        </div>

        <NuxtLink to="/student/classroom/basic-web-dev" class="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg shadow-indigo-600/25">
          Masuk Uneed Classroom
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'student' })
</script>
