<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <div class="text-xs text-slate-400 font-semibold">Admin Console</div>
        <h1 class="text-xl md:text-2xl font-extrabold text-slate-900 mt-0.5">Class Management</h1>
      </div>
      <div class="flex items-center gap-3">
        <!-- Grid / Table Toggle -->
        <div class="flex items-center bg-white border border-blue-100 rounded-xl p-1 shadow-sm">
          <button @click="viewMode = 'grid'" class="p-1.5 rounded-lg transition"
            :class="viewMode === 'grid' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'">
            <UIcon name="i-heroicons-squares-2x2" class="w-4 h-4" />
          </button>
          <button @click="viewMode = 'table'" class="p-1.5 rounded-lg transition"
            :class="viewMode === 'table' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'">
            <UIcon name="i-heroicons-bars-3" class="w-4 h-4" />
          </button>
        </div>

        <button @click="openCreate"
          class="px-5 py-2.5 rounded-full text-white text-xs font-extrabold uppercase tracking-wider shadow-md shadow-blue-500/20 transition hover:opacity-90 inline-flex items-center justify-center gap-1.5"
          style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
          <UIcon name="i-heroicons-plus" class="w-4 h-4" /> Buat Kelas Baru
        </button>
      </div>
    </div>

    <div v-if="message" class="rounded-2xl border px-4 py-3 text-xs font-semibold"
      :class="message.startsWith('✓') ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'">
      {{ message }}
    </div>

    <!-- Search Bar -->
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="text-xs font-bold text-slate-600">{{ filteredClasses.length }} kelas tersedia</div>
      <div class="relative w-full sm:w-64">
        <UIcon name="i-heroicons-magnifying-glass" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input v-model="search" type="text" placeholder="Cari kelas..."
          class="pl-10 pr-4 py-2 rounded-xl border border-blue-100 bg-white text-xs outline-none focus:border-blue-400 w-full shadow-sm" />
      </div>
    </div>

    <!-- 3D FOLDER GRID VIEW (matching Student UI) -->
    <div v-if="viewMode === 'grid'">
      <div v-if="!filteredClasses.length" class="bg-white border border-blue-100 rounded-3xl p-12 text-center text-xs text-slate-400">
        Tidak ada kelas yang cocok.
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="cls in filteredClasses" :key="cls.id"
          class="bg-white/95 rounded-3xl border border-blue-100 p-5 hover:shadow-lg hover:shadow-blue-500/10 transition flex flex-col justify-between gap-4">
          <div>
            <div class="flex items-start justify-between gap-3 mb-4">
              <StudentFolderIcon size="lg" :icon="styleOf(cls.slug).icon" :back-color="styleOf(cls.slug).backColor" :front-gradient="styleOf(cls.slug).frontGradient" />
              <div class="text-right space-y-1.5">
                <select :value="cls.status" :disabled="savingId === cls.id"
                  class="px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase outline-none cursor-pointer"
                  :class="statusClass(cls.status)"
                  @change="updateStatus(cls, ($event.target as HTMLSelectElement).value)">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
                <div class="font-extrabold text-sm" :class="cls.price === 0 ? 'text-emerald-600' : 'text-blue-700'">
                  {{ money(cls.price) }}
                </div>
              </div>
            </div>

            <div class="text-[10px] text-slate-400 font-medium mb-0.5">
              {{ cls.moduleCount }} Modul · {{ cls.taskCount }} Quest · {{ cls.enrollmentCount }} Siswa
            </div>
            <h3 class="font-extrabold text-slate-800 text-base leading-snug">{{ cls.title }}</h3>
            <p class="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">{{ cls.shortDescription || 'Kurikulum terstruktur berbasis project nyata.' }}</p>
          </div>

          <div class="border-t border-slate-100 pt-3 flex items-center justify-between gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase">
              {{ cls.difficulty }}
            </span>
            <div class="flex items-center gap-3">
              <button @click="openEdit(cls)" class="text-[11px] font-bold text-blue-600 hover:underline">
                Edit
              </button>
              <NuxtLink :to="`/classes/${cls.slug}`" target="_blank" class="text-[11px] font-bold text-cyan-600 hover:underline">
                Preview
              </NuxtLink>
              <button :disabled="savingId === cls.id" @click="archive(cls)"
                class="text-[11px] font-bold text-rose-600 hover:underline disabled:opacity-40">
                Arsipkan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TABLE VIEW -->
    <div v-else class="bg-white border border-blue-100 rounded-3xl shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm min-w-[720px]">
          <thead class="text-[10px] uppercase text-slate-400 border-b border-slate-100 bg-slate-50/70">
            <tr>
              <th class="py-3 px-5">Nama Kelas</th>
              <th class="py-3 px-5">Level</th>
              <th class="py-3 px-5">Harga</th>
              <th class="py-3 px-5">Modul / Quest</th>
              <th class="py-3 px-5">Siswa</th>
              <th class="py-3 px-5">Status</th>
              <th class="py-3 px-5 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr v-for="cls in filteredClasses" :key="cls.id" class="hover:bg-blue-50/30 transition">
              <td class="py-3.5 px-5">
                <div class="flex items-center gap-3">
                  <StudentFolderIcon size="sm" :icon="styleOf(cls.slug).icon" :back-color="styleOf(cls.slug).backColor" :front-gradient="styleOf(cls.slug).frontGradient" />
                  <div>
                    <div class="font-bold text-slate-800">{{ cls.title }}</div>
                    <div class="text-[11px] text-slate-400">/{{ cls.slug }}</div>
                  </div>
                </div>
              </td>
              <td class="py-3.5 px-5 capitalize">{{ cls.difficulty }}</td>
              <td class="py-3.5 px-5 font-bold" :class="cls.price === 0 ? 'text-emerald-600' : 'text-blue-700'">{{ money(cls.price) }}</td>
              <td class="py-3.5 px-5">{{ cls.moduleCount }} / {{ cls.taskCount }}</td>
              <td class="py-3.5 px-5">{{ cls.enrollmentCount }}</td>
              <td class="py-3.5 px-5">
                <select :value="cls.status" :disabled="savingId === cls.id"
                  class="px-2.5 py-1 rounded-full border text-[11px] font-bold outline-none"
                  :class="statusClass(cls.status)"
                  @change="updateStatus(cls, ($event.target as HTMLSelectElement).value)">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </td>
              <td class="py-3.5 px-5 text-right space-x-3">
                <button @click="openEdit(cls)" class="text-[11px] font-bold text-blue-600 hover:underline">
                  Edit
                </button>
                <button :disabled="savingId === cls.id" @click="archive(cls)"
                  class="text-[11px] font-bold text-rose-600 hover:underline disabled:opacity-40">
                  Arsipkan
                </button>
              </td>
            </tr>
            <tr v-if="!filteredClasses.length">
              <td colspan="7" class="py-10 text-center text-xs text-slate-400">Tidak ada kelas yang cocok.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Create class modal (Teleported to body) -->
    <Teleport to="body">
      <div v-if="showModal" class="fixed inset-0 bg-slate-900/55 backdrop-blur-sm flex items-center justify-center z-[999] p-4"
        @click.self="showModal = false">
        <div class="bg-white rounded-3xl border border-blue-100 max-w-lg w-full p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
          <div class="flex items-center justify-between">
            <h3 class="font-extrabold text-slate-900 text-base">{{ editingId ? 'Edit Kelas' : 'Tambah Kelas Baru' }}</h3>
            <button class="text-slate-400 hover:text-slate-600" @click="showModal = false">
              <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
            </button>
          </div>
          <form @submit.prevent="saveClass" class="space-y-3">
            <label class="block">
              <span class="text-[11px] font-bold text-slate-600">Nama Kelas</span>
              <input v-model="form.title" type="text" required placeholder="Misal: Dasar JavaScript"
                class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:bg-white" />
            </label>
            <label class="block">
              <span class="text-[11px] font-bold text-slate-600">Deskripsi Singkat</span>
              <textarea v-model="form.shortDescription" rows="2" placeholder="Ringkasan kelas untuk kartu katalog"
                class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:bg-white"></textarea>
            </label>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label class="block">
                <span class="text-[11px] font-bold text-slate-600">Level</span>
                <select v-model="form.difficulty" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:bg-white">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </label>
              <label class="block">
                <span class="text-[11px] font-bold text-slate-600">Harga (Rp)</span>
                <input v-model="form.price" type="number" min="0" step="1000" placeholder="0 untuk gratis"
                  class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:bg-white" />
              </label>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label class="block">
                <span class="text-[11px] font-bold text-slate-600">Durasi (jam)</span>
                <input v-model="form.estimatedDurationHours" type="number" min="1"
                  class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:bg-white" />
              </label>
              <label class="block">
                <span class="text-[11px] font-bold text-slate-600">Status</span>
                <select v-model="form.status" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:bg-white">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </label>
            </div>
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" @click="showModal = false" class="px-4 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100">Batal</button>
              <button type="submit" :disabled="saving"
                class="px-5 py-2.5 rounded-full text-white text-xs font-extrabold uppercase tracking-wider disabled:opacity-50"
                style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
                {{ saving ? 'Menyimpan...' : 'Simpan Kelas' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })

