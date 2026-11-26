<template>
  <div class="p-8">
    <div class="mb-6">
      <h1 class="text-2xl font-extrabold text-slate-900">Sertifikat Saya</h1>
      <p class="text-sm text-slate-500 mt-1">Sertifikat digital yang telah kamu dapatkan.</p>
    </div>

    <!-- Empty state if no certs yet -->
    <div v-if="certificates.length === 0" class="flex flex-col items-center justify-center py-20 text-center">
      <div class="text-6xl mb-4">📜</div>
      <h3 class="text-lg font-bold text-slate-700 mb-2">Belum ada sertifikat</h3>
      <p class="text-sm text-slate-400 mb-6 max-w-xs">Selesaikan semua quest dalam sebuah kelas untuk mendapatkan sertifikat.</p>
      <NuxtLink to="/student/classes"
        class="px-6 py-3 rounded-xl text-white text-sm font-bold transition hover:opacity-90"
        style="background:linear-gradient(135deg,#14b8a6,#0ea5e9)">
        Lihat Kelas
      </NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="cert in certificates" :key="cert.code"
        class="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
        <div class="flex items-start gap-4">
          <div class="h-14 w-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
            style="background:linear-gradient(135deg,#f3e8ff,#e0e7ff)">📜</div>
          <div class="flex-1">
            <div class="font-bold text-slate-800 mb-1">{{ cert.class }}</div>
            <div class="text-xs text-slate-500 mb-3">Diterbitkan: {{ cert.date }}</div>
            <NuxtLink :to="`/verify/${cert.code}`"
              class="text-xs font-bold text-teal-600 hover:text-teal-800 flex items-center gap-1 transition">
              Lihat Sertifikat <UIcon name="i-heroicons-arrow-right" class="w-3.5 h-3.5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'student' })

const certificates: any[] = []
</script>
