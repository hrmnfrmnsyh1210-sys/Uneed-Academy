<template>
  <div class="space-y-6">
    <!-- Hero Header Banner -->
    <div class="rounded-3xl p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-blue-500/15"
      style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #06b6d4 100%);">
      <div class="flex items-center gap-4">
        <div class="h-12 w-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0">
          <UIcon name="i-heroicons-document-check" class="w-6 h-6 text-cyan-200" />
        </div>
        <div>
          <span class="text-[10px] font-bold uppercase tracking-widest text-cyan-200">Verifiable QR Credentials</span>
          <h1 class="text-xl md:text-2xl font-extrabold text-white">Certificates</h1>
          <p class="text-xs text-blue-100 mt-0.5">Daftar sertifikat kelulusan resmi yang diterbitkan</p>
        </div>
      </div>
      <div class="px-4 py-2 rounded-full bg-white/15 border border-white/25 text-xs font-extrabold text-white">
        {{ certificates.length }} Sertifikat
      </div>
    </div>

    <div class="bg-white border border-blue-100 rounded-3xl shadow-sm overflow-hidden">
      <div class="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <div class="text-xs font-bold text-slate-700">{{ certificates.length }} sertifikat</div>
        <input v-model="search" type="text" placeholder="Cari nomor atau penerima..."
          class="w-full sm:w-64 pl-3.5 pr-4 py-2 rounded-xl border border-blue-100 text-xs outline-none focus:border-blue-500" />
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm min-w-[720px]">
          <thead class="text-[10px] uppercase text-slate-400 border-b border-slate-100 bg-slate-50/70">
            <tr>
              <th class="py-3 px-5">Nomor Sertifikat</th>
              <th class="py-3 px-5">Penerima</th>
              <th class="py-3 px-5">Kelas</th>
              <th class="py-3 px-5">Nilai</th>
              <th class="py-3 px-5">Diterbitkan</th>
              <th class="py-3 px-5">Verifikasi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr v-for="cert in filteredCertificates" :key="cert.id" class="hover:bg-blue-50/30 transition">
              <td class="py-3.5 px-5 font-mono text-[11px] font-bold text-blue-700">{{ cert.certificateNumber }}</td>
              <td class="py-3.5 px-5">
                <div class="font-semibold">{{ cert.recipientName }}</div>
                <div class="text-[11px] text-slate-400">{{ cert.recipientEmail }}</div>
              </td>
              <td class="py-3.5 px-5">{{ cert.className }}</td>
              <td class="py-3.5 px-5 font-bold">{{ cert.finalScore }}</td>
              <td class="py-3.5 px-5 text-xs">{{ formatDate(cert.issuedAt) }}</td>
              <td class="py-3.5 px-5">
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-bold"
                    :class="cert.status === 'valid' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'">
                    {{ cert.status === 'valid' ? 'Valid' : 'Dicabut' }}
                  </span>
                  <NuxtLink :to="`/verify/${cert.certificateNumber}`" class="text-[11px] font-bold text-blue-600 hover:underline whitespace-nowrap">
                    Lihat →
                  </NuxtLink>
                </div>
              </td>
            </tr>
            <tr v-if="!filteredCertificates.length">
              <td colspan="6" class="py-10 text-center text-xs text-slate-400">Belum ada sertifikat diterbitkan.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })

interface CertificateRow {
  id: string
  certificateNumber: string
  status: string
  finalScore: number
  issuedAt: string
  recipientName: string
  recipientEmail: string
  className: string
}

const search = ref('')
const { data } = await useFetch<{ certificates: CertificateRow[] }>('/api/admin/certificates')
const certificates = computed(() => data.value?.certificates || [])
const filteredCertificates = computed(() => {
  const keyword = search.value.trim().toLowerCase()
  if (!keyword) return certificates.value
  return certificates.value.filter(cert =>
    cert.certificateNumber.toLowerCase().includes(keyword) || cert.recipientName.toLowerCase().includes(keyword))
})

function formatDate(value: string) {
  if (!value) return '—'
  return new Date(value).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}
</script>
