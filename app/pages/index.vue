<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-24 lg:py-32 border-b border-slate-200 dark:border-slate-800">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/0 to-slate-900/0 pointer-events-none" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-8">
          <UIcon name="i-heroicons-bolt" class="w-4 h-4" />
          Sequential Project-Based Learning LMS
        </div>
        
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
          Belajar Teknologi. Bangun Project. <span class="bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-400 bg-clip-text text-transparent">Buktikan Kemampuanmu.</span>
        </h1>
        
        <p class="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tingkatkan kemampuan teknologi melalui pembelajaran terstruktur, tantangan nyata, dan sertifikat yang membuktikan pencapaianmu.
        </p>

        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink to="/classes" class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-xl shadow-indigo-600/30 transition transform hover:-translate-y-0.5">
            Jelajahi Kelas
          </NuxtLink>
          <NuxtLink to="/auth/register" class="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-base transition">
            Mulai Belajar Gratis
          </NuxtLink>
        </div>

        <!-- Platform Stats -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800/80 pt-10">
          <div>
            <div class="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">100%</div>
            <div class="text-xs text-slate-500 mt-1 font-medium">Project-Based Quests</div>
          </div>
          <div>
            <div class="text-3xl font-extrabold text-sky-500">1-on-1</div>
            <div class="text-xs text-slate-500 mt-1 font-medium">Mentor Review & Feedback</div>
          </div>
          <div>
            <div class="text-3xl font-extrabold text-amber-500">Verifiable</div>
            <div class="text-xs text-slate-500 mt-1 font-medium">Digital QR Certificate</div>
          </div>
          <div>
            <div class="text-3xl font-extrabold text-emerald-500">TiDB Cloud</div>
            <div class="text-xs text-slate-500 mt-1 font-medium">Serverless Architecture</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Classes Section -->
    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-indigo-500">Kurikulum Unggulan</span>
          <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Kelas Populer & Berorientasi Industri</h2>
        </div>
        <NuxtLink to="/classes" class="mt-4 md:mt-0 text-sm font-semibold text-indigo-500 hover:text-indigo-400 flex items-center gap-1">
          Lihat Semua Kelas <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1E293B] overflow-hidden flex flex-col hover:border-indigo-500/50 transition">
          <div class="h-44 bg-gradient-to-tr from-slate-900 to-indigo-950 p-6 flex flex-col justify-between">
            <span class="px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-400 text-xs font-bold self-start">Beginner</span>
            <h3 class="text-xl font-bold text-white">Basic Web Development</h3>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Fondasi fundamental web: HTML5 semantik, CSS Modern, Responsive Design, dan JavaScript DOM manipulation.
            </p>
            <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span class="text-xs text-slate-400">Investasi</span>
                <div class="text-lg font-bold text-slate-900 dark:text-white">Gratis</div>
              </div>
              <NuxtLink to="/classes/basic-web-development" class="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold">
                Lihat Detail
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1E293B] overflow-hidden flex flex-col hover:border-indigo-500/50 transition">
          <div class="h-44 bg-gradient-to-tr from-slate-900 to-sky-950 p-6 flex flex-col justify-between">
            <span class="px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-400 text-xs font-bold self-start">Special AI Track</span>
            <h3 class="text-xl font-bold text-white">Vibe Coding with AI</h3>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Kuasai teknik membangun aplikasi kilat dengan AI Studio, TiDB Cloud database, dan deployment otomatis.
            </p>
            <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span class="text-xs text-slate-400">Investasi</span>
                <div class="text-lg font-bold text-slate-900 dark:text-white">Rp 149.000</div>
              </div>
              <NuxtLink to="/classes/vibe-coding-with-ai" class="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold">
                Lihat Detail
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1E293B] overflow-hidden flex flex-col hover:border-indigo-500/50 transition">
          <div class="h-44 bg-gradient-to-tr from-slate-900 to-purple-950 p-6 flex flex-col justify-between">
            <span class="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-400 text-xs font-bold self-start">Intermediate</span>
            <h3 class="text-xl font-bold text-white">Fullstack Web Development</h3>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Nuxt 4 fullstack, Nitro API engine, Drizzle ORM, autentikasi terenkripsi, dan deployment cloud.
            </p>
            <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span class="text-xs text-slate-400">Investasi</span>
                <div class="text-lg font-bold text-slate-900 dark:text-white">Rp 299.000</div>
              </div>
              <NuxtLink to="/classes/fullstack-web-development" class="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold">
                Lihat Detail
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
