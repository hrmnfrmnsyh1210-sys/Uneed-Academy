<template>
  <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 font-sans transition-colors duration-200">
    <AppNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '~/components/common/AppNavbar.vue'
import AppFooter from '~/components/common/AppFooter.vue'
</script>