interface AdminClass {
  id: string
  title: string
  slug: string
  difficulty: string
  price: number
  status: string
  moduleCount: number
  taskCount: number
  enrollmentCount: number
  shortDescription: string | null
  estimatedDurationHours: number
}

const viewMode = ref<'grid' | 'table'>('grid')
const search = ref('')
const showModal = ref(false)
const editingId = ref('')
const saving = ref(false)
const savingId = ref('')
const message = ref('')

const form = reactive({
  title: '',
  shortDescription: '',
  difficulty: 'beginner',
  price: 0,
  estimatedDurationHours: 10,
  status: 'draft',
})

const { data, refresh } = await useFetch<{ classes: AdminClass[] }>('/api/admin/classes')
const classes = computed(() => data.value?.classes || [])
const filteredClasses = computed(() => {
  const keyword = search.value.trim().toLowerCase()
  if (!keyword) return classes.value
  return classes.value.filter(cls => cls.title.toLowerCase().includes(keyword) || cls.slug.includes(keyword))
})

const styleMap: Record<string, { icon: string; backColor: string; frontGradient: string }> = {
  'basic-web-development': { icon: 'i-heroicons-code-bracket', backColor: '#db2777', frontGradient: 'linear-gradient(135deg,#f472b6,#ec4899)' },
  'vibe-coding-ai': { icon: 'i-heroicons-cpu-chip', backColor: '#059669', frontGradient: 'linear-gradient(135deg,#34d399,#10b981)' },
  'fullstack-web-development': { icon: 'i-heroicons-server-stack', backColor: '#0284c7', frontGradient: 'linear-gradient(135deg,#38bdf8,#2563eb)' },
  'database-engineering': { icon: 'i-heroicons-circle-stack', backColor: '#d97706', frontGradient: 'linear-gradient(135deg,#fbbf24,#f59e0b)' },
  'ui-ux-fundamentals': { icon: 'i-heroicons-paint-brush', backColor: '#e11d48', frontGradient: 'linear-gradient(135deg,#fb7185,#f43f5e)' },
  'react-nextjs': { icon: 'i-heroicons-bolt', backColor: '#7c3aed', frontGradient: 'linear-gradient(135deg,#a78bfa,#6366f1)' },
}

