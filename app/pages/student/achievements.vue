<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-extrabold text-slate-900">Badge & Pencapaian</h1>
      <p class="text-sm text-slate-500 mt-1">Koleksi badge dan XP yang telah kamu raih.</p>
    </div>

    <!-- XP Summary -->
    <div class="rounded-3xl p-6 text-white shadow-lg shadow-blue-500/20"
      style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #06b6d4 100%);">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-xs font-semibold opacity-80 mb-1">Total XP</div>
          <div class="text-4xl font-black">{{ totalXp }} XP</div>
          <div class="text-xs text-cyan-200 mt-1 font-semibold">Level {{ currentLevel }}</div>
        </div>
        <div class="h-16 w-16 rounded-2xl bg-white/15 flex items-center justify-center text-4xl">🏆</div>
      </div>
      <div class="mt-4">
        <div class="flex justify-between text-xs opacity-80 mb-1">
          <span>Progress ke Level {{ currentLevel + 1 }}</span>
          <span>{{ totalXp % 500 }} / 500 XP</span>
        </div>
        <div class="h-2 bg-white/20 rounded-full">
          <div class="h-full bg-cyan-300 rounded-full transition-all" :style="`width: ${((totalXp % 500) / 500) * 100}%`"></div>
        </div>
      </div>
    </div>

    <div class="bg-white border border-blue-100 rounded-3xl p-10 text-center space-y-2">
      <div class="text-4xl">✨</div>
      <div class="font-bold text-slate-800 text-sm">Belum Ada Badge Diraih</div>
      <p class="text-xs text-slate-500 max-w-sm mx-auto">Selesaikan quest pertamamu dan dapatkan persetujuan mentor untuk mengumpulkan badge dan XP.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'student' })

const { user } = useUserSession()
const totalXp = computed(() => user.value?.totalXp || 0)
const currentLevel = computed(() => user.value?.currentLevel || 1)
</script>
