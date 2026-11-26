<template>
  <div class="space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 class="text-xl md:text-2xl font-extrabold text-slate-900">Mentor & Alumni</h1>
        <p class="text-xs text-slate-500 mt-1">Kelola testimoni yang tampil di halaman landing</p>
      </div>
      <button @click="openCreate"
        class="px-4 py-2.5 rounded-xl text-white text-xs font-bold hover:opacity-90 inline-flex items-center gap-1.5"
        style="background:linear-gradient(135deg,#14b8a6,#0ea5e9)">
        <UIcon name="i-heroicons-plus" class="w-4 h-4" /> Tambah Testimoni
      </button>
    </div>

    <div v-if="message" class="rounded-xl border px-4 py-3 text-xs font-semibold"
      :class="message.startsWith('✓') ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'">
      {{ message }}
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div v-for="group in groups" :key="group.role" class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm min-w-0">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-bold text-slate-800 text-sm">{{ group.label }}</h3>
          <span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700">{{ group.rows.length }} data</span>
        </div>
        <div class="space-y-2.5">
          <div v-for="item in group.rows" :key="item.id" class="rounded-xl border border-slate-100 p-3.5 bg-slate-50/60">
            <div class="flex items-start gap-3">
              <div class="h-9 w-9 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0">
                {{ initials(item.name) }}
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="text-xs font-bold text-slate-800">{{ item.name }}</span>
                  <span class="text-[10px] font-semibold text-amber-600">★ {{ item.rating }}.0</span>
                  <span v-if="!item.isActive" class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-slate-200 text-slate-600">Nonaktif</span>
                </div>
                <div class="text-[10px] text-teal-600 font-semibold">{{ item.headline || '—' }}</div>
                <p class="text-[11px] text-slate-500 mt-1 leading-relaxed">“{{ item.quote }}”</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 mt-3 pt-3 border-t border-slate-100">
              <button @click="openEdit(item)" class="text-[11px] font-bold text-slate-600 hover:text-teal-700">Edit</button>
              <button @click="toggle(item)" :disabled="busyId === item.id" class="text-[11px] font-bold text-slate-600 hover:text-teal-700 disabled:opacity-40">
                {{ item.isActive ? 'Nonaktifkan' : 'Aktifkan' }}
              </button>
              <button @click="remove(item)" :disabled="busyId === item.id" class="text-[11px] font-bold text-rose-600 hover:underline disabled:opacity-40">Hapus</button>
            </div>
          </div>
          <div v-if="!group.rows.length" class="py-8 text-center text-[11px] text-slate-400">Belum ada data.</div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="showModal = false">
      <div class="bg-white rounded-2xl w-full max-w-md p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
        <h3 class="font-bold text-slate-900">{{ editingId ? 'Edit Testimoni' : 'Tambah Testimoni' }}</h3>
        <form @submit.prevent="save" class="space-y-3">
          <div class="grid grid-cols-2 gap-3">
            <label class="block">
              <span class="text-[11px] font-bold text-slate-600">Role</span>
              <select v-model="form.role" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none">
                <option value="mentor">Mentor</option>
                <option value="alumni">Alumni</option>
              </select>
            </label>
            <label class="block">
              <span class="text-[11px] font-bold text-slate-600">Rating</span>
              <select v-model.number="form.rating" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none">
                <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
              </select>
            </label>
          </div>
          <label class="block">
            <span class="text-[11px] font-bold text-slate-600">Nama</span>
            <input v-model="form.name" required type="text"
              class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400" />
          </label>
          <label class="block">
            <span class="text-[11px] font-bold text-slate-600">Headline / Jabatan</span>
            <input v-model="form.headline" type="text" placeholder="Misal: Lead Frontend Developer"
              class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400" />
          </label>
          <label class="block">
            <span class="text-[11px] font-bold text-slate-600">Testimoni</span>
            <textarea v-model="form.quote" required rows="3"
              class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400"></textarea>
          </label>
          <label class="block">
            <span class="text-[11px] font-bold text-slate-600">Slug Kelas Terkait (opsional)</span>
            <input v-model="form.classSlug" type="text" placeholder="basic-web-development"
              class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400" />
          </label>
          <label class="block">
            <span class="text-[11px] font-bold text-slate-600">URL Foto (opsional)</span>
            <input v-model="form.avatarUrl" type="text" placeholder="https://..."
              class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400" />
          </label>
          <label class="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <input v-model="form.isActive" type="checkbox" class="rounded border-slate-300 text-teal-600" />
            Tampilkan di landing page
          </label>
          <div class="flex justify-end gap-2 pt-2">
            <button type="button" @click="showModal = false" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100">Batal</button>
            <button type="submit" :disabled="saving" class="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold disabled:opacity-50">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })

