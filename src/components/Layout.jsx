import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react'
import Logo from '../assets/logo.png'
import FloatingWaButton from './FloatingWaButton'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/service', label: 'Service' },
  { path: '/about-us', label: 'About Us' },
  { path: '/contact-us', label: 'Contact Us' },
]

const KATALOG_INAPROC = 'https://katalog.inaproc.id/raja-elektro-inc'
const KATALOG_SIPLAH = 'https://siplah.tokoladang.co.id/official-store/pt-raja-elektro-inc.77581?keyword=&sort=&etalase=0'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/80 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img src={Logo} alt="PT. RAJA ELEKTRO INC." className="h-16 md:h-20 object-contain" />
            </Link>

            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-raja-blue bg-raja-blue/10'
                        : 'text-slate-700 hover:text-raja-blue hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <ul className="md:hidden py-4 border-t border-slate-200 space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                      location.pathname === item.path ? 'text-raja-blue bg-raja-blue/10' : 'text-slate-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      <main className="flex-1 pt-18 md:pt-20">{children}</main>

      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <img src={Logo} alt="Raja Elektro Inc" className="h-14 w-auto object-contain mb-4" />
              <p className="text-sm text-slate-400">Your Business Solution — Pengadaan Barang & Jasa, IT Support, Outsourcing, dan kebutuhan lainnya.</p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-400 mb-4">Tautan</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-slate-400 hover:text-white text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-400 mb-4">Katalog</h3>
              <ul className="space-y-2">
                <li>
                  <a href={KATALOG_INAPROC} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1">
                    INAPROC <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a href={KATALOG_SIPLAH} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1">
                    SIPLAH Toko Ladang <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-400 mb-4">Kontak</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                  <a href="mailto:literasidigitaltbalai@gmail.com" className="hover:text-white transition-colors">literasidigitaltbalai@gmail.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 shrink-0 mt-0.5" />
                  <a href="tel:+6282249445697" className="hover:text-white transition-colors">082249445697</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>Jl. MT. Haryono No. 4B, Kel. Tanjungbalai, Kota Tanjungbalai, Sumatera Utara 21313</span>
                </li>
              </ul>
              <Link
                to="/contact-us"
                className="inline-block mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium rounded-lg text-sm transition-colors"
              >
                Hubungi
              </Link>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} PT. RAJA ELEKTRO INC. All rights reserved.
          </div>
        </div>
      </footer>

      <FloatingWaButton />
    </div>
  )
}
