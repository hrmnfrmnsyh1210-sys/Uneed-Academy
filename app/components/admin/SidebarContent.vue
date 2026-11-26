<template>
  <div class="p-6 border-b border-white/10 flex items-center gap-3">
    <div class="h-9 w-9 rounded-xl flex items-center justify-center text-slate-900 font-black text-lg shadow-lg flex-shrink-0"
      style="background: linear-gradient(135deg, #5eead4, #38bdf8);">
      U
    </div>
    <div class="min-w-0">
      <h1 class="font-bold text-sm text-white leading-tight truncate">Uneed Console</h1>
      <p class="text-[11px] text-teal-300 font-medium">Super Admin</p>
    </div>
  </div>

  <nav class="flex-1 p-4 space-y-1 text-xs overflow-y-auto">
    <NuxtLink v-for="item in items" :key="item.to" :to="item.to"
      class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-white/65 hover:text-white hover:bg-white/10 transition font-semibold"
      :active-class="item.exact ? '' : 'bg-white !text-teal-800 shadow-md'"
      :exact-active-class="'bg-white !text-teal-800 shadow-md'"
      @click="emit('navigate')">
      <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />
      {{ item.label }}
    </NuxtLink>
  </nav>

  <div class="p-4 border-t border-white/10">
    <button class="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-rose-300 hover:bg-white/10 text-xs font-semibold transition"
      @click="emit('logout')">
      <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-4 h-4" />
      Sign Out
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  logout: []
  navigate: []
}>()

const items = [
  { to: '/admin', label: 'Dashboard & Analytics', icon: 'i-heroicons-chart-bar', exact: true },
  { to: '/admin/classes', label: 'Class Management', icon: 'i-heroicons-academic-cap' },
  { to: '/admin/curriculum', label: 'Curriculum Builder', icon: 'i-heroicons-queue-list' },
  { to: '/admin/students', label: 'Student Monitoring', icon: 'i-heroicons-users' },
  { to: '/admin/payments', label: 'Payment Verification', icon: 'i-heroicons-banknotes' },
  { to: '/admin/testimonials', label: 'Mentor & Alumni', icon: 'i-heroicons-chat-bubble-left-right' },
  { to: '/admin/badges', label: 'Badges & XP', icon: 'i-heroicons-trophy' },
  { to: '/admin/certificates', label: 'Certificates', icon: 'i-heroicons-document-check' },
]
</script>
