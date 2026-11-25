<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0F172A]/80 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-400 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
          U
        </div>
        <div>
          <span class="font-extrabold text-lg tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">Uneed Academy</span>
          <span class="hidden sm:inline-block ml-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">LMS 2.0</span>
        </div>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
        <NuxtLink to="/classes" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Jelajahi Kelas</NuxtLink>
        <NuxtLink to="/#method" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Metode Belajar</NuxtLink>
        <NuxtLink to="/#mentors" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Mentor</NuxtLink>
        <NuxtLink to="/#faq" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">FAQ</NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <NuxtLink to="/auth/login" class="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          Masuk
        </NuxtLink>
        <NuxtLink to="/auth/register" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/25 transition">
          Daftar Sekarang
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
