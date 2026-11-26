/**
 * Seed data publik: testimoni mentor & alumni, serta detail kelas.
 * Aman dijalankan berulang kali (idempotent). Data yang sudah diisi
 * tidak akan ditimpa, sehingga konten dari admin tetap dipertahankan.
 */
import fs from 'node:fs'
import mysql from 'mysql2/promise'

function readEnv() {
  const env = { ...process.env }
  const path = new URL('../.env', import.meta.url)
  if (fs.existsSync(path)) {
    for (const line of fs.readFileSync(path, 'utf8').split(/\r?\n/)) {
      const match = line.match(/^([A-Z0-9_]+)=(.*)$/)
      if (!match) continue
      let value = match[2].trim()
      if ((value.startsWith("'") && value.endsWith("'")) || (value.startsWith('"') && value.endsWith('"'))) {
        value = value.slice(1, -1)
      }
      env[match[1]] = value
    }
  }
  return env
}

const url = readEnv().DATABASE_URL
if (!url) throw new Error('DATABASE_URL is missing')
const conn = await mysql.createConnection(url)

// 1. Tabel testimoni (selaras dengan server/database/schema/index.ts)
await conn.query(`
  CREATE TABLE IF NOT EXISTS testimonials (
    id VARCHAR(36) NOT NULL PRIMARY KEY,
    user_id VARCHAR(36) NULL,
    role VARCHAR(16) NOT NULL,
    name VARCHAR(128) NOT NULL,
    headline VARCHAR(255) NULL,
    quote TEXT NOT NULL,
    avatar_url TEXT NULL,
    class_slug VARCHAR(255) NULL,
    rating INT NOT NULL DEFAULT 5,
    sort_order INT NOT NULL DEFAULT 0,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY testimonial_role_name_idx (role, name),
    KEY testimonial_class_slug_idx (class_slug),
    CONSTRAINT testimonials_user_fk FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
`)

// 2. Ambil user nyata yang sudah terdaftar untuk dijadikan alumni bila tersedia.
const [realUsers] = await conn.query('SELECT id, name, username FROM users ORDER BY created_at ASC LIMIT 5')

const testimonials = [
  {
    role: 'mentor',
    name: 'Ahmad Fauzi',
    headline: 'Fullstack Engineer · Mentor Uneed Academy',
    quote: 'Saya membimbing siswa dari cara berpikir, bukan sekadar mencontoh kode. Setiap tugas punya alasan dan hasil yang bisa dipertanggungjawabkan.',
    classSlug: 'fullstack-web-development',
    sortOrder: 1,
  },
  {
    role: 'mentor',
    name: 'Nadia Pratama',
    headline: 'Product Designer · Mentor UI/UX',
    quote: 'Desain yang baik dimulai dari masalah pengguna. Di kelas ini siswa dibiasakan riset, membuat keputusan, lalu membuktikannya lewat prototipe.',
    classSlug: 'ui-ux-fundamentals',
    sortOrder: 2,
  },
  {
    role: 'mentor',
    name: 'Dimas Aryo',
    headline: 'Cloud & Database Engineer · Mentor TiDB',
    quote: 'Bangun aplikasi kecil yang benar: skema rapi, query efisien, dan deploy sanggup dipakai orang lain. Itu standar yang kami latih.',
    classSlug: 'database-engineering',
    sortOrder: 3,
  },
  {
    role: 'mentor',
    name: 'Bima Saputra',
    headline: 'Frontend Engineer · Mentor Web Dasar',
    quote: 'Fondasi yang kuat menghemat waktu bertahun-tahun. Saya memastikan setiap siswa benar-benar memahami mengapa kodenya bekerja.',
    classSlug: 'basic-web-development',
    sortOrder: 7,
  },
  {
    role: 'mentor',
    name: 'Raka Wicaksono',
    headline: 'AI Product Engineer · Mentor Vibe Coding',
    quote: 'AI hanya secepat cara kamu berpikir. Di kelas ini kami melatih siswa memberi arah yang jelas, lalu memeriksa hasilnya secara kritis.',
    classSlug: 'vibe-coding-ai',
    sortOrder: 8,
  },
  {
    role: 'mentor',
    name: 'Intan Permata',
    headline: 'Senior React Developer · Mentor Frontend',
    quote: 'React mudah dimulai tetapi butuh disiplin untuk dibuat rapi. Kami latih itu lewat project bertahap dan review yang jujur.',
    classSlug: 'react-nextjs',
    sortOrder: 9,
  },
  {
    role: 'alumni',
    name: realUsers[0] ? `${realUsers[0].name} ${realUsers[0].username}` : 'Herman Firmansyah',
    userId: realUsers[0]?.id || null,
    headline: 'Alumni · Basic Web Development',
    quote: 'Dulu saya tidak paham bidang mana yang harus dipelajari. Di sini saya dibimbing langkah demi langkah sampai bisa membuat website sendiri.',
    classSlug: 'basic-web-development',
    sortOrder: 4,
  },
  {
    role: 'alumni',
    name: 'Rizky Pratama',
    headline: 'Alumni · Vibe Coding with AI',
    quote: 'Yang paling membantu adalah review mentor. Setiap revisi membuat kode saya lebih rapi dan saya jadi paham kenapa, bukan hanya bisa jalan.',
    classSlug: 'vibe-coding-ai',
    sortOrder: 5,
  },
  {
    role: 'alumni',
    name: 'Sari Dewi',
    headline: 'Alumni · React & Next.js',
    quote: 'Materinya padat tapi runtut. Saya menyelesaikan satu project per task dan akhirnya punya portofolio yang bisa ditunjukkan ke rekruter.',
    classSlug: 'react-nextjs',
    sortOrder: 6,
  },
]

