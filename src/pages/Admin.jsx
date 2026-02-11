import { useEffect, useState } from 'react'
import { API_BASE } from '../utils/api'

// Definisi key, label, deskripsi, dan contoh struktur JSON
const CONTENT_DEFS = {
  home_hero: {
    label: 'Home – Hero',
    description:
      'Mengatur teks utama di section hero halaman Home (judul besar, subjudul, deskripsi, dan gambar).',
    example: {
      subtitle: 'Your Business Solution',
      title: 'Pengadaan Barang & Jasa yang Terpercaya',
      highlight: 'Terpercaya',
      description:
        'PT. RAJA ELEKTRO INC. menyediakan solusi lengkap: konsultasi IT Support, pengadaan melalui INAPROC & SIPLAH, outsourcing, dan biro jasa pendidikan.',
      imageUrl: '/hero-banner.png',
      servicesSectionTitle: 'Solusi Lengkap untuk Bisnis Anda',
      servicesSectionSubtitle: 'Layanan Kami',
    },
  },
  home_services_preview: {
    label: 'Home – Ringkasan Layanan',
    description: 'Kartu ringkasan 4 layanan utama yang tampil di halaman Home.',
    example: [
      {
        title: 'Konsultasi IT Support',
        desc: 'Dukungan dan konsultasi teknologi informasi profesional.',
        icon: 'Monitor',
      },
      {
        title: 'Pengadaan INAPROC',
        desc: 'Elektronik, mobiler, jasa IT Support melalui INAPROC.',
        icon: 'Package',
      },
      {
        title: 'Pengadaan SIPLAH',
        desc: 'Elektronik, mobiler, jasa IT via SIPLAH/TOKOLADANG.',
        icon: 'ShoppingCart',
      },
      {
        title: 'Outsourcing & Biro Jasa',
        desc: 'Satpam, CS, Driver, Resepsionis, pendidikan non formal.',
        icon: 'Users',
      },
    ],
  },
  home_mitra: {
    label: 'Home – Section Mitra',
    description: 'Judul, deskripsi, dan gambar untuk section Mitra Pengadaan Terpercaya.',
    example: {
      title: 'Mitra Pengadaan Terpercaya',
      description:
        'Kami melayani pengadaan barang dan jasa melalui channel resmi INAPROC dan SIPLAH Toko Ladang, didukung tim IT dan layanan outsourcing.',
      imageUrl: '/mitra-banner.png',
    },
  },
  home_cta: {
    label: 'Home – CTA Akhir',
    description: 'Call to action di bagian bawah halaman Home.',
    example: {
      title: 'Siap Bekerja Sama?',
      description:
        'Tim kami siap membantu pengadaan barang & jasa, IT support, dan kebutuhan lainnya. Hubungi kami untuk konsultasi.',
      buttonText: 'Contact Us',
    },
  },
  about_intro: {
    label: 'About – Intro',
    description: 'Judul dan deskripsi singkat di bagian atas halaman About Us.',
    example: {
      title: 'About Us',
      subtitle: 'Tentang Kami',
      description: 'PT. RAJA ELEKTRO INC. hadir sebagai mitra pengadaan barang & jasa serta solusi bisnis Anda.',
    },
  },
  about_who: {
    label: 'About – Siapa Kami',
    description: 'Konten teks utama yang menjelaskan profil perusahaan.',
    example: {
      title: 'Siapa Kami',
      paragraphs: [
        'PT. RAJA ELEKTRO INC. adalah perusahaan yang bergerak di bidang Pengadaan Barang & Jasa.',
        'Kami menyediakan layanan konsultasi IT Support, pengadaan melalui INAPROC dan SIPLAH/TOKOLADANG, outsourcing, dan biro jasa pendidikan non formal.',
      ],
    },
  },
  about_highlights: {
    label: 'About – Mengapa Memilih Kami',
    description: 'Daftar poin keunggulan perusahaan.',
    example: {
      items: [
        'Pengadaan Barang & Jasa terpercaya',
        'Konsultasi IT Support profesional',
        'Channel INAPROC, SIPLAH, TOKOLADANG',
        'Outsourcing & Biro Jasa Pendidikan',
      ],
    },
  },
  about_documents: {
    label: 'About – Dokumen Pendukung',
    description: 'Daftar dokumen resmi perusahaan.',
    example: {
      documents: [
        { label: 'NIB PT Raja Elektro Inc', href: '/dokumen/NIB-PT-Raja-Elektro-Inc.pdf' },
        { label: 'Surat Pernyataan Perubahan', href: '/dokumen/surat-pernyataan-perubahan.pdf' },
      ],
    },
  },
  service_intro: {
    label: 'Service – Intro',
    description: 'Judul dan deskripsi pembuka halaman layanan.',
    example: {
      title: 'Layanan Kami',
      subtitle: 'Layanan',
      description:
        'PT. RAJA ELEKTRO INC. bergerak di bidang Pengadaan Barang & Jasa dengan portofolio layanan yang lengkap.',
    },
  },
  service_services: {
    label: 'Service – Daftar Layanan',
    description: 'Daftar lengkap kartu layanan pada halaman Service.',
    example: {
      services: [
        {
          title: 'Konsultasi IT Support',
          desc: 'Layanan konsultasi dan dukungan teknologi informasi.',
          icon: 'Monitor',
          items: ['Audit infrastruktur IT', 'Perencanaan & implementasi', 'Support berkelanjutan'],
        },
      ],
    },
  },
  service_catalogs: {
    label: 'Service – Link Katalog',
    description: 'URL katalog INAPROC dan SIPLAH.',
    example: {
      inaprocUrl: 'https://katalog.inaproc.id/raja-elektro-inc',
      siplahUrl:
        'https://siplah.tokoladang.co.id/official-store/pt-raja-elektro-inc.77581?keyword=&sort=&etalase=0',
    },
  },
  contact_info: {
    label: 'Contact – Informasi Kontak',
    description: 'Email, nomor WhatsApp, alamat, dan tagline perusahaan.',
    example: {
      companyName: 'PT. RAJA ELEKTRO INC.',
      tagline: 'Your Business Solution',
      email: 'literasidigitaltbalai@gmail.com',
      phone: '082249445697',
      phoneLink: '6282249445697',
      address:
        'Jl. MT. Haryono No. 4B, Kelurahan Tanjungbalai, Kota Tanjungbalai, Provinsi Sumatera Utara, Kode Pos 21313',
    },
  },
  contact_subjects: {
    label: 'Contact – Pilihan Subjek',
    description: 'Opsi pilihan subjek pada form contact.',
    example: {
      subjects: [
        { value: 'pengadaan', label: 'Pengadaan Barang & Jasa' },
        { value: 'it-support', label: 'Konsultasi IT Support' },
        { value: 'outsourcing', label: 'Outsourcing' },
        { value: 'pendidikan', label: 'Biro Jasa Pendidikan' },
        { value: 'lainnya', label: 'Lainnya' },
      ],
    },
  },
  layout_nav: {
    label: 'Layout – Navigasi',
    description: 'Menu navigasi utama (header & footer).',
    example: {
      items: [
        { path: '/', label: 'Home' },
        { path: '/service', label: 'Service' },
        { path: '/about-us', label: 'About Us' },
        { path: '/contact-us', label: 'Contact Us' },
      ],
    },
  },
  layout_footer: {
    label: 'Layout – Footer & Kontak',
    description: 'Teks ringkas di footer dan informasi kontak.',
    example: {
      description:
        'Your Business Solution — Pengadaan Barang & Jasa, IT Support, Outsourcing, dan kebutuhan lainnya.',
      email: 'literasidigitaltbalai@gmail.com',
      phone: '082249445697',
      address:
        'Jl. MT. Haryono No. 4B, Kel. Tanjungbalai, Kota Tanjungbalai, Sumatera Utara 21313',
    },
  },
  layout_catalogs: {
    label: 'Layout – Link Katalog Footer',
    description: 'Link katalog INAPROC dan SIPLAH di footer.',
    example: {
      inaprocUrl: 'https://katalog.inaproc.id/raja-elektro-inc',
      siplahUrl:
        'https://siplah.tokoladang.co.id/official-store/pt-raja-elektro-inc.77581?keyword=&sort=&etalase=0',
    },
  },
}

