<template>
  <footer class="bg-white border-t border-slate-200 py-8 px-6">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
      <div class="flex items-center gap-2.5">
        <div class="h-7 w-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs">U</div>
        <span class="font-bold text-slate-800">Uneed Academy</span>
        <span class="text-slate-300">·</span>
        <span>© 2026 Uneed Developer</span>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <NuxtLink to="/classes" class="hover:text-blue-600 transition">Kelas</NuxtLink>
        <NuxtLink to="/verify/UA-2026-DEMO001" class="hover:text-blue-600 transition">Verifikasi Sertifikat</NuxtLink>
        <NuxtLink to="/terms" class="hover:text-blue-600 transition">Syarat & Ketentuan</NuxtLink>
        <NuxtLink to="/privacy" class="hover:text-blue-600 transition">Privasi</NuxtLink>
      </div>
    </div>
  </footer>
</template>
