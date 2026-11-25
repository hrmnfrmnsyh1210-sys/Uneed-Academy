import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import * as schema from './schema'

let _pool: mysql.Pool | null = null

export function getDbConnection() {
  const config = useRuntimeConfig()
  const dbUrl = config.databaseUrl || process.env.DATABASE_URL

  if (!_pool) {
    if (dbUrl) {
      _pool = mysql.createPool({
        uri: dbUrl,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        ssl: {
          rejectUnauthorized: true,
        },
      })
    } else {
      // Fallback for local development or when config is not yet supplied
      _pool = mysql.createPool({
        host: process.env.DATABASE_HOST || '127.0.0.1',
        port: Number(process.env.DATABASE_PORT) || 4000,
        user: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASSWORD || '',
        database: process.env.DATABASE_NAME || 'uneed_academy',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      })
    }
  }

  return drizzle(_pool, { schema, mode: 'default' })
}

export const db = getDbConnection()
