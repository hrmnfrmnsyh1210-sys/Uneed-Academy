<template>
  <footer class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120] text-slate-500 dark:text-slate-400 text-sm py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
            U
          </div>
          <span class="font-bold text-base text-slate-900 dark:text-white">Uneed Academy</span>
        </div>
        <p class="text-xs leading-relaxed">
          Platform pembelajaran teknologi & rekayasa perangkat lunak modern dengan pendekatan Project-Based Learning dan Sequential Learning Engine.
        </p>
        <p class="text-xs font-semibold text-indigo-500">Powered by Uneed Developer</p>
      </div>

      <div>
        <h3 class="font-semibold text-slate-900 dark:text-white text-sm mb-3">Program Belajar</h3>
        <ul class="space-y-2 text-xs">
          <li><NuxtLink to="/classes" class="hover:text-indigo-400 transition">Basic Web Development</NuxtLink></li>
          <li><NuxtLink to="/classes" class="hover:text-indigo-400 transition">Vibe Coding with AI</NuxtLink></li>
          <li><NuxtLink to="/classes" class="hover:text-indigo-400 transition">Fullstack Web Development</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-slate-900 dark:text-white text-sm mb-3">Validasi & Portofolio</h3>
        <ul class="space-y-2 text-xs">
          <li><NuxtLink to="/verify/UA-2026-DEMO001" class="hover:text-indigo-400 transition">Verifikasi Sertifikat Digital</NuxtLink></li>
          <li><NuxtLink to="/portfolio/budiraharjo" class="hover:text-indigo-400 transition">Contoh Student Portfolio</NuxtLink></li>
          <li><NuxtLink to="/terms" class="hover:text-indigo-400 transition">Syarat & Ketentuan</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-slate-900 dark:text-white text-sm mb-3">Kontak & Bantuan</h3>
        <p class="text-xs leading-relaxed mb-2">Punya pertanyaan seputar kurikulum atau registrasi kelas?</p>
        <span class="text-xs font-medium text-slate-700 dark:text-slate-300">support@uneed.id</span>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-200 dark:border-slate-800/80 text-xs text-center flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>© 2026 Uneed Academy. All rights reserved.</p>
      <div class="flex items-center gap-4">
        <span>Jakarta, Indonesia (WIB)</span>
        <span>•</span>
        <span>IDR Currency</span>
      </div>
    </div>
  </footer>
</template>
