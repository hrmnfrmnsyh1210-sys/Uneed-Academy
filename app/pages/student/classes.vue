<template>
  <div class="space-y-6">
    <!-- Header & Filter -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <div class="text-xs text-slate-400 font-semibold">Menu Kelas</div>
        <h1 class="text-2xl font-extrabold text-slate-900 mt-0.5">Katalog & Pembelian Kelas</h1>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <div class="relative">
          <UIcon name="i-heroicons-magnifying-glass" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            v-model="search"
            type="text"
            placeholder="Cari kelas..."
            class="pl-10 pr-4 py-2 rounded-xl border border-blue-100 bg-white text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-blue-400 w-52"
          />
        </div>
        <select v-model="levelFilter" class="px-3.5 py-2 rounded-xl border border-blue-100 bg-white text-xs font-semibold text-slate-700 outline-none focus:border-blue-400">
          <option value="ALL">Semua Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
        </select>
      </div>
    </div>

    <!-- Folder Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <div v-for="cls in filteredClasses" :key="cls.id"
        class="bg-white/95 rounded-3xl border border-blue-100 p-5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10 transition duration-200 flex flex-col justify-between">

        <div>
          <div class="flex items-start justify-between gap-3 mb-4">
            <StudentFolderIcon size="lg" :icon="styleOf(cls.slug).icon" :back-color="styleOf(cls.slug).backColor" :front-gradient="styleOf(cls.slug).frontGradient" />
            <div class="text-right">
              <span class="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase"
                :class="cls.difficulty === 'beginner' ? 'bg-cyan-50 text-cyan-700' : 'bg-blue-50 text-blue-700'">
                {{ cls.difficulty }}
              </span>
              <div class="mt-2 font-extrabold text-sm" :class="cls.price === 0 ? 'text-emerald-600' : 'text-blue-700'">
                {{ cls.price === 0 ? 'Gratis' : formatRp(cls.price) }}
              </div>
            </div>
          </div>

          <div class="text-[10px] text-slate-400 mb-0.5">{{ cls.totalTasks }} Quest · {{ cls.estimatedDurationHours }} Jam</div>
          <h3 class="font-extrabold text-slate-800 text-base mb-1.5">{{ cls.title }}</h3>
          <p class="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">{{ cls.shortDescription }}</p>
        </div>

        <div class="border-t border-slate-100 pt-3 flex items-center justify-between">
          <div>
            <div class="text-[10px] text-slate-400 mb-1">Status</div>
            <span class="text-xs font-bold"
              :class="cls.enrollmentStatus === 'active' ? 'text-emerald-600' : cls.enrollmentStatus === 'pending' ? 'text-amber-600' : 'text-slate-500'">
              {{ cls.enrollmentStatus === 'active' ? 'Terdaftar' : cls.enrollmentStatus === 'pending' ? 'Menunggu Bayar' : 'Belum Dibeli' }}
            </span>
          </div>

          <NuxtLink v-if="cls.enrollmentStatus === 'active' || cls.enrollmentStatus === 'completed'"
            :to="`/student/classroom/${cls.slug}`"
            class="px-4 py-2 rounded-full text-[11px] font-bold text-white shadow-sm bg-emerald-500 hover:bg-emerald-600 transition">
            Buka Kelas
          </NuxtLink>
          <NuxtLink v-else-if="cls.enrollmentStatus === 'pending'"
            to="/student/transactions"
            class="px-4 py-2 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700">
            Lihat Tagihan
          </NuxtLink>
          <button v-else @click="openCheckout(cls)"
            class="px-4 py-2 rounded-full text-[11px] font-bold text-white shadow-sm hover:opacity-90 transition"
            style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
            {{ cls.price === 0 ? 'Daftar Gratis' : 'Beli Kelas' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Checkout Modal (Teleported to body so backdrop covers entire screen cleanly) -->
    <Teleport to="body">
      <div v-if="checkoutClass" class="fixed inset-0 bg-slate-900/55 backdrop-blur-sm flex items-center justify-center z-[999] p-4">
      <div class="bg-white rounded-3xl border border-blue-100 max-w-md w-full p-6 space-y-5 shadow-2xl">
        <div class="flex items-start justify-between">
          <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-blue-600">Checkout Kelas</span>
            <h3 class="text-lg font-extrabold text-slate-900 mt-0.5">{{ checkoutClass.title }}</h3>
          </div>
          <button @click="checkoutClass = null" class="text-slate-400 hover:text-slate-600">
            <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
          </button>
        </div>

        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-600">Total Pembayaran</span>
          <span class="text-lg font-black text-blue-700">
            {{ checkoutClass.price === 0 ? 'Gratis (Rp 0)' : formatRp(checkoutClass.price) }}
          </span>
        </div>

        <div v-if="checkoutClass.price > 0" class="space-y-2">
          <label class="block text-xs font-bold text-slate-700">Pilih Metode Pembayaran</label>
          <label class="flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition"
            :class="paymentMethod === 'qris' ? 'border-blue-500 bg-blue-50/60' : 'border-slate-200'">
            <input type="radio" v-model="paymentMethod" value="qris" class="text-blue-600" />
            <div>
              <div class="text-xs font-bold text-slate-800">QRIS / Virtual Account Instan</div>
              <div class="text-[11px] text-slate-500">Akses kelas langsung terbuka otomatis</div>
            </div>
          </label>
          <label class="flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition"
            :class="paymentMethod === 'manual_transfer' ? 'border-blue-500 bg-blue-50/60' : 'border-slate-200'">
            <input type="radio" v-model="paymentMethod" value="manual_transfer" class="text-blue-600" />
            <div>
              <div class="text-xs font-bold text-slate-800">Transfer Bank Manual</div>
              <div class="text-[11px] text-slate-500">Diverifikasi oleh Admin (BCA / Mandiri)</div>
            </div>
          </label>
        </div>

        <div v-if="checkoutMsg" class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
          {{ checkoutMsg }}
        </div>

        <div class="flex justify-end gap-2 pt-1">
          <button @click="checkoutClass = null" class="px-4 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100">Batal</button>
          <button @click="confirmCheckout" :disabled="processingCheckout"
            class="px-6 py-2.5 rounded-full text-white text-xs font-extrabold uppercase tracking-wider shadow-md disabled:opacity-50"
            style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
            {{ processingCheckout ? 'Memproses...' : checkoutClass.price === 0 ? 'Daftar Sekarang' : 'Bayar Sekarang' }}
          </button>
        </div>
      </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'student' })

