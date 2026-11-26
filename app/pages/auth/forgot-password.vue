<template>
  <div class="fixed inset-0 flex overflow-hidden bg-[#f5f9ff] items-center justify-center">
    <div class="w-full max-w-sm px-6">
      <div class="flex items-center gap-2.5 mb-8 justify-center">
        <div class="h-10 w-10 rounded-xl flex items-center justify-center text-white font-black text-base"
          style="background:linear-gradient(135deg,#14b8a6,#0ea5e9)">U</div>
        <span class="font-extrabold text-slate-900 text-lg">Uneed Academy</span>
      </div>

      <div class="mb-6 text-center">
        <h1 class="text-xl font-extrabold text-slate-900 mb-1">Lupa Password?</h1>
        <p class="text-xs text-slate-500">Masukkan emailmu dan kami akan kirimkan link reset password.</p>
      </div>

      <div v-if="sent" class="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 text-sm text-center mb-5">
        ✅ Email reset password telah dikirim. Periksa inbox kamu.
      </div>

      <form v-else @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Alamat Email</label>
          <input v-model="email" type="email" required placeholder="nama@email.com"
            class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white text-slate-800 placeholder-slate-400 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition" />
        </div>
        <button type="submit" :disabled="loading"
          class="w-full py-3 rounded-xl text-white text-sm font-bold transition hover:opacity-90 disabled:opacity-50"
          style="background:linear-gradient(135deg,#14b8a6,#0ea5e9)">
          {{ loading ? 'Mengirim...' : 'Kirim Link Reset' }}
        </button>
      </form>

      <p class="text-center text-xs text-slate-500 mt-5">
        <NuxtLink to="/auth/login" class="text-teal-600 font-bold hover:text-teal-800 transition">← Kembali ke Login</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const email = ref('')
const loading = ref(false)
const sent = ref(false)

async function handleSubmit() {
  loading.value = true
  await new Promise(r => setTimeout(r, 1000))
  sent.value = true
  loading.value = false
}
</script>
