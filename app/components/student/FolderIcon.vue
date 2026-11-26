<template>
  <!-- 3D Frosted Folder Icon with matching topic icon -->
  <div class="relative flex-shrink-0 select-none" :class="size === 'lg' ? 'w-20 h-[72px]' : 'w-11 h-10'">
    <!-- Folder Back Tab -->
    <div
      class="absolute top-0 left-0 rounded-t-lg shadow-sm"
      :class="size === 'lg' ? 'w-9 h-3.5 rounded-tl-xl' : 'w-5 h-2 rounded-tl-md'"
      :style="`background: ${backColor}`"
    ></div>
    <!-- Folder Back Body -->
    <div
      class="absolute inset-x-0 bottom-0 shadow-inner"
      :class="size === 'lg' ? 'top-2 rounded-2xl rounded-tl-none' : 'top-1 rounded-xl rounded-tl-none'"
      :style="`background: ${backColor}`"
    ></div>
    <!-- White Paper Peek inside folder -->
    <div
      class="absolute bg-white/85 rounded-md shadow-sm"
      :class="size === 'lg' ? 'left-2.5 right-2.5 top-3 h-4' : 'left-1.5 right-1.5 top-1.5 h-2'"
    ></div>
    <!-- Folder Front Flap with Glossy Highlight + Centered Topic Icon -->
    <div
      class="absolute inset-x-0 bottom-0 border-t border-white/60 shadow-md flex items-center justify-center"
      :class="size === 'lg' ? 'top-4 rounded-2xl' : 'top-2 rounded-xl'"
      :style="`background: ${frontGradient}`"
    >
      <div class="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/25 via-transparent to-black/5"></div>
      <UIcon
        v-if="icon"
        :name="icon"
        class="relative z-10 text-white/95 drop-shadow-sm"
        :class="size === 'lg' ? 'w-7 h-7' : 'w-4 h-4'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  backColor: string
  frontGradient: string
  icon?: string
  size?: 'sm' | 'lg'
}>()
</script>