function fetchWithCredentials(path, options = {}) {
  return fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })
}

export default function Admin() {
  const [loading, setLoading] = useState(true)
  const [isAuthed, setIsAuthed] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [loginError, setLoginError] = useState('')

  const [contentKeys, setContentKeys] = useState([])
  const [selectedKey, setSelectedKey] = useState('')
  const [editorValue, setEditorValue] = useState('{}')
  const [alert, setAlert] = useState({ open: false, type: 'success', message: '' })

  function showAlert(message, type = 'success') {
    setAlert({ open: true, type, message })
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, open: false }))
    }, 1000)
  }

  function closeAlert() {
    setAlert((prev) => ({ ...prev, open: false }))
  }

  useEffect(() => {
    fetchWithCredentials('/api/admin/me')
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error('unauthorized')
      })
      .then(() => {
        setIsAuthed(true)
        loadContentKeys()
      })
      .catch(() => {
        setIsAuthed(false)
      })
      .finally(() => setLoading(false))
  }, [])

  function handleLoginChange(e) {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleLoginSubmit(e) {
    e.preventDefault()
    setLoginError('')
    setLoading(true)
    fetchWithCredentials('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify(loginForm),
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(data.error || 'Login gagal')
        }
        return res.json()
      })
      .then(() => {
        setIsAuthed(true)
        loadContentKeys()
      })
      .catch((err) => {
        setLoginError(err.message)
      })
      .finally(() => setLoading(false))
  }

  function handleLogout() {
    fetchWithCredentials('/api/admin/logout', { method: 'POST' }).finally(() => {
      setIsAuthed(false)
    })
  }

  function loadContentKeys() {
    fetchWithCredentials('/api/content')
      .then((res) => res.json())
      .then((data) => {
        setContentKeys(data)
      })
      .catch((err) => {
        console.error('Failed to load content keys', err)
      })
  }

  function handleSelectKey(key) {
    setSelectedKey(key)
    fetch(`${API_BASE}/api/content/${encodeURIComponent(key)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Not found')
        }
        return res.json()
      })
      .then((value) => {
        setEditorValue(JSON.stringify(value, null, 2))
      })
      .catch(() => {
        // Jika belum ada di database, isi dengan contoh / template jika tersedia
        const def = CONTENT_DEFS[key]
        if (def?.example) {
          setEditorValue(JSON.stringify(def.example, null, 2))
        } else {
          setEditorValue('{}')
        }
      })
  }

  function handleSave() {
    let parsed
    try {
      parsed = JSON.parse(editorValue)
    } catch (err) {
      showAlert('JSON tidak valid. Periksa kembali formatnya.', 'error')
      return
    }
    fetchWithCredentials(`/api/content/${encodeURIComponent(selectedKey)}`, {
      method: 'PUT',
      body: JSON.stringify(parsed),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Gagal menyimpan')
        }
        return res.json()
      })
      .then(() => {
        showAlert('Berhasil disimpan.', 'success')
        loadContentKeys()
      })
      .catch((err) => {
        showAlert(err.message || 'Gagal menyimpan.', 'error')
      })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600">Loading...</p>
      </div>
    )
  }

  if (!isAuthed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <h1 className="text-xl font-semibold text-slate-800 mb-1 text-center">Admin Login</h1>
          <p className="text-sm text-slate-500 mb-6 text-center">
            Masuk untuk mengelola konten website PT. RAJA ELEKTRO INC.
          </p>
          {loginError && <p className="text-sm text-red-600 mb-4 text-center">{loginError}</p>}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={loginForm.email}
                onChange={handleLoginChange}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-raja-blue/40 focus:border-raja-blue"
                placeholder="admin@rajainc.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={loginForm.password}
                onChange={handleLoginChange}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-raja-blue/40 focus:border-raja-blue"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-raja-blue text-white font-semibold hover:bg-raja-blue-dark transition-colors"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-10">
      {alert.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-5 w-full max-w-sm mx-4">
            <div className="flex items-start gap-3">
              <div
                className={`mt-1 h-2 w-2 rounded-full ${
                  alert.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
                }`}
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-slate-800 mb-1">
                  {alert.type === 'success' ? 'Berhasil' : 'Gagal'}
                </h3>
                <p className="text-xs text-slate-600">{alert.message}</p>
              </div>
              <button
                type="button"
                onClick={closeAlert}
                className="text-xs text-slate-500 hover:text-slate-700"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">Admin Dashboard</h1>
            <p className="text-sm text-slate-500">
              Kelola konten dinamis untuk halaman Home, About Us, Service, Contact, dan layout.
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Logout
          </button>
        </div>

        <div className="grid lg:grid-cols-[260px,1fr] gap-6 items-start">
          <aside className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 max-h-[520px] overflow-y-auto">
            <h2 className="text-sm font-semibold text-slate-700 mb-3">Konten</h2>
            <p className="text-xs text-slate-500 mb-3">
              Pilih key konten yang ingin diedit. Jika belum ada, pilih salah satu nama standar di bawah lalu isi
              kontennya.
            </p>
            <div className="space-y-1 mb-4">
              {Object.entries(CONTENT_DEFS).map(([key, def]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleSelectKey(key)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs ${
                    selectedKey === key
                      ? 'bg-raja-blue text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <div className="font-semibold">{def.label}</div>
                  <div className="text-[10px] opacity-70">{key}</div>
                </button>
              ))}
            </div>
            {contentKeys.length > 0 && (
              <>
                <h3 className="text-xs font-semibold text-slate-600 mt-4 mb-2">Key yang sudah ada</h3>
                <ul className="space-y-1 text-xs text-slate-500">
                  {contentKeys.map((item) => (
                    <li key={item.key}>{item.key}</li>
                  ))}
                </ul>
              </>
            )}
          </aside>

          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 lg:p-6">
            {selectedKey ? (
              <>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h2 className="text-sm font-semibold text-slate-800">
                      Edit: {CONTENT_DEFS[selectedKey]?.label || selectedKey}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {CONTENT_DEFS[selectedKey]?.description ||
                        'Nilai dalam format JSON. Sesuaikan struktur dengan kebutuhan halaman.'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-4 py-1.5 rounded-lg bg-raja-blue text-white text-xs font-semibold hover:bg-raja-blue-dark"
                  >
                    Simpan
                  </button>
                </div>
                {CONTENT_DEFS[selectedKey]?.example && (
                  <button
                    type="button"
                    onClick={() =>
                      setEditorValue(JSON.stringify(CONTENT_DEFS[selectedKey].example, null, 2))
                    }
                    className="mb-3 inline-flex items-center px-3 py-1.5 rounded-lg border border-slate-300 text-[11px] text-slate-700 hover:bg-slate-50"
                  >
                    Gunakan contoh struktur JSON
                  </button>
                )}
                <textarea
                  value={editorValue}
                  onChange={(e) => setEditorValue(e.target.value)}
                  rows={20}
                  className="w-full font-mono text-xs bg-slate-950 text-emerald-100 rounded-xl p-3 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-raja-blue/40 focus:border-raja-blue"
                  spellCheck={false}
                />
              </>
            ) : (
              <p className="text-sm text-slate-500">Pilih key konten di sebelah kiri untuk mulai mengedit.</p>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