for (const item of testimonials) {
  await conn.query(
    `INSERT INTO testimonials (id, user_id, role, name, headline, quote, class_slug, rating, sort_order, is_active)
     VALUES (UUID(), ?, ?, ?, ?, ?, ?, 5, ?, 1)
     ON DUPLICATE KEY UPDATE
       headline = VALUES(headline), quote = VALUES(quote), class_slug = VALUES(class_slug), sort_order = VALUES(sort_order)`,
    [item.userId || null, item.role, item.name, item.headline, item.quote, item.classSlug, item.sortOrder],
  )
}

// 3. Lengkapi detail kelas yang masih kosong (tidak menimpa data admin).
const details = {
  'basic-web-development': {
    full: 'Kelas fondasi bagi siapa pun yang ingin memahami web dari dasar. Kamu akan mempelajari cara kerja browser dan HTTP, menyusun struktur semantik dengan HTML5, merancang tampilan responsif dengan CSS modern, lalu menambahkan interaksi dengan JavaScript. Setiap quest berujung pada project kecil yang dikumpulkan dan ditinjau oleh mentor.',
    outcomes: ['Memahami alur kerja browser, HTTP, dan tooling frontend', 'Menulis HTML5 semantik dan responsif di berbagai ukuran layar', 'Menguasai Flexbox, Grid, dan CSS modern', 'Manipulasi DOM dengan JavaScript vanilla', 'Menyusun satu project portofolio web statis'],
    prerequisites: ['Tidak perlu pengalaman coding', 'Komputer dengan browser modern', 'Kemauan untuk berlatih secara konsisten'],
    audience: ['Pemula total yang ingin pindah ke dunia teknologi', 'Mahasiswa yang ingin fondasi web yang kuat', 'Profesional non-teknis yang ingin membuat website sendiri'],
    tools: ['VS Code', 'Git & GitHub', 'Browser modern (Chrome / Firefox)'],
  },
  'vibe-coding-ai': {
    full: 'Belajar memanfaatkan AI sebagai partner kerja, bukan pengganti pemahaman. Kamu akan menyusun prompt yang terstruktur, membuat prototipe antarmuka, menghubungkan aplikasi ke TiDB Cloud, melakukan audit keamanan dasar, hingga melakukan deployment produksi. Setiap langkah tetap melalui review mentor agar hasilnya benar-benar kamu pahami.',
    outcomes: ['Menulis prompt terstruktur untuk pengembangan perangkat lunak', 'Membuat prototipe UI iteratif dengan bantuan AI', 'Mengintegrasikan aplikasi ke TiDB Cloud', 'Memahami validasi input dan keamanan sesi', 'Deploy aplikasi fullstack ke Vercel'],
    prerequisites: ['Dasar HTML, CSS, dan JavaScript', 'Akun GitHub', 'Akun TiDB Cloud (gratis tier tersedia)'],
    audience: ['Developer pemula yang ingin mempercepat alur kerja', 'Founder yang ingin membuat MVP sendiri', 'Mahasiswa yang ingin membangun project AI'],
    tools: ['VS Code', 'AI assistant', 'TiDB Cloud', 'Vercel'],
  },
  'fullstack-web-development': {
    full: 'Kelas intensif untuk membangun aplikasi web lengkap dari frontend hingga backend. Kamu akan mempelajari arsitektur Nuxt 4 dan TypeScript, merancang REST API yang aman, memodelkan data relasional dengan Drizzle ORM, menerapkan RBAC, lalu menguji dan merilis aplikasi ke produksi. Project akhir menjadi bukti kemampuan yang bisa langsung masuk portofolio.',
    outcomes: ['Merancang struktur aplikasi Nuxt 4 yang modular', 'Membuat REST API dengan validasi skema', 'Memodelkan dan mengelola database relasional', 'Menerapkan role-based access control', 'Menulis pengujian dan men-deploy aplikasi'],
    prerequisites: ['Menguasai HTML, CSS, dan JavaScript', 'Dasar TypeScript sangat disarankan', 'Familiar dengan Git'],
    audience: ['Developer yang ingin naik ke level fullstack', 'Mahasiswa teknik informatika', 'Karyawan yang ingin menangani project end-to-end'],
    tools: ['Nuxt 4', 'TypeScript', 'TiDB Cloud', 'Drizzle ORM', 'Vercel'],
  },
  'database-engineering': {
    full: 'Fokus pada kemampuan merancang dan mengelola data yang rapi. Kamu akan belajar membuat ERD, menerapkan normalisasi dan integritas data, menulis query SQL lanjutan, mengoptimalkan performa lewat indexing, serta menyiapkan strategi backup dan migrasi ke cloud.',
    outcomes: ['Merancang ERD dan relasi antar entitas', 'Menerapkan normalisasi, foreign key, dan constraint', 'Menulis query agregasi dan join kompleks', 'Mengoptimalkan query dengan indexing', 'Merencanakan backup dan migrasi database'],
    prerequisites: ['Dasar SQL (SELECT, INSERT, UPDATE, DELETE)', 'Logika pemrograman dasar'],
    audience: ['Backend developer yang ingin serius di database', 'Analis data yang ingin memahami modeling', 'Mahasiswa yang mengambil mata kuliah basis data'],
    tools: ['MySQL / TiDB Cloud', 'Drizzle ORM', 'GUI database client'],
  },
  'ui-ux-fundamentals': {
    full: 'Kelas dasar desain produk digital yang menempatkan pengguna di tengah proses. Kamu akan memetakan kebutuhan pengguna, memahami warna dan tipografi, membangun sistem komponen, membuat prototipe interaktif, lalu menguji kegunaannya bersama pengguna nyata.',
    outcomes: ['Memetakan user flow dan kebutuhan pengguna', 'Menyusun sistem warna dan tipografi', 'Membuat design system dan komponen reusable', 'Membangun prototipe interaktif', 'Melakukan usability testing'],
    prerequisites: ['Tidak perlu pengalaman desain', 'Komputer dengan akses internet'],
    audience: ['Pemula yang ingin masuk ke dunia UI/UX', 'Developer yang ingin lebih percaya diri memilih desain', 'Product owner yang ingin memahami proses desain'],
    tools: ['Figma', 'FigJam', 'Browser modern'],
  },
  'react-nextjs': {
    full: 'Pelajari React modern dan Next.js App Router untuk membangun aplikasi siap produksi. Materi mencakup hooks dan state management, server components, server actions, strategi caching, hingga pembangunan aplikasi showcase yang memperlihatkan kemampuanmu secara menyeluruh.',
    outcomes: ['Mengelola state kompleks dengan hooks', 'Memahami SSR dan React Server Components', 'Menangani mutasi data lewat server actions', 'Mengoptimalkan performa dengan caching dan revalidation', 'Menyelesaikan project showcase siap portofolio'],
    prerequisites: ['JavaScript modern (ES6+)', 'Dasar HTML dan CSS', 'Familiar dengan Git'],
    audience: ['Developer React yang ingin naik ke Next.js', 'Mahasiswa yang ingin membangun aplikasi nyata', 'Freelancer yang ingin mempercepat development'],
    tools: ['React', 'Next.js', 'TypeScript', 'Vercel'],
  },
}

for (const [slug, data] of Object.entries(details)) {
  await conn.query(
    `UPDATE classes SET
       full_description = COALESCE(full_description, ?),
       learning_outcomes = COALESCE(learning_outcomes, ?),
       prerequisites = COALESCE(prerequisites, ?),
       target_audience = COALESCE(target_audience, ?),
       tools_required = COALESCE(tools_required, ?)
     WHERE slug = ?`,
    [
      data.full,
      JSON.stringify(data.outcomes),
      JSON.stringify(data.prerequisites),
      JSON.stringify(data.audience),
      JSON.stringify(data.tools),
      slug,
    ],
  )
}

const [counts] = await conn.query('SELECT COUNT(*) AS total FROM testimonials')
console.log(`Seeded testimonials: ${counts[0].total}, enriched classes: ${Object.keys(details).length}`)
await conn.end()
