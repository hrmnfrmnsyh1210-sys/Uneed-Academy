<template>
  <div class="space-y-7">
    <!-- Hero Welcome Banner -->
    <div class="rounded-3xl p-6 md:p-7 text-white relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg shadow-blue-500/15"
      style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #06b6d4 100%);">
      <div class="flex items-center gap-4 relative z-10">
        <div class="h-14 w-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center flex-shrink-0">
          <UIcon name="i-heroicons-shield-check" class="w-8 h-8 text-cyan-200" />
        </div>
        <div>
          <span class="text-[10px] font-bold uppercase tracking-widest text-cyan-200">Uneed Console · Super Admin</span>
          <h1 class="text-2xl font-extrabold text-white mt-0.5">Console Overview & Analytics</h1>
          <p class="text-xs text-blue-100 mt-1">Pemantauan real-time peserta, pendapatan, kelas, dan transaksi dari TiDB Cloud.</p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-3 relative z-10 flex-shrink-0">
        <NuxtLink to="/admin/payments"
          class="px-4 py-2.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold hover:bg-white/25 transition">
          Verifikasi Pembayaran
        </NuxtLink>
        <NuxtLink to="/admin/classes"
          class="px-5 py-2.5 rounded-full bg-white text-blue-700 text-xs font-extrabold uppercase tracking-wider shadow-md hover:bg-cyan-50 transition">
          + Kelola Kelas
        </NuxtLink>
      </div>
    </div>

    <!-- Real Analytics Cards with Icons -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="p-5 rounded-3xl border border-blue-100 bg-white shadow-sm flex items-center gap-4">
        <div class="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
          <UIcon name="i-heroicons-banknotes" class="w-6 h-6" />
        </div>
        <div>
          <div class="text-[11px] text-slate-400 font-bold uppercase">Total Pendapatan</div>
          <div class="text-xl font-black text-emerald-600 mt-0.5">Rp {{ stats.totalRevenue.toLocaleString('id-ID') }}</div>
        </div>
      </div>

      <div class="p-5 rounded-3xl border border-blue-100 bg-white shadow-sm flex items-center gap-4">
        <div class="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
          <UIcon name="i-heroicons-users" class="w-6 h-6" />
        </div>
        <div>
          <div class="text-[11px] text-slate-400 font-bold uppercase">Total Siswa</div>
          <div class="text-xl font-black text-blue-700 mt-0.5">{{ stats.totalStudents }}</div>
        </div>
      </div>

      <div class="p-5 rounded-3xl border border-blue-100 bg-white shadow-sm flex items-center gap-4">
        <div class="h-12 w-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0">
          <UIcon name="i-heroicons-clipboard-document-check" class="w-6 h-6" />
        </div>
        <div>
          <div class="text-[11px] text-slate-400 font-bold uppercase">Menunggu Review</div>
          <div class="text-xl font-black text-amber-500 mt-0.5">{{ stats.pendingReviews }}</div>
        </div>
      </div>

      <div class="p-5 rounded-3xl border border-blue-100 bg-white shadow-sm flex items-center gap-4">
        <div class="h-12 w-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0">
          <UIcon name="i-heroicons-document-check" class="w-6 h-6" />
        </div>
        <div>
          <div class="text-[11px] text-slate-400 font-bold uppercase">Sertifikat Terbit</div>
          <div class="text-xl font-black text-cyan-600 mt-0.5">{{ stats.totalCertificates }}</div>
        </div>
      </div>
    </div>

    <!-- Bottom 2-Column Section: 3D Folder Classes + Recent Transactions -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Classes Folder Grid (7 cols) -->
      <div class="lg:col-span-7 bg-white rounded-3xl border border-blue-100 p-6 shadow-sm space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-base font-extrabold text-slate-800">Kelas Aktif & Kurikulum</h3>
            <p class="text-[11px] text-slate-400">Ringkasan kelas yang tersimpan di TiDB Cloud</p>
          </div>
          <NuxtLink to="/admin/classes" class="text-xs font-bold text-blue-600 hover:underline">Lihat semua →</NuxtLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <NuxtLink v-for="c in classes" :key="c.id" to="/admin/classes"
            class="p-4 rounded-2xl border border-blue-100/80 bg-slate-50/50 hover:bg-blue-50/40 transition flex items-center gap-3.5">
            <StudentFolderIcon size="sm" :icon="styleOf(c.title).icon" :back-color="styleOf(c.title).backColor" :front-gradient="styleOf(c.title).frontGradient" />
            <div class="min-w-0 flex-1">
              <div class="text-xs font-extrabold text-slate-800 truncate">{{ c.title }}</div>
              <div class="text-[11px] text-slate-500 capitalize mt-0.5">
                {{ c.difficulty }} · {{ c.price === 0 ? 'Gratis' : 'Rp ' + c.price.toLocaleString('id-ID') }}
              </div>
            </div>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 capitalize flex-shrink-0">
              {{ c.status }}
            </span>
          </NuxtLink>
        </div>
      </div>

      <!-- Recent Transactions (5 cols) -->
      <div class="lg:col-span-5 bg-white rounded-3xl border border-blue-100 p-6 shadow-sm space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-base font-extrabold text-slate-800">Transaksi Terbaru</h3>
            <p class="text-[11px] text-slate-400">Pembelian & pendaftaran kelas</p>
          </div>
          <NuxtLink to="/admin/payments" class="text-xs font-bold text-blue-600 hover:underline">Kelola →</NuxtLink>
        </div>

        <div v-if="transactions.length === 0" class="py-10 text-center text-xs text-slate-400">
          Belum ada transaksi masuk.
        </div>

        <div v-else class="space-y-3">
          <div v-for="tx in transactions.slice(0, 5)" :key="tx.id"
            class="p-3.5 rounded-2xl border border-slate-100 bg-slate-50/60 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <div class="text-xs font-bold text-slate-800 truncate">{{ tx.studentName }}</div>
              <div class="text-[11px] text-slate-500 truncate">{{ tx.classTitle }}</div>
            </div>
            <div class="text-right flex-shrink-0">
              <div class="text-xs font-extrabold text-slate-800">
                {{ Number(tx.amount) === 0 ? 'Gratis' : 'Rp ' + Number(tx.amount).toLocaleString('id-ID') }}
              </div>
              <span class="text-[10px] font-bold" :class="tx.status === 'paid' ? 'text-emerald-600' : 'text-amber-600'">
                {{ tx.status === 'paid' ? 'Lunas' : 'Menunggu' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })

