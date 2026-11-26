<template>
  <div class="space-y-6">
    <!-- Hero Header Banner -->
    <div class="rounded-3xl p-6 text-white relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-blue-500/15"
      style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #06b6d4 100%);">
      <div class="flex items-center gap-4">
        <div class="h-12 w-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0">
          <UIcon name="i-heroicons-queue-list" class="w-6 h-6 text-cyan-200" />
        </div>
        <div>
          <span class="text-[10px] font-bold uppercase tracking-widest text-cyan-200">Sequential Learning Engine</span>
          <h1 class="text-xl md:text-2xl font-extrabold text-white">Curriculum Builder</h1>
          <p class="text-xs text-blue-100 mt-0.5">Susun modul dan quest berurutan untuk setiap kelas</p>
        </div>
      </div>
      <select v-model="selectedClassId" class="px-4 py-2.5 rounded-xl border border-white/30 bg-white text-xs font-bold text-slate-800 outline-none w-full sm:w-64 shadow-md">
        <option value="">Pilih kelas...</option>
        <option v-for="cls in curriculum" :key="cls.id" :value="cls.id">{{ cls.title }}</option>
      </select>
    </div>

    <div v-if="message" class="rounded-xl border px-4 py-3 text-xs font-semibold"
      :class="message.startsWith('✓') ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'">
      {{ message }}
    </div>

    <template v-if="selectedClass">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div class="bg-white rounded-3xl border border-blue-100 p-4 shadow-sm">
          <div class="text-[10px] uppercase font-bold text-slate-400">Modul</div>
          <div class="text-xl font-black text-slate-800 mt-1">{{ selectedClass.modules.length }}</div>
        </div>
        <div class="bg-white rounded-3xl border border-blue-100 p-4 shadow-sm">
          <div class="text-[10px] uppercase font-bold text-slate-400">Quest</div>
          <div class="text-xl font-black text-blue-700 mt-1">{{ selectedClass.totalTasks }}</div>
        </div>
        <div class="bg-white rounded-3xl border border-blue-100 p-4 shadow-sm">
          <div class="text-[10px] uppercase font-bold text-slate-400">Total XP</div>
          <div class="text-xl font-black text-cyan-600 mt-1">{{ selectedClass.totalXp }}</div>
        </div>
        <div class="bg-white rounded-3xl border border-blue-100 p-4 shadow-sm">
          <div class="text-[10px] uppercase font-bold text-slate-400">Status Kelas</div>
          <div class="text-sm font-black capitalize mt-2" :class="selectedClass.status === 'published' ? 'text-emerald-600' : 'text-amber-600'">
            {{ selectedClass.status }}
          </div>
        </div>
      </div>

      <div class="bg-white border border-blue-100 rounded-3xl p-5 md:p-6 space-y-4 shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div class="font-extrabold text-slate-800 text-sm">{{ selectedClass.title }}</div>
            <div class="text-[11px] text-slate-500">Modul dan quest ditampilkan berurutan sesuai urutan dibuat.</div>
          </div>
          <button @click="showModule = true"
            class="px-4 py-2 rounded-full text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm hover:opacity-90 inline-flex items-center gap-1.5"
            style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
            <UIcon name="i-heroicons-plus" class="w-3.5 h-3.5" /> Tambah Modul
          </button>
        </div>

        <div v-if="!selectedClass.modules.length" class="py-10 text-center text-xs text-slate-400 border border-dashed border-blue-200 rounded-2xl">
          Belum ada modul. Tambah modul pertama untuk mulai menyusun kurikulum.
        </div>

        <div v-for="(mod, index) in selectedClass.modules" :key="mod.id"
          class="rounded-2xl border border-blue-100 overflow-hidden">
          <div class="p-4 bg-blue-50/40 flex flex-wrap items-center gap-3 border-b border-blue-100/70">
            <span class="h-7 w-7 rounded-xl bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0">
              {{ index + 1 }}
            </span>
            <div class="min-w-0 flex-1">
              <div class="text-sm font-bold text-slate-800">{{ mod.title }}</div>
              <div class="text-[11px] text-slate-500">{{ mod.lessons.length }} materi · {{ mod.tasks.length }} quest</div>
            </div>
            <button @click="openTask(mod.id)" class="px-3 py-1.5 rounded-full border border-blue-200 bg-white text-blue-700 text-[11px] font-bold hover:bg-blue-50">
              + Quest
            </button>
          </div>
          <div v-if="mod.description" class="px-4 pt-3 text-[11px] text-slate-500">{{ mod.description }}</div>
          <div class="p-4 space-y-2">
            <div v-for="(task, taskIndex) in mod.tasks" :key="task.id"
              class="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3.5 py-2.5">
              <span class="h-5 w-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                {{ taskIndex + 1 }}
              </span>
              <div class="min-w-0 flex-1">
                <div class="text-xs font-bold text-slate-800 truncate">{{ task.title }}</div>
                <div class="text-[10px] text-slate-400 capitalize">{{ task.taskType.replace('_', ' ') }}</div>
              </div>
              <span class="text-[11px] font-bold text-blue-700 whitespace-nowrap">+{{ task.xpReward }} XP</span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                :class="task.status === 'published' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'">
                {{ task.status }}
              </span>
            </div>
            <div v-if="!mod.tasks.length" class="py-3 text-center text-[11px] text-slate-400">Belum ada quest di modul ini.</div>
          </div>
        </div>
      </div>
    </template>

    <div v-else class="bg-white border border-slate-200 rounded-2xl py-16 text-center text-xs text-slate-400">
      Pilih kelas untuk melihat dan menyusun kurikulum.
    </div>

    <!-- Add module -->
    <Teleport to="body">
      <div v-if="showModule" class="fixed inset-0 bg-slate-900/55 backdrop-blur-sm flex items-center justify-center z-[999] p-4" @click.self="showModule = false">
        <div class="bg-white rounded-3xl border border-blue-100 w-full max-w-md p-6 space-y-4 shadow-2xl">
          <h3 class="font-extrabold text-slate-900">Tambah Modul</h3>
          <form @submit.prevent="addModule" class="space-y-3">
            <label class="block">
              <span class="text-[11px] font-bold text-slate-600">Judul Modul</span>
              <input v-model="moduleForm.title" required type="text" placeholder="Misal: HTML Semantik"
                class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:bg-white" />
            </label>
            <label class="block">
              <span class="text-[11px] font-bold text-slate-600">Deskripsi (opsional)</span>
              <textarea v-model="moduleForm.description" rows="2"
                class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:bg-white"></textarea>
            </label>
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" @click="showModule = false" class="px-4 py-2 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100">Batal</button>
              <button type="submit" :disabled="saving" class="px-5 py-2 rounded-full text-white text-xs font-extrabold disabled:opacity-50" style="background: linear-gradient(135deg, #22d3ee, #2563eb);">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </Teleport>

    <!-- Add task -->
    <Teleport to="body">
      <div v-if="showTask" class="fixed inset-0 bg-slate-900/55 backdrop-blur-sm flex items-center justify-center z-[999] p-4" @click.self="showTask = false">
        <div class="bg-white rounded-3xl border border-blue-100 w-full max-w-md p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
          <h3 class="font-extrabold text-slate-900">Tambah Quest</h3>
          <form @submit.prevent="addTask" class="space-y-3">
            <label class="block">
              <span class="text-[11px] font-bold text-slate-600">Judul Quest</span>
              <input v-model="taskForm.title" required type="text" placeholder="Misal: Buat halaman profil"
                class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500" />
            </label>
            <div class="grid grid-cols-2 gap-3">
              <label class="block">
                <span class="text-[11px] font-bold text-slate-600">Tipe</span>
                <select v-model="taskForm.taskType" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none">
                  <option value="coding">Coding</option>
                  <option value="reading">Reading</option>
                  <option value="project">Project</option>
                  <option value="quiz">Quiz</option>
                  <option value="deployment">Deployment</option>
                  <option value="final_project">Final Project</option>
                </select>
              </label>
              <label class="block">
                <span class="text-[11px] font-bold text-slate-600">Reward XP</span>
                <input v-model="taskForm.xpReward" type="number" min="0" step="10"
                  class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500" />
              </label>
            </div>
            <label class="block">
              <span class="text-[11px] font-bold text-slate-600">Deskripsi Singkat</span>
              <textarea v-model="taskForm.description" rows="2"
                class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500"></textarea>
            </label>
            <label class="block">
              <span class="text-[11px] font-bold text-slate-600">Instruksi untuk Siswa</span>
              <textarea v-model="taskForm.instructions" rows="3"
                class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500"></textarea>
            </label>
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" @click="showTask = false" class="px-4 py-2 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100">Batal</button>
              <button type="submit" :disabled="saving" class="px-5 py-2 rounded-full text-white text-xs font-extrabold disabled:opacity-50" style="background: linear-gradient(135deg, #22d3ee, #2563eb);">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })

