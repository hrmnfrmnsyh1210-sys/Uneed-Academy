import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
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

const connection = await mysql.createConnection(url)

const adminEmail = process.env.ADMIN_EMAIL || 'admin@uneed.academy'
const adminPassword = process.env.ADMIN_PASSWORD || 'Admin123!'

for (const [name, description] of [
  ['super_admin', 'Akses penuh console administrasi'],
  ['mentor', 'Review tugas dan pendampingan peserta'],
  ['student', 'Peserta kelas'],
]) {
  await connection.execute(
    'INSERT IGNORE INTO roles (id, name, description, created_at) VALUES (?, ?, ?, NOW())',
    [crypto.randomUUID(), name, description],
  )
}

const [[existing]] = await connection.execute('SELECT id FROM users WHERE email = ? LIMIT 1', [adminEmail])
let adminId = existing?.id

if (!adminId) {
  adminId = crypto.randomUUID()
  const passwordHash = await bcrypt.hash(adminPassword, 12)
  await connection.execute(
    `INSERT INTO users
      (id, name, username, email, password_hash, is_email_verified, status, total_xp, current_level, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, 1, 'active', 0, 1, NOW(), NOW())`,
    [adminId, 'Super Admin', 'superadmin', adminEmail, passwordHash],
  )
} else {
  await connection.execute(
    'UPDATE users SET is_email_verified = 1, status = ? WHERE id = ?',
    ['active', adminId],
  )
}

const [[role]] = await connection.execute('SELECT id FROM roles WHERE name = ? LIMIT 1', ['super_admin'])
await connection.execute(
  'INSERT IGNORE INTO user_roles (user_id, role_id, created_at) VALUES (?, ?, NOW())',
  [adminId, role.id],
)

await connection.end()
console.log(`Super admin ready: ${adminEmail} / ${adminPassword}`)
