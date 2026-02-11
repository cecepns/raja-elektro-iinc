import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3001

// Basic CORS – allow frontend on same machine (Vite default: 5173)
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  }),
)

app.use(express.json())

// MySQL pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  charset: 'utf8mb4_unicode_ci',
})

async function ensureDefaultAdmin() {
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD

  if (!email || !password) return

  const [rows] = await pool.query('SELECT id FROM admin_users WHERE email = ?', [email])
  if (rows.length > 0) return

  const hash = await bcrypt.hash(password, 10)
  await pool.query(
    'INSERT INTO admin_users (email, password_hash, name) VALUES (?, ?, ?)',
    [email, hash, 'Administrator'],
  )
  console.log('Default admin user created with email', email)
}

// Untuk saat ini, nonaktifkan proteksi session dan izinkan semua request.
// Jika nanti ingin pakai auth lagi, bisa ganti implementasi ini.
function requireAuth(req, res, next) {
  next()
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Auth routes
app.post('/api/admin/login', async (req, res) => {
  const { email, password } = req.body || {}

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  try {
    const [rows] = await pool.query('SELECT id, password_hash, name, email FROM admin_users WHERE email = ?', [
      email,
    ])
    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    const user = rows[0]
    const valid = await bcrypt.compare(password, user.password_hash)
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Tanpa session: cukup kirim data user ke frontend
    res.json({ id: user.id, email: user.email, name: user.name })
  } catch (err) {
    console.error('Login error', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.post('/api/admin/logout', (req, res) => {
  // Tanpa session, logout cukup mengembalikan success
  res.json({ success: true })
})

// Tanpa mekanisme sesi di server, endpoint ini selalu mengembalikan unauthorized.
// Frontend akan menilai login hanya dari state lokal setelah /login sukses.
app.get('/api/admin/me', (req, res) => {
  return res.status(401).json({ error: 'Unauthorized' })
})

// Content API
// GET all keys (for admin list)
app.get('/api/content', requireAuth, async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, content_key, content_value, updated_at FROM site_content ORDER BY content_key ASC',
    )
    res.json(
      rows.map((row) => ({
        id: row.id,
        key: row.content_key,
        value: row.content_value,
        updatedAt: row.updated_at,
      })),
    )
  } catch (err) {
    console.error('Fetch content error', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// GET one key (public, used by frontend)
app.get('/api/content/:key', async (req, res) => {
  const { key } = req.params
  try {
    const [rows] = await pool.query('SELECT content_value FROM site_content WHERE content_key = ?', [key])
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Not found' })
    }
    let value = rows[0].content_value
    // MariaDB bisa mengembalikan JSON sebagai string – parse jika perlu
    if (typeof value === 'string') {
      try {
        value = JSON.parse(value)
      } catch {
        // biarkan apa adanya jika gagal parse
      }
    }
    res.json(value)
  } catch (err) {
    console.error('Fetch single content error', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// UPSERT one key (admin only)
app.put('/api/content/:key', requireAuth, async (req, res) => {
  const { key } = req.params
  const value = req.body

  try {
    await pool.query(
      `
      INSERT INTO site_content (content_key, content_value)
      VALUES (?, ?)
      ON DUPLICATE KEY UPDATE content_value = VALUES(content_value), updated_at = CURRENT_TIMESTAMP
    `,
      [key, JSON.stringify(value)],
    )
    res.json({ success: true })
  } catch (err) {
    console.error('Upsert content error', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Start server
async function start() {
  try {
    await pool.query('SELECT 1')
    console.log('MySQL connected')
    await ensureDefaultAdmin()
    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error('Failed to start server', err)
    process.exit(1)
  }
}

start()

