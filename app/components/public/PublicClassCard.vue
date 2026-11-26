<template>
  <NuxtLink :to="`/classes/${item.slug}`"
    class="group bg-white border border-blue-100 rounded-3xl p-5 hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-300 transition duration-200 flex flex-col justify-between h-full">
    <div>
      <div class="flex items-start justify-between gap-3 mb-4">
        <StudentFolderIcon size="lg" :icon="item.icon" :back-color="item.backColor" :front-gradient="item.frontGradient" />
        <span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 uppercase tracking-wide">
          {{ levelLabel }}
        </span>
      </div>
      <h3 class="font-extrabold text-slate-800 text-base mb-1 leading-snug group-hover:text-blue-700 transition-colors">
        {{ item.title }}
      </h3>
      <p class="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">{{ item.shortDescription }}</p>
    </div>

    <div>
      <div class="flex items-center gap-3 text-[10px] text-slate-400 mb-3">
        <span class="flex items-center gap-1">
          <UIcon name="i-heroicons-clipboard-document-list" class="w-3.5 h-3.5" /> {{ item.totalTasks }} Quest
        </span>
        <span class="flex items-center gap-1">
          <UIcon name="i-heroicons-clock" class="w-3.5 h-3.5" /> {{ item.estimatedDurationHours }} Jam
        </span>
        <span v-if="item.totalXp" class="flex items-center gap-1">
          <UIcon name="i-heroicons-bolt" class="w-3.5 h-3.5" /> {{ item.totalXp }} XP
        </span>
      </div>
      <div class="flex items-center justify-between pt-3 border-t border-slate-100">
        <div class="font-extrabold text-sm" :class="item.price === 0 ? 'text-emerald-600' : 'text-blue-700'">
          {{ item.priceLabel }}
        </div>
        <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-bold transition hover:opacity-85 shadow-sm"
          style="background: linear-gradient(135deg, #22d3ee, #2563eb);">
          Detail Kelas
          <UIcon name="i-heroicons-arrow-right" class="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface ClassCardItem {
  slug: string
  title: string
  shortDescription?: string | null
  difficulty: string
  priceLabel: string
  price: number
  totalTasks: number
  totalXp?: number
  estimatedDurationHours: number
  icon: string
  backColor: string
  frontGradient: string
}

const props = defineProps<{ item: ClassCardItem }>()

const levelLabel = computed(() => {
  const labels: Record<string, string> = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  }
  return labels[props.item.difficulty] || props.item.difficulty
})
</script>
