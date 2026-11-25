<template>
  <div class="min-h-screen flex bg-slate-900 text-slate-100">
    <aside class="w-64 border-r border-slate-800 bg-[#0B1120] flex flex-col">
      <div class="p-6 border-b border-slate-800 flex items-center gap-3">
        <div class="h-9 w-9 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-purple-500/25">
          U
        </div>
        <div>
          <h1 class="font-bold text-base leading-tight">Uneed Console</h1>
          <p class="text-xs text-purple-400 font-medium">Super Admin</p>
        </div>
      </div>

      <nav class="flex-1 p-4 space-y-1 text-sm">
        <NuxtLink to="/admin" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition font-medium" active-class="bg-purple-950/60 text-purple-400">
          <UIcon name="i-heroicons-chart-bar" class="w-5 h-5" />
          Dashboard & Analytics
        </NuxtLink>
        <NuxtLink to="/admin/classes" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition font-medium" active-class="bg-purple-950/60 text-purple-400">
          <UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
          Class Management
        </NuxtLink>
        <NuxtLink to="/admin/curriculum" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition font-medium" active-class="bg-purple-950/60 text-purple-400">
          <UIcon name="i-heroicons-queue-list" class="w-5 h-5" />
          Curriculum Builder
        </NuxtLink>
        <NuxtLink to="/admin/students" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition font-medium" active-class="bg-purple-950/60 text-purple-400">
          <UIcon name="i-heroicons-users" class="w-5 h-5" />
          Student Monitoring
        </NuxtLink>
        <NuxtLink to="/admin/payments" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition font-medium" active-class="bg-purple-950/60 text-purple-400">
          <UIcon name="i-heroicons-banknotes" class="w-5 h-5" />
          Payment Verification
        </NuxtLink>
        <NuxtLink to="/admin/badges" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition font-medium" active-class="bg-purple-950/60 text-purple-400">
          <UIcon name="i-heroicons-trophy" class="w-5 h-5" />
          Badges & XP
        </NuxtLink>
        <NuxtLink to="/admin/certificates" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition font-medium" active-class="bg-purple-950/60 text-purple-400">
          <UIcon name="i-heroicons-document-check" class="w-5 h-5" />
          Certificates
        </NuxtLink>
      </nav>

      <div class="p-4 border-t border-slate-800">
        <button @click="logout" class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-rose-400 hover:bg-rose-950/40 text-sm font-medium transition">
          <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </aside>

    <div class="flex-1 flex flex-col min-w-0 overflow-y-auto">
      <header class="h-16 border-b border-slate-800 bg-[#0F172A]/70 backdrop-blur px-8 flex items-center justify-between">
        <span class="text-xs font-semibold uppercase tracking-wider text-purple-400">Console Control Panel</span>
        <div class="flex items-center gap-3">
          <div class="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold">SA</div>
          <span class="text-sm font-medium">Super Admin</span>
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
