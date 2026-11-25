<template>
  <div class="h-[calc(100vh-4rem)] flex flex-col bg-slate-950 text-slate-100">
    <!-- Top Classroom Bar -->
    <div class="h-14 border-b border-slate-800 px-6 flex items-center justify-between bg-slate-900/60 backdrop-blur">
      <div class="flex items-center gap-4">
        <NuxtLink to="/student" class="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1">
          <UIcon name="i-heroicons-arrow-left" class="w-4 h-4" /> Kembali
        </NuxtLink>
        <span class="text-slate-700">|</span>
        <h1 class="text-sm font-bold">Basic Web Development — Uneed Classroom</h1>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-xs text-indigo-400 font-medium">Progress: 2/8 (25%)</span>
      </div>
    </div>

    <!-- 3-Column Classroom Layout -->
    <div class="flex-1 flex overflow-hidden">
      <!-- Left Sidebar: Sequential Modules & Quests -->
      <aside class="w-80 border-r border-slate-800 bg-[#0B1120] overflow-y-auto p-4 space-y-4">
        <div class="text-xs font-bold uppercase tracking-wider text-slate-400 px-2">Alur Pembelajaran</div>
        
        <div class="space-y-2">
          <!-- Task 1: Completed -->
          <div class="p-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex items-center justify-between cursor-pointer">
            <div>
              <div class="text-xs font-bold text-emerald-400">Task 1: Introduction</div>
              <div class="text-[11px] text-slate-400">Tugas Disetujui (100/100)</div>
            </div>
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-emerald-400" />
          </div>

          <!-- Task 2: Completed -->
          <div class="p-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex items-center justify-between cursor-pointer">
            <div>
              <div class="text-xs font-bold text-emerald-400">Task 2: HTML Fundamentals</div>
              <div class="text-[11px] text-slate-400">Tugas Disetujui (90/100)</div>
            </div>
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-emerald-400" />
          </div>

          <!-- Task 3: Active / Available -->
          <div class="p-3 rounded-xl border border-indigo-500 bg-indigo-950/40 flex items-center justify-between cursor-pointer">
            <div>
              <div class="text-xs font-bold text-indigo-300">Task 3: CSS Fundamentals</div>
              <div class="text-[11px] text-indigo-400 font-medium">Sedang Dikerjakan</div>
            </div>
            <span class="h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
          </div>

          <!-- Task 4: Locked -->
          <div class="p-3 rounded-xl border border-slate-800/80 bg-slate-900/40 opacity-60 flex items-center justify-between">
            <div>
              <div class="text-xs font-semibold text-slate-400">Task 4: Responsive Design</div>
              <div class="text-[10px] text-slate-500">Terkunci (Selesaikan Task 3)</div>
            </div>
            <UIcon name="i-heroicons-lock-closed" class="w-4 h-4 text-slate-500" />
          </div>

          <!-- Task 5: Locked -->
          <div class="p-3 rounded-xl border border-slate-800/80 bg-slate-900/40 opacity-60 flex items-center justify-between">
            <div>
              <div class="text-xs font-semibold text-slate-400">Task 5: JavaScript Basics</div>
              <div class="text-[10px] text-slate-500">Terkunci</div>
            </div>
            <UIcon name="i-heroicons-lock-closed" class="w-4 h-4 text-slate-500" />
          </div>
        </div>
      </aside>

      <!-- Main Content Area: Task Instructions & Submission Form -->
      <main class="flex-1 overflow-y-auto p-8 space-y-8 bg-[#0F172A]">
        <div class="max-w-3xl space-y-6">
          <div class="border-b border-slate-800 pb-4">
            <span class="text-xs font-bold uppercase tracking-wider text-indigo-400">Uneed Quest — Task 3</span>
            <h2 class="text-2xl font-black text-white mt-1">CSS Fundamentals & Modern Flexbox Layout</h2>
          </div>

          <div class="prose prose-invert max-w-none text-sm text-slate-300 space-y-4 leading-relaxed">
            <p>
              Pada quest ini, Anda diminta merancang layout website profil pribadi yang responsif menggunakan CSS modern (Flexbox dan Grid).
            </p>
            <h4 class="text-white font-bold">Kriteria Tugas:</h4>
            <ul class="list-disc pl-5 space-y-1 text-slate-300">
              <li>Struktur kode CSS rapi menggunakan class semantik.</li>
              <li>Menerapkan Flexbox untuk navigasi dan card grid.</li>
              <li>Deploy website ke Vercel atau GitHub Pages.</li>
            </ul>
          </div>

          <!-- Submission Form Component -->
          <div class="mt-8 p-6 rounded-2xl border border-slate-800 bg-[#1E293B] space-y-4">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <UIcon name="i-heroicons-arrow-up-tray" class="w-5 h-5 text-indigo-400" />
              Pengumpulan Tugas (Submission)
            </h3>

            <div v-if="submissionSuccess" class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              Tugas berhasil dikumpulkan dan masuk ke antrean review mentor!
            </div>

            <form @submit.prevent="submitQuest" class="space-y-4">
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1">Judul Pengerjaan</label>
                <input
                  v-model="submission.title"
                  type="text"
                  required
                  placeholder="Contoh: Implementasi Layout Flexbox Profile v1"
                  class="w-full px-3.5 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1">URL GitHub Repository</label>
                <input
                  v-model="submission.githubUrl"
                  type="url"
                  placeholder="https://github.com/username/profile-flexbox"
                  class="w-full px-3.5 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1">URL Live Deployment (Vercel)</label>
                <input
                  v-model="submission.liveUrl"
                  type="url"
                  placeholder="https://myprofile.vercel.app"
                  class="w-full px-3.5 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1">Catatan Pengerjaan untuk Mentor</label>
                <textarea
                  v-model="submission.description"
                  rows="3"
                  required
                  placeholder="Jelaskan bagaimana Anda menyusun layout dan tantangan yang dihadapi..."
                  class="w-full px-3.5 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-sm focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="submitting"
                class="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/25 transition disabled:opacity-50"
              >
                {{ submitting ? 'Mengirim Tugas...' : 'Kumpulkan Tugas ke Mentor' }}
              </button>
            </form>
          </div>
        </div>
      </main>

      <!-- Right Sidebar: Quest Objectives & Badge Preview -->
      <aside class="w-72 border-l border-slate-800 bg-[#0B1120] p-6 space-y-6">
        <div>
          <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Reward Quest Ini</div>
          <div class="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 flex items-center gap-3">
            <UIcon name="i-heroicons-sparkles" class="w-8 h-8 text-amber-400" />
            <div>
              <div class="text-xs font-bold text-white">+100 XP</div>
              <div class="text-[11px] text-amber-400 font-semibold">CSS Designer Badge</div>
            </div>
          </div>
        </div>

        <div>
          <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Mentor Pemeriksa</div>
          <div class="text-sm font-semibold text-white">Aris Prasetyo</div>
          <div class="text-xs text-slate-400">Senior Frontend Engineer</div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const submitting = ref(false)
const submissionSuccess = ref(false)

const submission = ref({
  title: '',
  githubUrl: '',
  liveUrl: '',
  description: '',
})

function submitQuest() {
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    submissionSuccess.value = true
  }, 800)
}
</script>
