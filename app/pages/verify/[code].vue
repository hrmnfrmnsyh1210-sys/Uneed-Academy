<template>
  <div class="min-h-screen py-16 px-4 bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 flex items-center justify-center">
    <div class="max-w-xl w-full bg-white dark:bg-[#1E293B] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl">
      <div class="text-center pb-6 border-b border-slate-200 dark:border-slate-800">
        <div class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-500 mb-4 border border-emerald-500/20">
          <UIcon name="i-heroicons-check-badge" class="w-10 h-10" />
        </div>
        <span class="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider">
          Sertifikat Digital Terverifikasi
        </span>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white mt-3">Validasi Sertifikat Resmi</h1>
        <p class="text-xs text-slate-400 mt-1">Diterbitkan oleh Uneed Academy di bawah naungan Uneed Developer</p>
      </div>

      <div class="py-6 space-y-4 text-sm">
        <div class="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
          <span class="text-slate-400">Nomor Sertifikat</span>
          <span class="font-mono font-bold text-indigo-500">UA-2026-DEMO001</span>
        </div>
        <div class="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
          <span class="text-slate-400">Penerima Sertifikat</span>
          <span class="font-semibold text-slate-900 dark:text-white">Budi Raharjo</span>
        </div>
        <div class="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
          <span class="text-slate-400">Program Kelas</span>
          <span class="font-semibold text-slate-900 dark:text-white">Basic Web Development</span>
        </div>
        <div class="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
          <span class="text-slate-400">Tanggal Kelulusan</span>
          <span class="font-semibold text-slate-900 dark:text-white">25 November 2026</span>
        </div>
        <div class="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
          <span class="text-slate-400">Total Jam Pembelajaran</span>
          <span class="font-semibold text-slate-900 dark:text-white">10 Jam Praktek Terstruktur</span>
        </div>
      </div>

      <div class="pt-4 flex gap-3">
        <NuxtLink to="/" class="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-center text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/25">
          Kunjungi Uneed Academy
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })
</script>
