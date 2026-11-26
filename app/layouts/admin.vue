<template>
  <div class="fixed inset-0 flex overflow-hidden bg-[#f5f9ff] text-slate-800">
    <!-- Fixed Royal Blue -> Cyan Sidebar matching Student & Landing -->
    <aside class="w-60 h-full flex-shrink-0 flex flex-col select-none z-20"
      style="background: linear-gradient(180deg, #1e3a8a 0%, #1d4ed8 58%, #0284c7 100%); box-shadow: 4px 0 24px rgba(30,58,138,0.16);">
      <div class="p-6 border-b border-white/15 flex items-center gap-3">
        <div class="h-9 w-9 rounded-full bg-white flex items-center justify-center text-blue-700 font-black text-lg shadow-lg">
          U
        </div>
        <div>
          <h1 class="font-extrabold text-sm text-white leading-tight">Uneed Console</h1>
          <p class="text-[11px] text-cyan-200 font-semibold">Super Admin</p>
        </div>
      </div>

      <nav class="flex-1 p-4 space-y-1.5 text-xs overflow-y-auto custom-scroll">
        <NuxtLink to="/admin" class="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-white/80 hover:text-white hover:bg-white/15 transition font-bold" exact-active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-chart-bar" class="w-4 h-4" />
          Dashboard & Analytics
        </NuxtLink>
        <NuxtLink to="/admin/classes" class="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-white/80 hover:text-white hover:bg-white/15 transition font-bold" active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-academic-cap" class="w-4 h-4" />
          Class Management
        </NuxtLink>
        <NuxtLink to="/admin/curriculum" class="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-white/80 hover:text-white hover:bg-white/15 transition font-bold" active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-queue-list" class="w-4 h-4" />
          Curriculum Builder
        </NuxtLink>
        <NuxtLink to="/admin/students" class="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-white/80 hover:text-white hover:bg-white/15 transition font-bold" active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-users" class="w-4 h-4" />
          Student Monitoring
        </NuxtLink>
        <NuxtLink to="/admin/payments" class="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-white/80 hover:text-white hover:bg-white/15 transition font-bold" active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-banknotes" class="w-4 h-4" />
          Payment Verification
        </NuxtLink>
        <NuxtLink to="/admin/badges" class="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-white/80 hover:text-white hover:bg-white/15 transition font-bold" active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-trophy" class="w-4 h-4" />
          Badges & XP
        </NuxtLink>
        <NuxtLink to="/admin/certificates" class="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-white/80 hover:text-white hover:bg-white/15 transition font-bold" active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-document-check" class="w-4 h-4" />
          Certificates
        </NuxtLink>
      </nav>

      <div class="p-4 border-t border-white/15">
        <button @click="logout" class="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-rose-200 hover:bg-white/15 text-xs font-bold transition">
          <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>

    <!-- Fixed Navbar + Scrollable Main -->
    <div class="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
      <header class="flex-shrink-0 h-16 border-b border-blue-100 bg-white/90 backdrop-blur px-8 flex items-center justify-between">
        <span class="text-xs font-extrabold uppercase tracking-wider text-blue-700">Console Control Panel</span>
        <div class="flex items-center gap-3">
          <div class="h-9 w-9 rounded-full text-white flex items-center justify-center text-xs font-bold ring-2 ring-cyan-200"
            style="background: linear-gradient(135deg, #22d3ee, #2563eb);">SA</div>
          <span class="text-xs font-bold text-slate-800">Super Admin</span>
        </div>
      </header>
      <main class="flex-1 overflow-y-auto p-6 md:p-8 custom-scroll">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: { class: 'overflow-hidden' },
})

async function logout() {
  await $fetch('/api/auth/logout', { method: 'POST' })
  navigateTo('/auth/login')
}
</script>
