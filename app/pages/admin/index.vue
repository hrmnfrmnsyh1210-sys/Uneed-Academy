<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-black text-white">Console Overview & Analytics</h1>
        <p class="text-xs text-slate-400 mt-1">Pemantauan real-time peserta, pendapatan, dan efektivitas kurikulum</p>
      </div>
    </div>

    <!-- Analytics Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="p-6 rounded-2xl border border-slate-800 bg-[#0B1120]">
        <div class="text-xs text-slate-400 font-semibold uppercase">Total Pendapatan (IDR)</div>
        <div class="text-2xl font-black text-emerald-400 mt-2">Rp 4.485.000</div>
        <div class="text-[11px] text-emerald-500 mt-1 font-medium">+15% bulan ini</div>
      </div>
      <div class="p-6 rounded-2xl border border-slate-800 bg-[#0B1120]">
        <div class="text-xs text-slate-400 font-semibold uppercase">Total Siswa Aktif</div>
        <div class="text-2xl font-black text-white mt-2">128</div>
        <div class="text-[11px] text-indigo-400 mt-1 font-medium">100% data riil TiDB</div>
      </div>
      <div class="p-6 rounded-2xl border border-slate-800 bg-[#0B1120]">
        <div class="text-xs text-slate-400 font-semibold uppercase">Tugas Menunggu Review</div>
        <div class="text-2xl font-black text-amber-400 mt-2">7</div>
        <div class="text-[11px] text-slate-400 mt-1 font-medium">Perlu tindakan mentor</div>
      </div>
      <div class="p-6 rounded-2xl border border-slate-800 bg-[#0B1120]">
        <div class="text-xs text-slate-400 font-semibold uppercase">Sertifikat Diterbitkan</div>
        <div class="text-2xl font-black text-sky-400 mt-2">42</div>
        <div class="text-[11px] text-sky-400 mt-1 font-medium">Verifiable QR enabled</div>
      </div>
    </div>

    <!-- Quick Class Management Table -->
    <div class="p-6 rounded-2xl border border-slate-800 bg-[#0B1120]">
      <h3 class="text-base font-bold text-white mb-4">Kelas Aktif & Kurikulum</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="text-xs uppercase text-slate-400 border-b border-slate-800">
            <tr>
              <th class="py-3 px-4">Nama Kelas</th>
              <th class="py-3 px-4">Level</th>
              <th class="py-3 px-4">Harga</th>
              <th class="py-3 px-4">Jumlah Quest</th>
              <th class="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800 text-slate-300">
            <tr>
              <td class="py-3 px-4 font-semibold text-white">Basic Web Development</td>
              <td class="py-3 px-4">Beginner</td>
              <td class="py-3 px-4 text-emerald-400">Gratis</td>
              <td class="py-3 px-4">8 Tasks</td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded text-xs bg-emerald-500/20 text-emerald-400">Published</span></td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-semibold text-white">Vibe Coding with AI</td>
              <td class="py-3 px-4">Beginner</td>
              <td class="py-3 px-4">Rp 149.000</td>
              <td class="py-3 px-4">10 Tasks</td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded text-xs bg-emerald-500/20 text-emerald-400">Published</span></td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-semibold text-white">Fullstack Web Development</td>
              <td class="py-3 px-4">Intermediate</td>
              <td class="py-3 px-4">Rp 299.000</td>
              <td class="py-3 px-4">15 Tasks</td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded text-xs bg-emerald-500/20 text-emerald-400">Published</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })
</script>
