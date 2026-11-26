import type { H3Event } from 'h3'

/** Pastikan request berasal dari Super Admin / Admin. */
export async function requireAdmin(event: H3Event) {
  return await requireUserRole(event, ['super_admin', 'admin'])
}

/** Slug URL yang aman untuk judul kelas/module/quest. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 200)
}

/** Parsing angka dari body form yang bisa berupa string atau number. */
export function toNumber(value: unknown, fallback = 0): number {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (typeof value === 'string') {
    const cleaned = value.replace(/[^\d.-]/g, '')
    const parsed = Number(cleaned)
    if (Number.isFinite(parsed)) return parsed
  }
  return fallback
}

/** Parsing boolean dari body JSON/form. */
export function toBoolean(value: unknown, fallback = false): boolean {
  if (typeof value === 'boolean') return value
  if (value === 'true' || value === '1' || value === 1) return true
  if (value === 'false' || value === '0' || value === 0) return false
  return fallback
}
