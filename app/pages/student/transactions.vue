<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-extrabold text-slate-900">Riwayat Transaksi</h1>
      <p class="text-sm text-slate-500 mt-1">Daftar pembayaran dan pembelian kelas kamu.</p>
    </div>

    <div class="bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-sm">
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <h2 class="font-bold text-slate-800 text-sm">Semua Transaksi</h2>
        <span class="text-xs text-slate-400">{{ transactions.length }} transaksi</span>
      </div>

      <div v-if="transactions.length === 0" class="flex flex-col items-center justify-center py-16 text-center px-6">
        <div class="text-5xl mb-3">💳</div>
        <h3 class="text-base font-bold text-slate-700 mb-1">Belum ada transaksi</h3>
        <p class="text-xs text-slate-400 mb-5 max-w-xs">Pembelian atau pendaftaran kelas kamu akan muncul di sini.</p>
        <NuxtLink to="/student/classes"
          class="px-6 py-2.5 rounded-full text-white text-xs font-extrabold uppercase tracking-wider transition hover:opacity-90"
          style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
          Beli / Daftar Kelas
        </NuxtLink>
      </div>

      <div v-else class="divide-y divide-slate-100">
        <div v-for="tx in transactions" :key="tx.id" class="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div class="text-xs font-mono text-slate-400">{{ tx.orderId }}</div>
            <div class="text-sm font-bold text-slate-800">{{ tx.classTitle }}</div>
            <div class="text-xs text-slate-500 capitalize">Metode: {{ tx.paymentMethod.replace('_', ' ') }}</div>
          </div>
          <div class="flex items-center gap-4">
            <div class="font-extrabold text-sm text-slate-800">
              {{ Number(tx.amount) === 0 ? 'Gratis' : 'Rp' + Number(tx.amount).toLocaleString('id-ID') }}
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold"
              :class="tx.status === 'paid' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'">
              {{ tx.status === 'paid' ? 'Lunas' : 'Menunggu Verifikasi' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'student' })

const { data } = await useFetch('/api/student/transactions')
const transactions = computed(() => data.value?.transactions || [])
</script>
