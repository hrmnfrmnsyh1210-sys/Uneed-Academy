import mysql from 'mysql2/promise'
import crypto from 'node:crypto'
import fs from 'node:fs'

function readUrl() {
  const envPath = new URL('../.env', import.meta.url)
  if (!fs.existsSync(envPath)) return process.env.DATABASE_URL
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^DATABASE_URL=(.*)$/)
    if (!match) continue
    let value = match[1].trim()
    if ((value.startsWith("'") && value.endsWith("'")) || (value.startsWith('"') && value.endsWith('"'))) {
      value = value.slice(1, -1)
    }
    return value
  }
  return process.env.DATABASE_URL
}

const url = readUrl()
if (!url) throw new Error('DATABASE_URL is missing')

const conn = await mysql.createConnection(url)

// 1. Ensure roles exist
for (const roleName of ['super_admin', 'mentor', 'student']) {
  const [rows] = await conn.query('SELECT id FROM roles WHERE name = ?', [roleName])
  if (rows.length === 0) {
    await conn.query('INSERT INTO roles (id, name, description) VALUES (?, ?, ?)', [
      crypto.randomUUID(),
      roleName,
      `Role ${roleName}`,
    ])
  }
}

// 2. Ensure category exists
const catId = 'cat_web_dev'
const [catRows] = await conn.query('SELECT id FROM categories WHERE slug = ?', ['web-development'])
if (catRows.length === 0) {
  await conn.query('INSERT INTO categories (id, name, slug, icon, description) VALUES (?, ?, ?, ?, ?)', [
    catId,
    'Software Engineering',
    'web-development',
    'i-heroicons-code-bracket',
    'Kurikulum pemrograman modern berbasis project nyata',
  ])
}

const catalog = [
  {
    id: 'cls_basic_web',
    slug: 'basic-web-development',
    title: 'Basic Web Development',
    short: 'HTML, CSS, JavaScript dan responsive design dari nol.',
    difficulty: 'beginner',
    price: '0.00',
    hours: 6,
    tasks: [
      { title: 'Introduction to Web Development', desc: 'Memahami cara kerja browser, HTTP, dan setup VS Code serta Git.', xp: 50 },
      { title: 'HTML5 Semantic & Accessibility', desc: 'Membangun struktur halaman web menggunakan tag semantik HTML5.', xp: 100 },
      { title: 'CSS Fundamentals & Modern Flexbox Layout', desc: 'Merancang layout responsif menggunakan Flexbox dan Grid.', xp: 100 },
      { title: 'Responsive Design & Media Queries', desc: 'Membuat tampilan adaptif di mobile, tablet, dan desktop.', xp: 125 },
      { title: 'JavaScript Basics & DOM Interactivity', desc: 'Menambahkan interaktivitas dengan JavaScript.', xp: 150 },
    ],
  },
  {
    id: 'cls_vibe_ai',
    slug: 'vibe-coding-ai',
    title: 'Vibe Coding with AI',
    short: 'Bangun aplikasi web lebih cepat dengan bantuan AI dan TiDB Cloud.',
    difficulty: 'beginner',
    price: '250000.00',
    hours: 8,
    tasks: [
      { title: 'Prompt Engineering untuk Developer', desc: 'Menyusun prompt terstruktur untuk menghasilkan arsitektur kode bersih.', xp: 75 },
      { title: 'UI Prototyping dengan AI', desc: 'Membangun antarmuka modern secara iteratif.', xp: 100 },
      { title: 'Integrasi Database TiDB Cloud', desc: 'Menghubungkan aplikasi dengan Drizzle ORM & TiDB Serverless.', xp: 150 },
      { title: 'Authentication & Security Audit', desc: 'Memastikan validasi input dan keamanan sesi pengguna.', xp: 150 },
      { title: 'Production Deployment ke Vercel', desc: 'Deploy aplikasi fullstack ke production.', xp: 200 },
    ],
  },
  {
    id: 'cls_fullstack_web',
    slug: 'fullstack-web-development',
    title: 'Fullstack Web Development',
    short: 'Bangun aplikasi web lengkap dari frontend hingga backend dan deployment.',
    difficulty: 'intermediate',
    price: '350000.00',
    hours: 15,
    tasks: [
      { title: 'Arsitektur Nuxt 4 & TypeScript', desc: 'Setup project fullstack dengan struktur modular.', xp: 100 },
      { title: 'REST API & Validasi Zod', desc: 'Membuat endpoint API aman dengan validasi skema.', xp: 125 },
      { title: 'Database Relasional & Drizzle ORM', desc: 'Merancang skema relasional dan migrasi.', xp: 150 },
      { title: 'Role-Based Access Control (RBAC)', desc: 'Implementasi otorisasi admin, mentor, dan siswa.', xp: 175 },
      { title: 'Testing & CI/CD Deployment', desc: 'Menulis unit test dan merilis ke production.', xp: 200 },
    ],
  },
  {
    id: 'cls_db_eng',
    slug: 'database-engineering',
    title: 'Database Engineering',
    short: 'Kelola data, desain skema relasional, indexing, dan optimasi query.',
    difficulty: 'intermediate',
    price: '200000.00',
    hours: 8,
    tasks: [
      { title: 'Entity Relationship Diagram (ERD)', desc: 'Merancang relasi 1-to-Many dan Many-to-Many.', xp: 100 },
      { title: 'Normalisasi & Integritas Data', desc: 'Menerapkan foreign key dan constraint unik.', xp: 100 },
      { title: 'SQL Query & Join Lanjutan', desc: 'Menulis query agregasi dan join kompleks.', xp: 125 },
      { title: 'Indexing & Query Profiling', desc: 'Mengoptimalkan performa pembacaan data.', xp: 150 },
      { title: 'Backup & Cloud Migration', desc: 'Strategi migrasi aman di TiDB Cloud.', xp: 150 },
    ],
  },
  {
    id: 'cls_ui_ux',
    slug: 'ui-ux-fundamentals',
    title: 'UI/UX Design Fundamentals',
    short: 'Pelajari prinsip desain antarmuka, hierarki visual, dan prototyping modern.',
    difficulty: 'beginner',
    price: '180000.00',
    hours: 5,
    tasks: [
      { title: 'Design Thinking & User Flow', desc: 'Memetakan kebutuhan pengguna dan alur layar.', xp: 75 },
      { title: 'Color Theory & Typography', desc: 'Menyusun sistem warna dan tipografi yang konsisten.', xp: 100 },
      { title: 'Component & Design System', desc: 'Membuat komponen reusable di Figma.', xp: 125 },
      { title: 'Interactive Prototyping', desc: 'Menghubungkan alur klik antar layar.', xp: 125 },
      { title: 'Usability Testing', desc: 'Mengevaluasi desain bersama pengguna nyata.', xp: 150 },
    ],
  },
  {
    id: 'cls_react_next',
    slug: 'react-nextjs',
    title: 'React & Next.js',
    short: 'Framework React modern dengan App Router untuk aplikasi production-ready.',
    difficulty: 'intermediate',
    price: '300000.00',
    hours: 12,
    tasks: [
      { title: 'React Hooks & State Management', desc: 'Mengelola state kompleks secara bersih.', xp: 100 },
      { title: 'App Router & Server Components', desc: 'Memahami SSR dan RSC di Next.js.', xp: 125 },
      { title: 'Server Actions & Form Handling', desc: 'Mengelola mutasi data langsung dari server.', xp: 150 },
      { title: 'Caching & Revalidation', desc: 'Optimasi kecepatan loading halaman.', xp: 150 },
      { title: 'Fullstack Showcase Project', desc: 'Membangun aplikasi web siap portofolio.', xp: 200 },
    ],
  },
]

