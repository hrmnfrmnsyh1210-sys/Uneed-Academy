/**
 * Presentasi visual kelas (ikon + warna folder 3D) dipakai bersama
 * oleh katalog publik, halaman detail, dan landing page.
 */
export interface ClassPresentation {
  icon: string
  backColor: string
  frontGradient: string
  accent: string
}

const presentations: Record<string, ClassPresentation> = {
  'basic-web-development': {
    icon: 'i-heroicons-code-bracket',
    backColor: '#db2777',
    frontGradient: 'linear-gradient(135deg,#f472b6,#ec4899)',
    accent: '#ec4899',
  },
  'vibe-coding-ai': {
    icon: 'i-heroicons-cpu-chip',
    backColor: '#059669',
    frontGradient: 'linear-gradient(135deg,#34d399,#10b981)',
    accent: '#10b981',
  },
  'fullstack-web-development': {
    icon: 'i-heroicons-server-stack',
    backColor: '#0284c7',
    frontGradient: 'linear-gradient(135deg,#38bdf8,#2563eb)',
    accent: '#2563eb',
  },
  'database-engineering': {
    icon: 'i-heroicons-circle-stack',
    backColor: '#d97706',
    frontGradient: 'linear-gradient(135deg,#fbbf24,#f59e0b)',
    accent: '#f59e0b',
  },
  'ui-ux-fundamentals': {
    icon: 'i-heroicons-paint-brush',
    backColor: '#e11d48',
    frontGradient: 'linear-gradient(135deg,#fb7185,#f43f5e)',
    accent: '#f43f5e',
  },
  'react-nextjs': {
    icon: 'i-heroicons-bolt',
    backColor: '#7c3aed',
    frontGradient: 'linear-gradient(135deg,#a78bfa,#6366f1)',
    accent: '#7c3aed',
  },
}

const fallback: ClassPresentation = {
  icon: 'i-heroicons-academic-cap',
  backColor: '#0369a1',
  frontGradient: 'linear-gradient(135deg,#38bdf8,#2563eb)',
  accent: '#2563eb',
}

export interface PublicClassSummary {
  id: string
  slug: string
  title: string
  shortDescription: string | null
  difficulty: string
  price: number
  discountedPrice: number | null
  priceLabel: string
  estimatedDurationHours: number
  learningOutcomes: string[] | null
  totalTasks: number
  totalXp: number
  mentors: { name: string, headline: string | null }[]
  icon: string
  backColor: string
  frontGradient: string
  accent: string
}

export function getClassPresentation(slug: string): ClassPresentation {
  return presentations[slug] || fallback
}

export function formatPrice(price: number): string {
  if (!price) return 'Gratis'
  return `Rp${new Intl.NumberFormat('id-ID').format(price)}`
}
