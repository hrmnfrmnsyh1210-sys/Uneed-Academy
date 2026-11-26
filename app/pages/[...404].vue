<template>
  <div class="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 text-center">
    <div class="max-w-md">
      <div class="text-6xl mb-4">🔍</div>
      <h1 class="text-2xl font-extrabold text-slate-900 mb-2">Halaman Tidak Ditemukan</h1>
      <p class="text-sm text-slate-500 mb-8">Halaman yang kamu cari tidak ada atau telah dipindahkan.</p>
      <NuxtLink to="/"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold transition hover:opacity-90"
        style="background:linear-gradient(135deg,#14b8a6,#0ea5e9)">
        <UIcon name="i-heroicons-home" class="w-4 h-4" />
        Kembali ke Beranda
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })
</script>
