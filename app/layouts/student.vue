<template>
  <div class="min-h-screen flex bg-slate-100 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100">
    <!-- Sidebar -->
    <aside class="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1E293B] flex flex-col">
      <div class="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <div class="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/25">
          U
        </div>
        <div>
          <h1 class="font-bold text-base leading-tight tracking-tight">Uneed Academy</h1>
          <p class="text-xs text-indigo-400 font-medium">Student Workspace</p>
        </div>
      </div>

      <nav class="flex-1 p-4 space-y-1.5 text-sm">
        <NuxtLink to="/student" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium transition" active-class="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
          <UIcon name="i-heroicons-squares-2x2" class="w-5 h-5" />
          Overview
        </NuxtLink>
        <NuxtLink to="/student/classes" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium transition" active-class="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
          <UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
          My Classes
        </NuxtLink>
        <NuxtLink to="/student/quests" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium transition" active-class="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
          <UIcon name="i-heroicons-clipboard-document-check" class="w-5 h-5" />
          My Quests
        </NuxtLink>
        <NuxtLink to="/student/achievements" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium transition" active-class="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
          <UIcon name="i-heroicons-trophy" class="w-5 h-5" />
          Achievements & Badges
        </NuxtLink>
        <NuxtLink to="/student/certificates" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium transition" active-class="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
          <UIcon name="i-heroicons-document-check" class="w-5 h-5" />
          Certificates
        </NuxtLink>
        <NuxtLink to="/student/transactions" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium transition" active-class="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
          <UIcon name="i-heroicons-credit-card" class="w-5 h-5" />
          Transactions
        </NuxtLink>
      </nav>

      <div class="p-4 border-t border-slate-200 dark:border-slate-800">
        <button @click="logout" class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-sm font-medium transition">
          <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col min-w-0 overflow-y-auto">
      <header class="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#1E293B]/70 backdrop-blur px-8 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="text-xs uppercase tracking-wider font-semibold text-slate-400">Portal Siswa</span>
        </div>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-semibold">
            <UIcon name="i-heroicons-sparkles" class="w-4 h-4" />
            <span>350 XP</span>
          </div>
          <div class="h-8 w-px bg-slate-200 dark:bg-slate-800" />
          <div class="flex items-center gap-2">
            <div class="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
              BR
            </div>
            <span class="text-sm font-medium">Budi Raharjo</span>
          </div>
        </div>
      </header>

      <main class="p-8 flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
async function logout() {
  await $fetch('/api/auth/logout', { method: 'POST' })
  navigateTo('/auth/login')
}
</script>
