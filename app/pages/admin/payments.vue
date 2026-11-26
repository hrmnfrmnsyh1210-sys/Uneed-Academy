<template>
  <div class="space-y-6">
    <!-- Hero Header Banner -->
    <div class="rounded-3xl p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-blue-500/15"
      style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #06b6d4 100%);">
      <div class="flex items-center gap-4">
        <div class="h-12 w-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0">
          <UIcon name="i-heroicons-banknotes" class="w-6 h-6 text-cyan-200" />
        </div>
        <div>
          <span class="text-[10px] font-bold uppercase tracking-widest text-cyan-200">Keuangan & Akses Kelas</span>
          <h1 class="text-xl md:text-2xl font-extrabold text-white">Payment Verification</h1>
          <p class="text-xs text-blue-100 mt-0.5">Verifikasi transaksi QRIS dan transfer bank manual dari TiDB Cloud</p>
        </div>
      </div>
      <div class="flex items-center gap-2 text-xs font-bold">
        <span class="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25">{{ transactions.length }} Transaksi</span>
      </div>
    </div>

    <div class="bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-sm">
      <div v-if="transactions.length === 0" class="p-12 text-center text-xs text-slate-400">
        Belum ada transaksi masuk.
      </div>
      <table v-else class="w-full text-left text-sm">
        <thead class="text-xs uppercase text-slate-400 border-b border-slate-100 bg-slate-50/70">
          <tr>
            <th class="py-3.5 px-5">Invoice</th>
            <th class="py-3.5 px-5">Siswa</th>
            <th class="py-3.5 px-5">Kelas</th>
            <th class="py-3.5 px-5">Nominal</th>
            <th class="py-3.5 px-5">Status / Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 text-slate-700">
          <tr v-for="p in transactions" :key="p.id" class="hover:bg-blue-50/30 transition">
            <td class="py-3.5 px-5 font-mono text-xs">{{ p.orderId }}</td>
            <td class="py-3.5 px-5">
              <div class="font-bold text-slate-800">{{ p.studentName }}</div>
              <div class="text-[11px] text-slate-400">{{ p.studentEmail }}</div>
            </td>
            <td class="py-3.5 px-5">{{ p.classTitle }}</td>
            <td class="py-3.5 px-5 font-bold">
              {{ Number(p.amount) === 0 ? 'Gratis' : 'Rp ' + Number(p.amount).toLocaleString('id-ID') }}
            </td>
            <td class="py-3.5 px-5">
              <button v-if="p.status !== 'paid'" @click="verifyPayment(p.id)"
                class="px-4 py-1.5 rounded-full text-white text-xs font-bold shadow-sm hover:opacity-90 transition"
                style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
                Verifikasi Lunas
              </button>
              <span v-else class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700">Lunas</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })

const { data, refresh } = await useFetch('/api/admin/overview')
const transactions = computed(() => data.value?.transactions || [])

async function verifyPayment(transactionId: string) {
  await $fetch('/api/admin/payments/verify', {
    method: 'POST',
    body: { transactionId },
  })
  await refresh()
}
</script>