const search = ref('')
const levelFilter = ref('ALL')
const { data, refresh } = await useFetch('/api/student/classes')
const catalog = computed(() => data.value?.catalog || [])

const checkoutClass = ref<any>(null)
const paymentMethod = ref<'qris' | 'manual_transfer'>('qris')
const processingCheckout = ref(false)
const checkoutMsg = ref('')

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

function formatRp(val: number) {
  return 'Rp' + val.toLocaleString('id-ID')
}

const filteredClasses = computed(() => {
  return catalog.value.filter((c: any) => {
    const matchLevel = levelFilter.value === 'ALL' || c.difficulty === levelFilter.value
    const matchSearch = !search.value.trim() || c.title.toLowerCase().includes(search.value.toLowerCase()) || (c.shortDescription || '').toLowerCase().includes(search.value.toLowerCase())
    return matchLevel && matchSearch
  })
})

function openCheckout(cls: any) {
  checkoutClass.value = cls
  checkoutMsg.value = ''
}

async function confirmCheckout() {
  if (!checkoutClass.value) return
  processingCheckout.value = true
  checkoutMsg.value = ''
  try {
    const res: any = await $fetch('/api/enrollments/checkout', {
      method: 'POST',
      body: {
        classId: checkoutClass.value.id,
        paymentMethod: checkoutClass.value.price === 0 ? 'free' : paymentMethod.value,
      },
    })
    checkoutMsg.value = res.message
    await refresh()
    setTimeout(() => {
      const slug = checkoutClass.value?.slug
      const status = res.status
      checkoutClass.value = null
      if (status === 'active' && slug) {
        navigateTo(`/student/classroom/${slug}`)
      }
    }, 900)
  } finally {
    processingCheckout.value = false
  }
}
</script>
