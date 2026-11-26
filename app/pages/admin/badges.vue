<template>
  <div class="space-y-6">
    <!-- Hero Header Banner -->
    <div class="rounded-3xl p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-blue-500/15"
      style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #06b6d4 100%);">
      <div class="flex items-center gap-4">
        <div class="h-12 w-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0">
          <UIcon name="i-heroicons-trophy" class="w-6 h-6 text-cyan-200" />
        </div>
        <div>
          <span class="text-[10px] font-bold uppercase tracking-widest text-cyan-200">Gamification Engine</span>
          <h1 class="text-xl md:text-2xl font-extrabold text-white">Badges & XP</h1>
          <p class="text-xs text-blue-100 mt-0.5">Badge otomatis dibuat sesuai ikon dan warna kelas saat kelas ditambahkan</p>
        </div>
      </div>
      <button @click="showModal = true"
        class="px-5 py-2.5 rounded-full bg-white text-blue-700 text-xs font-extrabold uppercase tracking-wider shadow-md hover:bg-cyan-50 inline-flex items-center gap-1.5 flex-shrink-0 transition">
        <UIcon name="i-heroicons-plus" class="w-4 h-4" /> Tambah Badge
      </button>
    </div>

    <div v-if="message" class="rounded-2xl border px-4 py-3 text-xs font-semibold"
      :class="message.startsWith('✓') ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'">
      {{ message }}
    </div>

    <!-- Badges Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="b in badges" :key="b.id"
        class="bg-white border border-blue-100 rounded-3xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition">
        <div class="h-14 w-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-md"
          :style="{ background: `linear-gradient(135deg, ${b.colorHex}, ${b.colorHex}cc)` }">
          <UIcon :name="resolveIcon(b.iconName)" class="w-7 h-7" />
        </div>
        <div class="min-w-0 flex-1">
          <div class="font-extrabold text-slate-800 text-sm truncate">{{ b.name }}</div>
          <div class="text-xs text-slate-500 mt-0.5 line-clamp-1">+{{ b.xpReward }} XP · {{ b.description || 'Pencapaian kelas' }}</div>
          <div class="mt-2 flex items-center gap-2">
            <span class="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full" :class="rarityClass(b.rarity)">{{ b.rarity }}</span>
            <span class="text-[10px] text-slate-400 font-semibold">{{ b.earnedCount }} diraih</span>
          </div>
        </div>
      </div>

      <div v-if="!badges.length" class="sm:col-span-2 lg:col-span-3 py-12 text-center text-xs text-slate-400 bg-white border border-blue-100 rounded-3xl">
        Belum ada badge. Tambah kelas atau badge pertama untuk memotivasi siswa.
      </div>
    </div>

    <!-- Modal Tambah Badge (No manual hex color!) -->
    <Teleport to="body">
      <div v-if="showModal" class="fixed inset-0 bg-slate-900/55 backdrop-blur-sm flex items-center justify-center z-[999] p-4" @click.self="showModal = false">
        <div class="bg-white rounded-3xl border border-blue-100 w-full max-w-md p-6 space-y-4 shadow-2xl">
          <div class="flex items-center justify-between">
            <h3 class="font-extrabold text-slate-900">Tambah Badge</h3>
            <button @click="showModal = false" class="text-slate-400 hover:text-slate-600">
              <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
            </button>
          </div>
          <form @submit.prevent="addBadge" class="space-y-3">
            <label class="block">
              <span class="text-[11px] font-bold text-slate-600">Kelas Terkait (opsional)</span>
              <select v-model="form.classId" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:bg-white">
                <option value="">Badge Umum (Otomatis ikut Rarity)</option>
                <option v-for="cls in classList" :key="cls.id" :value="cls.id">{{ cls.title }}</option>
              </select>
            </label>
            <label class="block">
              <span class="text-[11px] font-bold text-slate-600">Nama Badge</span>
              <input v-model="form.name" required type="text" placeholder="Misal: JavaScript Ninja"
                class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:bg-white" />
            </label>
            <label class="block">
              <span class="text-[11px] font-bold text-slate-600">Deskripsi</span>
              <textarea v-model="form.description" rows="2" placeholder="Deskripsi pencapaian..."
                class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:bg-white"></textarea>
            </label>
            <div class="grid grid-cols-2 gap-3">
              <label class="block">
                <span class="text-[11px] font-bold text-slate-600">Rarity</span>
                <select v-model="form.rarity" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:bg-white">
                  <option value="common">Common</option>
                  <option value="rare">Rare</option>
                  <option value="epic">Epic</option>
                  <option value="legendary">Legendary</option>
                </select>
              </label>
              <label class="block">
                <span class="text-[11px] font-bold text-slate-600">Reward XP</span>
                <input v-model="form.xpReward" type="number" min="0" step="10"
                  class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:bg-white" />
              </label>
            </div>
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" @click="showModal = false" class="px-4 py-2 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100">Batal</button>
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

interface BadgeRow {
  id: string
  name: string
  description: string | null
  iconName: string
  rarity: string
  colorHex: string
  xpReward: number
  earnedCount: number
}

const showModal = ref(false)
const saving = ref(false)
const message = ref('')
const form = reactive({ classId: '', name: '', description: '', rarity: 'rare', xpReward: 150 })

const { data, refresh } = await useFetch<{ badges: BadgeRow[] }>('/api/admin/badges')
const { data: classesData } = await useFetch<{ classes: { id: string; title: string }[] }>('/api/admin/classes')

const badges = computed(() => data.value?.badges || [])
const classList = computed(() => classesData.value?.classes || [])

function resolveIcon(iconName: string) {
  return iconName && iconName.startsWith('i-') ? iconName : 'i-heroicons-trophy'
}

function rarityClass(rarity: string) {
  return ({
    common: 'bg-slate-100 text-slate-600',
    rare: 'bg-blue-50 text-blue-700',
    epic: 'bg-purple-50 text-purple-700',
    legendary: 'bg-amber-50 text-amber-700',
  } as Record<string, string>)[rarity] || 'bg-slate-100 text-slate-600'
}

function notify(text: string) {
  message.value = text
  setTimeout(() => { message.value = '' }, 4000)
}

async function addBadge() {
  saving.value = true
  try {
    await $fetch('/api/admin/badges', {
      method: 'POST',
      body: {
        classId: form.classId || undefined,
        name: form.name,
        description: form.description,
        rarity: form.rarity,
        xpReward: Number(form.xpReward) || 100,
      },
    })
    showModal.value = false
    Object.assign(form, { classId: '', name: '', description: '', rarity: 'rare', xpReward: 150 })
    notify('✓ Badge ditambahkan')
    await refresh()
  } catch (error: any) {
    notify(`✗ ${error?.data?.statusMessage || error?.statusMessage || 'Gagal menambah badge'}`)
  } finally {
    saving.value = false
  }
}
</script>
