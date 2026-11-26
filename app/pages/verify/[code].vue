<template>
  <div class="h-screen overflow-hidden px-4 bg-[#F0F5FA] text-slate-800 flex items-center justify-center">
    <div class="max-w-xl w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
      <div class="text-center pb-6 border-b border-slate-100">
        <div class="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-teal-50 text-teal-600 mb-3 border border-teal-200">
          <UIcon name="i-heroicons-check-badge" class="w-8 h-8" />
        </div>
        <div>
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">
            Sertifikat Digital Terverifikasi
          </span>
        </div>
        <h1 class="text-2xl font-extrabold text-slate-900 mt-3">Validasi Sertifikat Resmi</h1>
        <p class="text-xs text-slate-500 mt-1">Diterbitkan oleh Uneed Academy di bawah naungan Uneed Developer</p>
      </div>

      <div class="py-5 space-y-3 text-sm">
        <div class="flex justify-between py-2 border-b border-slate-100">
          <span class="text-slate-500">Nomor Sertifikat</span>
          <span class="font-mono font-bold text-teal-600">{{ code }}</span>
        </div>
        <div class="flex justify-between py-2 border-b border-slate-100">
          <span class="text-slate-500">Penerima Sertifikat</span>
          <span class="font-semibold text-slate-900">Budi Raharjo</span>
        </div>
        <div class="flex justify-between py-2 border-b border-slate-100">
          <span class="text-slate-500">Program Kelas</span>
          <span class="font-semibold text-slate-900">Basic Web Development</span>
        </div>
        <div class="flex justify-between py-2 border-b border-slate-100">
          <span class="text-slate-500">Tanggal Kelulusan</span>
          <span class="font-semibold text-slate-900">25 November 2026</span>
        </div>
        <div class="flex justify-between py-2 border-b border-slate-100">
          <span class="text-slate-500">Total Jam Pembelajaran</span>
          <span class="font-semibold text-slate-900">10 Jam Praktek Terstruktur</span>
        </div>
      </div>

      <div class="pt-3 flex gap-3">
        <NuxtLink to="/"
          class="w-full py-3 rounded-xl text-white font-bold text-center text-xs uppercase tracking-wider shadow-lg shadow-teal-500/20 hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#14b8a6,#0ea5e9)">
          Kunjungi Uneed Academy
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })
const route = useRoute()
const code = computed(() => String(route.params.code || 'UA-2026-DEMO001'))
</script>
