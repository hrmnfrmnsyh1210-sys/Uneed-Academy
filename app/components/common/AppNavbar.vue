<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/80 shadow-sm transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <!-- Brand Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="h-11 w-11 rounded-2xl bg-gradient-to-tr from-[#042533] to-teal-500 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-teal-900/20 group-hover:scale-105 transition-transform">
          U
        </div>
        <div>
          <span class="font-extrabold text-xl tracking-tight text-slate-900">Uneed Academy</span>
          <div class="text-[11px] font-bold text-teal-600">Learn. Build. Achieve.</div>
        </div>
      </NuxtLink>

      <!-- Nav links -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
        <NuxtLink to="/classes" class="hover:text-teal-700 transition">Jelajahi Kelas</NuxtLink>
        <NuxtLink to="/#method" class="hover:text-teal-700 transition">Sequential Engine</NuxtLink>
        <NuxtLink to="/#mentors" class="hover:text-teal-700 transition">Mentor</NuxtLink>
        <NuxtLink to="/verify/UA-2026-DEMO001" class="hover:text-teal-700 transition">Verifikasi Sertifikat</NuxtLink>
      </nav>

      <!-- Auth Action Pill Buttons -->
      <div class="flex items-center gap-3">
        <NuxtLink to="/auth/login" class="px-5 py-2.5 rounded-full text-xs font-bold text-slate-700 hover:text-teal-800 transition">
          Masuk
        </NuxtLink>
        <NuxtLink to="/auth/register" class="px-6 py-2.5 rounded-full bg-[#042533] hover:bg-[#063548] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-teal-950/20 transition transform hover:-translate-y-0.5">
          Daftar Gratis
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
