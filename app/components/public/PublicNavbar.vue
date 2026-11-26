<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="solid
      ? 'bg-white/35 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/40 shadow-[0_8px_30px_rgba(30,58,138,0.08)]'
      : 'bg-transparent border-b border-white/15'"
  >
    <div class="max-w-7xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between gap-4">
      <!-- Brand -->
      <NuxtLink to="/" class="flex items-center gap-3 flex-shrink-0 group">
        <div
          class="h-10 w-10 rounded-full flex items-center justify-center font-black text-lg shadow-lg transition-colors"
          :class="solid ? 'bg-blue-700 text-white group-hover:bg-blue-800' : 'bg-white text-blue-700'"
        >
          U
        </div>
        <span
          class="font-extrabold text-lg sm:text-xl tracking-tight transition-colors"
          :class="solid ? 'text-slate-900' : 'text-white'"
        >
          Uneed Academy
        </span>
      </NuxtLink>

      <!-- Desktop links -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-semibold" :class="solid ? 'text-slate-600' : 'text-white/90'">
        <NuxtLink to="/" :class="solid ? 'hover:text-blue-700' : 'hover:text-cyan-200'">Beranda</NuxtLink>
        <NuxtLink to="/classes" :class="solid ? 'hover:text-blue-700' : 'hover:text-cyan-200'">Kelas</NuxtLink>
        <NuxtLink to="/#mentor" :class="solid ? 'hover:text-blue-700' : 'hover:text-cyan-200'">Mentor</NuxtLink>
        <NuxtLink to="/#faq" :class="solid ? 'hover:text-blue-700' : 'hover:text-cyan-200'">FAQ</NuxtLink>
        <NuxtLink to="/auth/login" :class="solid ? 'hover:text-blue-700' : 'hover:text-cyan-200'">Masuk</NuxtLink>
        <NuxtLink
          to="/auth/register"
          class="px-5 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition"
          :class="solid
            ? 'border-blue-700 bg-blue-700 text-white hover:bg-blue-800'
            : 'border-white/70 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-700'"
        >
          Daftar Gratis
        </NuxtLink>
      </nav>

      <!-- Mobile actions (Masuk tersedia di menu hamburger) -->
      <div class="flex md:hidden items-center gap-1.5">
        <NuxtLink
          to="/auth/register"
          class="px-3 py-1.5 rounded-full border text-[11px] font-bold transition-colors whitespace-nowrap"
          :class="solid
            ? 'border-blue-700 bg-blue-700 text-white'
            : 'border-white/70 bg-white/15 text-white'"
        >
          Daftar
        </NuxtLink>
        <button
          type="button"
          class="h-9 w-9 rounded-full flex items-center justify-center transition-colors"
          :class="solid ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/15'"
          :aria-label="menuOpen ? 'Tutup menu' : 'Buka menu'"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <UIcon :name="menuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav v-if="menuOpen" class="md:hidden bg-white backdrop-blur-md border-t border-slate-200 px-5 py-3 shadow-lg">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
          class="block py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
          @click="menuOpen = false">
          {{ link.label }}
        </NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ overlay?: boolean }>(), { overlay: false })

const scrolled = ref(false)
const menuOpen = ref(false)
const route = useRoute()

const solid = computed(() => !props.overlay || scrolled.value || menuOpen.value)

const links = [
  { label: 'Beranda', to: '/' },
  { label: 'Kelas', to: '/classes' },
  { label: 'Mentor', to: '/#mentor' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Masuk', to: '/auth/login' },
]

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

watch(() => route.fullPath, () => {
  menuOpen.value = false
})
</script>