for (const cls of catalog) {
  const [existing] = await conn.query('SELECT id FROM classes WHERE slug = ?', [cls.slug])
  if (existing.length === 0) {
    await conn.query(
      `INSERT INTO classes (id, category_id, title, slug, short_description, difficulty, price, estimated_duration_hours, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'published')`,
      [cls.id, catId, cls.title, cls.slug, cls.short, cls.difficulty, cls.price, cls.hours],
    )

    const modId = `mod_${cls.id}_1`
    await conn.query(
      `INSERT INTO class_modules (id, class_id, title, description, order_index)
       VALUES (?, ?, ?, ?, 1)`,
      [modId, cls.id, `Modul Utama: ${cls.title}`, cls.short],
    )

    for (let i = 0; i < cls.tasks.length; i++) {
      const t = cls.tasks[i]
      await conn.query(
        `INSERT INTO tasks (id, module_id, title, slug, task_type, description, instructions, order_index, xp_reward, status)
         VALUES (?, ?, ?, ?, 'project', ?, ?, ?, ?, 'published')`,
        [
          `tsk_${cls.id}_${i + 1}`,
          modId,
          t.title,
          `${cls.slug}-task-${i + 1}`,
          t.desc,
          JSON.stringify([
            `Pelajari materi ${t.title} dengan seksama.`,
            'Implementasikan project sesuai standar kode bersih.',
            'Upload repository GitHub dan link live deployment jika tersedia.',
          ]),
          i + 1,
          t.xp,
        ],
      )
    }
  }
}

const [clsCount] = await conn.query('SELECT COUNT(*) as total FROM classes')
const [tskCount] = await conn.query('SELECT COUNT(*) as total FROM tasks')
console.log('Seeded classes:', clsCount[0].total, 'tasks:', tskCount[0].total)
await conn.end()