const { data } = await useFetch('/api/admin/overview')
const stats = computed(() => data.value?.stats || { totalRevenue: 0, totalStudents: 0, pendingReviews: 0, totalCertificates: 0 })
const classes = computed(() => data.value?.classes || [])
const transactions = computed(() => data.value?.transactions || [])

function styleOf(title: string) {
  const t = title.toLowerCase()
  if (t.includes('basic')) return { icon: 'i-heroicons-code-bracket', backColor: '#db2777', frontGradient: 'linear-gradient(135deg,#f472b6,#ec4899)' }
  if (t.includes('vibe') || t.includes('ai')) return { icon: 'i-heroicons-cpu-chip', backColor: '#059669', frontGradient: 'linear-gradient(135deg,#34d399,#10b981)' }
  if (t.includes('fullstack')) return { icon: 'i-heroicons-server-stack', backColor: '#0284c7', frontGradient: 'linear-gradient(135deg,#38bdf8,#2563eb)' }
  if (t.includes('database')) return { icon: 'i-heroicons-circle-stack', backColor: '#d97706', frontGradient: 'linear-gradient(135deg,#fbbf24,#f59e0b)' }
  if (t.includes('ui') || t.includes('ux')) return { icon: 'i-heroicons-paint-brush', backColor: '#e11d48', frontGradient: 'linear-gradient(135deg,#fb7185,#f43f5e)' }
  return { icon: 'i-heroicons-bolt', backColor: '#7c3aed', frontGradient: 'linear-gradient(135deg,#a78bfa,#6366f1)' }
}
</script>