function styleOf(slug: string) {
  return styleMap[slug] || { icon: 'i-heroicons-academic-cap', backColor: '#2563eb', frontGradient: 'linear-gradient(135deg,#60a5fa,#3b82f6)' }
}

function money(value: number) {
  return value ? `Rp${new Intl.NumberFormat('id-ID').format(Number(value))}` : 'Gratis'
}

function statusClass(status: string) {
  if (status === 'published') return 'border-emerald-200 bg-emerald-50 text-emerald-700'
  if (status === 'draft') return 'border-amber-200 bg-amber-50 text-amber-700'
  return 'border-slate-200 bg-slate-100 text-slate-600'
}

function notify(text: string) {
  message.value = text
  setTimeout(() => { message.value = '' }, 4000)
}

function openCreate() {
  editingId.value = ''
  Object.assign(form, {
    title: '', shortDescription: '', difficulty: 'beginner',
    price: 0, estimatedDurationHours: 10, status: 'draft',
  })
  showModal.value = true
}

function openEdit(cls: AdminClass) {
  editingId.value = cls.id
  Object.assign(form, {
    title: cls.title,
    shortDescription: cls.shortDescription || '',
    difficulty: cls.difficulty,
    price: Number(cls.price) || 0,
    estimatedDurationHours: Number(cls.estimatedDurationHours) || 10,
    status: cls.status,
  })
  showModal.value = true
}

async function saveClass() {
  saving.value = true
  try {
    const payload = {
      title: form.title,
      shortDescription: form.shortDescription,
      difficulty: form.difficulty,
      price: Number(form.price) || 0,
      estimatedDurationHours: Number(form.estimatedDurationHours) || 10,
      status: form.status,
    }
    if (editingId.value) {
      await $fetch(`/api/admin/classes/${editingId.value}`, { method: 'PATCH', body: payload })
      notify('✓ Kelas berhasil diperbarui')
    } else {
      await $fetch('/api/admin/classes', { method: 'POST', body: payload })
      notify('✓ Kelas berhasil dibuat')
    }
    showModal.value = false
    await refresh()
  } catch (error: any) {
    notify(`✗ ${error?.data?.statusMessage || error?.statusMessage || 'Gagal menyimpan kelas'}`)
  } finally {
    saving.value = false
  }
}

async function updateStatus(cls: AdminClass, status: string) {
  savingId.value = cls.id
  try {
    await $fetch(`/api/admin/classes/${cls.id}`, { method: 'PATCH', body: { status } })
    notify(`✓ Status kelas diperbarui menjadi ${status}`)
    await refresh()
  } catch (error: any) {
    notify(`✗ ${error?.data?.statusMessage || error?.statusMessage || 'Gagal memperbarui status'}`)
  } finally {
    savingId.value = ''
  }
}

async function archive(cls: AdminClass) {
  if (!confirm(`Arsipkan kelas "${cls.title}"? Kelas akan hilang dari katalog publik.`)) return
  savingId.value = cls.id
  try {
    await $fetch(`/api/admin/classes/${cls.id}`, { method: 'DELETE' })
    notify('✓ Kelas diarsipkan')
    await refresh()
  } catch (error: any) {
    notify(`✗ ${error?.data?.statusMessage || error?.statusMessage || 'Gagal mengarsipkan kelas'}`)
  } finally {
    savingId.value = ''
  }
}
</script>