interface ModuleItem {
  id: string
  title: string
  description: string | null
  orderIndex: number
  lessons: { id: string, title: string }[]
  tasks: { id: string, title: string, taskType: string, xpReward: number, status: string }[]
}
interface CurriculumItem {
  id: string
  title: string
  status: string
  modules: ModuleItem[]
  totalTasks: number
  totalXp: number
}

const showModule = ref(false)
const showTask = ref(false)
const saving = ref(false)
const message = ref('')
const selectedClassId = ref('')
const activeModuleId = ref('')

const moduleForm = reactive({ title: '', description: '' })
const taskForm = reactive({ title: '', description: '', instructions: '', taskType: 'coding', xpReward: 100 })

const { data, refresh } = await useFetch<{ curriculum: CurriculumItem[] }>('/api/admin/curriculum')
const curriculum = computed(() => data.value?.curriculum || [])
const selectedClass = computed(() => curriculum.value.find(cls => cls.id === selectedClassId.value) || null)

watch(curriculum, (list) => {
  if (!selectedClassId.value && list.length) selectedClassId.value = list[0]!.id
}, { immediate: true })

function notify(text: string) {
  message.value = text
  setTimeout(() => { message.value = '' }, 4000)
}

function openTask(moduleId: string) {
  activeModuleId.value = moduleId
  Object.assign(taskForm, { title: '', description: '', instructions: '', taskType: 'coding', xpReward: 100 })
  showTask.value = true
}

