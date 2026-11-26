<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-extrabold text-slate-900">Quest Saya</h1>
      <p class="text-sm text-slate-500 mt-1">Progress tugas dari kelas yang kamu ikuti.</p>
    </div>

    <div v-if="quests.length === 0" class="bg-white border border-blue-100 rounded-3xl p-10 text-center space-y-3">
      <div class="text-4xl">🎯</div>
      <div class="font-extrabold text-slate-800">Belum Ada Quest Aktif</div>
      <p class="text-xs text-slate-500 max-w-sm mx-auto">Daftar atau beli kelas terlebih dahulu agar quest pembelajaranmu muncul di sini.</p>
      <NuxtLink to="/student/classes"
        class="inline-block px-6 py-2.5 rounded-full text-white text-xs font-extrabold uppercase tracking-wider"
        style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
        Pilih Kelas
      </NuxtLink>
    </div>

    <div v-else class="space-y-3">
      <NuxtLink v-for="q in quests" :key="q.id" :to="`/student/classroom/${q.classSlug}`"
        class="bg-white border border-blue-100 rounded-2xl p-5 flex items-center gap-4 hover:shadow-sm transition">
        <div class="h-10 w-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
          :style="q.status === 'completed' ? 'background:#10b981' : q.status === 'available' ? 'background:linear-gradient(135deg,#22d3ee,#2563eb)' : q.status === 'submitted' ? 'background:#f59e0b' : 'background:#cbd5e1'">
          <UIcon :name="q.status === 'completed' ? 'i-heroicons-check' : q.status === 'available' ? 'i-heroicons-play' : q.status === 'submitted' ? 'i-heroicons-clock' : 'i-heroicons-lock-closed'" class="w-5 h-5" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-bold text-slate-800">{{ q.title }}</div>
          <div class="text-xs text-slate-500 mt-0.5">{{ q.classTitle }} · +{{ q.xpReward }} XP</div>
        </div>
        <span class="text-xs font-bold px-3 py-1 rounded-full"
          :class="q.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : q.status === 'available' ? 'bg-blue-100 text-blue-700' : q.status === 'submitted' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'">
          {{ q.status === 'completed' ? 'Selesai' : q.status === 'available' ? 'Tersedia' : q.status === 'submitted' ? 'Menunggu Review' : 'Terkunci' }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'student' })

const { data } = await useFetch('/api/student/quests')
const quests = computed(() => data.value?.quests || [])
</script>