interface TestimonialRow {
  id: string
  role: 'mentor' | 'alumni'
  name: string
  headline: string | null
  quote: string
  avatarUrl: string | null
  classSlug: string | null
  rating: number
  sortOrder: number
  isActive: boolean
}

const showModal = ref(false)
const saving = ref(false)
const busyId = ref('')
const editingId = ref('')
const message = ref('')

const form = reactive({
  role: 'mentor' as 'mentor' | 'alumni',
  name: '',
  headline: '',
  quote: '',
  avatarUrl: '',
  classSlug: '',
  rating: 5,
  isActive: true,
})

const { data, refresh } = await useFetch<{ testimonials: TestimonialRow[] }>('/api/admin/testimonials')
const testimonials = computed(() => data.value?.testimonials || [])
const groups = computed(() => [
  { role: 'mentor', label: 'Mentor', rows: testimonials.value.filter(item => item.role === 'mentor') },
  { role: 'alumni', label: 'Alumni', rows: testimonials.value.filter(item => item.role === 'alumni') },
])

function initials(name: string) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(part => part[0]?.toUpperCase()).join('')
}

function notify(text: string) {
  message.value = text
  setTimeout(() => { message.value = '' }, 4000)
}

function openCreate() {
  editingId.value = ''
  Object.assign(form, { role: 'mentor', name: '', headline: '', quote: '', avatarUrl: '', classSlug: '', rating: 5, isActive: true })
  showModal.value = true
}

function openEdit(item: TestimonialRow) {
  editingId.value = item.id
  Object.assign(form, {
    role: item.role,
    name: item.name,
    headline: item.headline || '',
    quote: item.quote,
    avatarUrl: item.avatarUrl || '',
    classSlug: item.classSlug || '',
    rating: item.rating,
    isActive: item.isActive,
  })
  showModal.value = true
}

async function save() {
  saving.value = true
  try {
    const payload = { ...form }
    if (editingId.value) {
      await $fetch(`/api/admin/testimonials/${editingId.value}`, { method: 'PATCH', body: payload })
    } else {
      await $fetch('/api/admin/testimonials', { method: 'POST', body: payload })
    }
    showModal.value = false
    notify('✓ Testimoni disimpan')
    await refresh()
  } catch (error: any) {
    notify(`✗ ${error?.data?.statusMessage || error?.statusMessage || 'Gagal menyimpan testimoni'}`)
  } finally {
    saving.value = false
  }
}

async function toggle(item: TestimonialRow) {
  busyId.value = item.id
  try {
    await $fetch(`/api/admin/testimonials/${item.id}`, { method: 'PATCH', body: { isActive: !item.isActive } })
    await refresh()
  } catch (error: any) {
    notify(`✗ ${error?.data?.statusMessage || error?.statusMessage || 'Gagal mengubah status'}`)
  } finally {
    busyId.value = ''
  }
}

async function remove(item: TestimonialRow) {
  if (!confirm(`Hapus testimoni ${item.name}?`)) return
  busyId.value = item.id
  try {
    await $fetch(`/api/admin/testimonials/${item.id}`, { method: 'DELETE' })
    notify('✓ Testimoni dihapus')
    await refresh()
  } catch (error: any) {
    notify(`✗ ${error?.data?.statusMessage || error?.statusMessage || 'Gagal menghapus testimoni'}`)
  } finally {
    busyId.value = ''
  }
}
</script>