async function addModule() {
  if (!selectedClassId.value) return
  saving.value = true
  try {
    await $fetch('/api/admin/curriculum/modules', {
      method: 'POST',
      body: { classId: selectedClassId.value, title: moduleForm.title, description: moduleForm.description },
    })
    moduleForm.title = ''
    moduleForm.description = ''
    showModule.value = false
    notify('✓ Modul ditambahkan')
    await refresh()
  } catch (error: any) {
    notify(`✗ ${error?.data?.statusMessage || error?.statusMessage || 'Gagal menambah modul'}`)
  } finally {
    saving.value = false
  }
}

async function addTask() {
  if (!activeModuleId.value) return
  saving.value = true
  try {
    await $fetch('/api/admin/curriculum/tasks', {
      method: 'POST',
      body: {
        moduleId: activeModuleId.value,
        title: taskForm.title,
        description: taskForm.description,
        instructions: taskForm.instructions,
        taskType: taskForm.taskType,
        xpReward: Number(taskForm.xpReward) || 100,
      },
    })
    showTask.value = false
    notify('✓ Quest ditambahkan')
    await refresh()
  } catch (error: any) {
    notify(`✗ ${error?.data?.statusMessage || error?.statusMessage || 'Gagal menambah quest'}`)
  } finally {
    saving.value = false
  }
}
</script>
