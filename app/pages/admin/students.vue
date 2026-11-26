<template>
  <div class="space-y-6">
    <!-- Hero Header Banner -->
    <div class="rounded-3xl p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-blue-500/15"
      style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #06b6d4 100%);">
      <div class="flex items-center gap-4">
        <div class="h-12 w-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0">
          <UIcon name="i-heroicons-users" class="w-6 h-6 text-cyan-200" />
        </div>
        <div>
          <span class="text-[10px] font-bold uppercase tracking-widest text-cyan-200">Monitoring Peserta</span>
          <h1 class="text-xl md:text-2xl font-extrabold text-white">Student Monitoring</h1>
          <p class="text-xs text-blue-100 mt-0.5">Pantau progres belajar, XP, dan keaktifan siswa</p>
        </div>
      </div>
      <div class="px-4 py-2 rounded-full bg-white/15 border border-white/25 text-xs font-extrabold text-white">
        {{ students.length }} Siswa Terdaftar
      </div>
    </div>

    <div class="bg-white border border-blue-100 rounded-3xl shadow-sm overflow-hidden">
      <div class="p-4 border-b border-slate-100">
        <input v-model="search" type="text" placeholder="Cari nama atau email siswa..."
          class="w-full sm:w-72 pl-3.5 pr-4 py-2 rounded-xl border border-blue-100 text-xs outline-none focus:border-blue-500" />
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm min-w-[760px]">
          <thead class="text-[10px] uppercase text-slate-400 border-b border-slate-100 bg-slate-50/70">
            <tr>
              <th class="py-3 px-5">Nama Siswa</th>
              <th class="py-3 px-5">Kelas Aktif</th>
              <th class="py-3 px-5">Kelas Terakhir</th>
              <th class="py-3 px-5">Progress Rata-rata</th>
              <th class="py-3 px-5">Total XP</th>
              <th class="py-3 px-5">Sertifikat</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr v-for="s in filteredStudents" :key="s.id" class="hover:bg-blue-50/30 transition">
              <td class="py-3.5 px-5">
                <div class="flex items-center gap-3">
                  <div class="h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0"
                    style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
                    {{ s.name.slice(0, 2).toUpperCase() }}
                  </div>
                  <div>
                    <div class="font-bold text-slate-800">{{ s.name }}</div>
                    <div class="text-xs text-slate-400">{{ s.email }}</div>
                  </div>
                </div>
              </td>
              <td class="py-3.5 px-5">{{ s.activeClasses }}</td>
              <td class="py-3.5 px-5 text-xs">{{ s.latestClass || '—' }}</td>
              <td class="py-3.5 px-5">
                <div class="flex items-center gap-2">
                  <div class="h-1.5 w-20 bg-slate-100 rounded-full overflow-hidden">
                    <div class="h-full rounded-full" :style="{ width: `${Math.min(100, s.averageProgress)}%`, background: 'linear-gradient(90deg,#22d3ee,#2563eb)' }"></div>
                  </div>
                  <span class="text-xs font-bold text-blue-700">{{ s.averageProgress }}%</span>
                </div>
              </td>
              <td class="py-3.5 px-5 font-bold">{{ s.totalXp }} XP</td>
              <td class="py-3.5 px-5">{{ s.certificates }}</td>
            </tr>
            <tr v-if="!filteredStudents.length">
              <td colspan="6" class="py-10 text-center text-xs text-slate-400">Belum ada siswa terdaftar.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })

interface StudentRow {
  id: string
  name: string
  email: string
  status: string
  totalXp: number
  currentLevel: number
  activeClasses: number
  latestClass: string | null
  averageProgress: number
  certificates: number
}

const search = ref('')
const { data } = await useFetch<{ students: StudentRow[] }>('/api/admin/students')
const students = computed(() => data.value?.students || [])
const filteredStudents = computed(() => {
  const keyword = search.value.trim().toLowerCase()
  if (!keyword) return students.value
  return students.value.filter(s => s.name.toLowerCase().includes(keyword) || s.email.toLowerCase().includes(keyword))
})
</script>
