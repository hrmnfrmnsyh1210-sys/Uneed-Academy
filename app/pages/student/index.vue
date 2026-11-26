<template>
  <div class="space-y-7">
    <!-- Top Header + View Controls -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <div class="text-xs text-slate-400 font-semibold">Dashboard</div>
        <h1 class="text-2xl font-extrabold text-slate-800 tracking-tight mt-0.5">Classes</h1>
      </div>

      <div class="flex items-center gap-3">
        <div class="flex items-center bg-white border border-blue-100 rounded-xl p-1 shadow-sm">
          <button @click="viewMode = 'grid'" class="p-1.5 rounded-lg transition"
            :class="viewMode === 'grid' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'">
            <UIcon name="i-heroicons-squares-2x2" class="w-4 h-4" />
          </button>
          <button @click="viewMode = 'list'" class="p-1.5 rounded-lg transition"
            :class="viewMode === 'list' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'">
            <UIcon name="i-heroicons-bars-3" class="w-4 h-4" />
          </button>
        </div>
        <NuxtLink to="/student/classes"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-500/20 hover:opacity-90 transition"
          style="background: linear-gradient(135deg, #1e3a8a, #2563eb);">
          <UIcon name="i-heroicons-shopping-bag" class="w-4 h-4" />
          Katalog & Beli Kelas
        </NuxtLink>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="pending" class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div v-for="i in 2" :key="i" class="h-44 rounded-3xl bg-white/70 border border-blue-100 animate-pulse"></div>
    </div>

    <!-- Enrolled Classes (Empty State for new users) -->
    <div v-else>
      <div v-if="enrolledClasses.length === 0"
        class="bg-white/95 rounded-3xl border border-blue-100 p-8 text-center shadow-sm space-y-3">
        <div class="mx-auto w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
          <UIcon name="i-heroicons-academic-cap" class="w-8 h-8" />
        </div>
        <h2 class="text-lg font-extrabold text-slate-800">Belum Ada Kelas Aktif</h2>
        <p class="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
          Kamu belum mendaftar atau membeli kelas. Pilih kelas gratis <strong>Basic Web Development</strong> atau beli kelas premium di katalog di bawah untuk mulai mengerjakan quest.
        </p>
        <div class="pt-2">
          <NuxtLink to="/student/classes"
            class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:opacity-90 transition"
            style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
            Jelajahi Katalog Kelas
          </NuxtLink>
        </div>
      </div>

      <!-- Active Enrolled Classes -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <NuxtLink v-for="cls in enrolledClasses" :key="cls.id" :to="`/student/classroom/${cls.slug}`"
          class="block bg-white/90 backdrop-blur rounded-3xl border border-blue-100/80 p-6 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition group">
          <div class="flex gap-5 items-start">
            <StudentFolderIcon size="lg" :icon="styleOf(cls.slug).icon" :back-color="styleOf(cls.slug).backColor" :front-gradient="styleOf(cls.slug).frontGradient" />
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] text-slate-400 font-medium">{{ cls.totalTasks }} Quest · {{ cls.estimatedDurationHours }} Jam</span>
                <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">Aktif</span>
              </div>
              <h3 class="font-extrabold text-slate-800 text-base group-hover:text-blue-700 transition">{{ cls.title }}</h3>
              <p class="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">{{ cls.shortDescription }}</p>
            </div>
          </div>

          <div class="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div>
              <div class="text-[10px] font-bold text-slate-400 mb-1.5">Class Progress</div>
              <div class="flex items-center">
                <span class="h-6 w-6 rounded-full border-2 border-emerald-400 bg-emerald-50 text-emerald-700 text-[10px] font-bold flex items-center justify-center">{{ cls.done }}</span>
                <span class="w-5 h-0.5 bg-emerald-300"></span>
                <span class="h-6 w-6 rounded-full border-2 border-amber-400 bg-amber-50 text-amber-700 text-[10px] font-bold flex items-center justify-center">{{ cls.review }}</span>
                <span class="w-5 h-0.5 bg-slate-200"></span>
                <span class="h-6 w-6 rounded-full border-2 border-slate-300 bg-slate-50 text-slate-500 text-[10px] font-bold flex items-center justify-center">{{ cls.locked }}</span>
              </div>
            </div>
            <span class="px-4 py-2 rounded-full text-[11px] font-bold text-white shadow-sm"
              style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
              Lanjutkan Belajar →
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- All Classes Catalog -->
    <div>
      <h2 class="text-base font-extrabold text-slate-800 mb-4">Katalog Semua Kelas</h2>
      <div :class="viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'">
        <div v-for="cls in catalog" :key="cls.id"
          class="bg-white/95 rounded-2xl border border-blue-100/90 p-5 hover:shadow-md transition duration-200 flex flex-col justify-between gap-4">
          <div class="flex items-center gap-3.5">
            <StudentFolderIcon size="sm" :icon="styleOf(cls.slug).icon" :back-color="styleOf(cls.slug).backColor" :front-gradient="styleOf(cls.slug).frontGradient" />
            <div class="min-w-0 flex-1">
              <div class="text-[10px] text-slate-400">{{ cls.totalTasks }} Quest · {{ cls.estimatedDurationHours }} Jam</div>
              <div class="text-sm font-bold text-slate-800 truncate">{{ cls.title }}</div>
            </div>
            <span class="text-xs font-extrabold" :class="cls.price === 0 ? 'text-emerald-600' : 'text-blue-700'">
              {{ cls.price === 0 ? 'Gratis' : formatRp(cls.price) }}
            </span>
          </div>

          <div class="border-t border-slate-100 pt-3 flex items-center justify-between gap-2">
            <span class="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
              {{ cls.difficulty }}
            </span>

            <NuxtLink v-if="cls.enrollmentStatus === 'active' || cls.enrollmentStatus === 'completed'"
              :to="`/student/classroom/${cls.slug}`"
              class="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold hover:bg-emerald-100 transition">
              Buka Kelas
            </NuxtLink>
            <NuxtLink v-else-if="cls.enrollmentStatus === 'pending'"
              to="/student/transactions"
              class="px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-700 text-[11px] font-bold">
              Menunggu Verifikasi
            </NuxtLink>
            <button v-else @click="openCheckout(cls)"
              class="px-4 py-1.5 rounded-full text-white text-[11px] font-bold shadow-sm hover:opacity-90 transition"
              style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
              {{ cls.price === 0 ? 'Daftar Gratis' : 'Beli Kelas' }}
            </button>
          </div>
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

const viewMode = ref<'grid' | 'list'>('grid')
const { data, pending, refresh } = await useFetch('/api/student/classes')

const enrolledClasses = computed(() => data.value?.enrolledClasses || [])
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

function openCheckout(cls: any) {
  checkoutClass.value = cls
  checkoutMsg.value = ''
  paymentMethod.value = cls.price === 0 ? 'qris' : 'qris'
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
