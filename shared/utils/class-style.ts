export interface ClassVisualStyle {
  icon: string
  backColor: string
  frontGradient: string
}

const EXACT_STYLES: Record<string, ClassVisualStyle> = {
  'basic-web-development': {
    icon: 'i-heroicons-code-bracket',
    backColor: '#db2777',
    frontGradient: 'linear-gradient(135deg,#f472b6,#ec4899)',
  },
  'vibe-coding-ai': {
    icon: 'i-heroicons-cpu-chip',
    backColor: '#059669',
    frontGradient: 'linear-gradient(135deg,#34d399,#10b981)',
  },
  'fullstack-web-development': {
    icon: 'i-heroicons-server-stack',
    backColor: '#0284c7',
    frontGradient: 'linear-gradient(135deg,#38bdf8,#2563eb)',
  },
  'database-engineering': {
    icon: 'i-heroicons-circle-stack',
    backColor: '#d97706',
    frontGradient: 'linear-gradient(135deg,#fbbf24,#f59e0b)',
  },
  'ui-ux-fundamentals': {
    icon: 'i-heroicons-paint-brush',
    backColor: '#e11d48',
    frontGradient: 'linear-gradient(135deg,#fb7185,#f43f5e)',
  },
  'react-nextjs': {
    icon: 'i-heroicons-bolt',
    backColor: '#7c3aed',
    frontGradient: 'linear-gradient(135deg,#a78bfa,#6366f1)',
  },
}

export function getClassStyle(slugOrTitle: string): ClassVisualStyle {
  const key = String(slugOrTitle || '').toLowerCase()
  if (EXACT_STYLES[key]) return EXACT_STYLES[key]!
  if (key.includes('ai') || key.includes('vibe')) return EXACT_STYLES['vibe-coding-ai']!
  if (key.includes('fullstack') || key.includes('backend')) return EXACT_STYLES['fullstack-web-development']!
  if (key.includes('database') || key.includes('sql')) return EXACT_STYLES['database-engineering']!
  if (key.includes('ui') || key.includes('ux') || key.includes('design')) return EXACT_STYLES['ui-ux-fundamentals']!
  if (key.includes('react') || key.includes('next')) return EXACT_STYLES['react-nextjs']!
  if (key.includes('web') || key.includes('html') || key.includes('js')) return EXACT_STYLES['basic-web-development']!

  return {
    icon: 'i-heroicons-academic-cap',
    backColor: '#2563eb',
    frontGradient: 'linear-gradient(135deg,#60a5fa,#2563eb)',
  }
}
