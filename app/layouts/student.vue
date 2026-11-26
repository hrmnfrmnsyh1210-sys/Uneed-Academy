<template>
  <!-- Fixed full-viewport layout: sidebar & navbar fixed, only main content scrolls -->
  <div class="fixed inset-0 flex overflow-hidden bg-[#f5f9ff]">

    <!-- Royal Blue -> Cyan Sidebar: fixed height, never scrolls -->
    <aside class="w-24 md:w-28 h-full flex-shrink-0 flex flex-col items-center py-7 select-none z-20"
      style="background: linear-gradient(180deg, #1e3a8a 0%, #1d4ed8 58%, #0284c7 100%); box-shadow: 4px 0 24px rgba(30,58,138,0.16);">

      <!-- Logo -->
      <NuxtLink to="/student" class="h-11 w-11 rounded-full bg-white flex items-center justify-center text-blue-700 font-black text-xl shadow-lg mb-8 hover:scale-105 transition">
        U
      </NuxtLink>

      <!-- Nav -->
      <nav class="flex-1 flex flex-col items-center gap-2 w-full px-3">
        <NuxtLink to="/student"
          class="w-full flex flex-col items-center gap-1 py-2.5 px-2 rounded-2xl text-white/70 hover:text-white hover:bg-white/15 transition-all text-center"
          exact-active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-squares-2x2" class="w-5 h-5" />
          <span class="text-[10px] font-bold">Dashboard</span>
        </NuxtLink>

        <NuxtLink to="/student/classes"
          class="w-full flex flex-col items-center gap-1 py-2.5 px-2 rounded-2xl text-white/70 hover:text-white hover:bg-white/15 transition-all text-center"
          active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
          <span class="text-[10px] font-bold">Classes</span>
        </NuxtLink>

        <NuxtLink to="/student/quests"
          class="w-full flex flex-col items-center gap-1 py-2.5 px-2 rounded-2xl text-white/70 hover:text-white hover:bg-white/15 transition-all text-center"
          active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-clipboard-document-check" class="w-5 h-5" />
          <span class="text-[10px] font-bold">Quests</span>
        </NuxtLink>

        <NuxtLink to="/student/achievements"
          class="w-full flex flex-col items-center gap-1 py-2.5 px-2 rounded-2xl text-white/70 hover:text-white hover:bg-white/15 transition-all text-center"
          active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-trophy" class="w-5 h-5" />
          <span class="text-[10px] font-bold">Badges</span>
        </NuxtLink>

        <NuxtLink to="/student/certificates"
          class="w-full flex flex-col items-center gap-1 py-2.5 px-2 rounded-2xl text-white/70 hover:text-white hover:bg-white/15 transition-all text-center"
          active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-document-check" class="w-5 h-5" />
          <span class="text-[10px] font-bold">Certs</span>
        </NuxtLink>

        <NuxtLink to="/student/transactions"
          class="w-full flex flex-col items-center gap-1 py-2.5 px-2 rounded-2xl text-white/70 hover:text-white hover:bg-white/15 transition-all text-center"
          active-class="!bg-white !text-blue-700 shadow-lg">
          <UIcon name="i-heroicons-credit-card" class="w-5 h-5" />
          <span class="text-[10px] font-bold">Billing</span>
        </NuxtLink>
      </nav>

      <!-- Sign out -->
      <button @click="logout" title="Keluar" class="p-3 rounded-2xl text-white/50 hover:text-rose-200 hover:bg-white/15 transition mt-4">
        <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-5 h-5" />
      </button>
    </aside>

    <!-- Right: fixed navbar + scrollable content -->
    <div class="flex-1 flex flex-col h-full min-w-0 overflow-hidden">

      <!-- Top navbar: fixed, never scrolls -->
      <header class="flex-shrink-0 h-16 flex items-center justify-between px-8 bg-white/90 backdrop-blur border-b border-blue-100 relative z-30">
        <div class="flex items-center gap-2.5">
          <div class="h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-black shadow-sm"
            style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
            U
          </div>
          <div>
            <span class="font-extrabold text-sm text-slate-900 leading-none">Uneed Academy</span>
            <div class="text-[10px] text-blue-600 font-semibold">Uneed E-Learning</div>
          </div>
        </div>

        <div class="flex items-center gap-3 relative">
          <button @click="showSearch = !showSearch; showNotifs = false" title="Cari kelas"
            class="h-9 w-9 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-700 transition">
            <UIcon name="i-heroicons-magnifying-glass" class="w-4 h-4" />
          </button>
          <button @click="showNotifs = !showNotifs; showSearch = false" title="Notifikasi"
            class="relative h-9 w-9 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-700 transition">
            <UIcon name="i-heroicons-bell" class="w-4 h-4" />
            <span class="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-cyan-500"></span>
          </button>
          <div class="w-px h-6 bg-slate-200"></div>
          <NuxtLink to="/student/achievements" class="flex items-center gap-2.5">
            <div class="h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-bold ring-2 ring-cyan-200"
              style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
              {{ initials }}
            </div>
            <div class="hidden md:block">
              <div class="text-xs font-bold text-slate-800 leading-tight">{{ user?.name || 'Siswa Uneed' }}</div>
              <div class="text-[10px] text-blue-600 font-semibold">Student · Level {{ user?.currentLevel || 1 }}</div>
            </div>
          </NuxtLink>

          <!-- Search Popover -->
          <div v-if="showSearch" class="absolute right-0 top-12 w-72 bg-white border border-blue-100 rounded-2xl shadow-xl p-3 z-50">
            <form @submit.prevent="goSearch">
              <input v-model="searchQuery" type="text" placeholder="Cari kelas atau quest..."
                class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs outline-none focus:border-blue-500" />
            </form>
          </div>

          <!-- Notifications Popover -->
          <div v-if="showNotifs" class="absolute right-0 top-12 w-72 bg-white border border-blue-100 rounded-2xl shadow-xl p-4 z-50 space-y-2.5">
            <div class="text-xs font-bold text-slate-800">Notifikasi</div>
            <div class="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-[11px] text-slate-700">
              <strong class="text-blue-700">Task 2 Disetujui!</strong> Kamu mendapatkan +100 XP.
            </div>
            <div class="p-2.5 rounded-xl bg-cyan-50 border border-cyan-100 text-[11px] text-slate-600">
              Quest 3: CSS Fundamentals sekarang terbuka untuk dikerjakan.
            </div>
          </div>
        </div>
      </header>

      <!-- Only this area scrolls -->
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

const { user } = useUserSession()
const initials = computed(() => {
  const name = user.value?.name || 'SU'
  return name.split(' ').slice(0, 2).map((w: string) => w[0]).join('').toUpperCase()
})

const showSearch = ref(false)
const showNotifs = ref(false)
const searchQuery = ref('')

function goSearch() {
  showSearch.value = false
  navigateTo('/student/classes')
}

async function logout() {
  await $fetch('/api/auth/logout', { method: 'POST' })
  navigateTo('/auth/login')
}
</script>
