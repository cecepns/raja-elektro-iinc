import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const CONTACT = {
  email: 'literasidigitaltbalai@gmail.com',
  phone: '082249445697',
  phoneLink: '6282249445697',
  address: 'Jl. MT. Haryono No. 4B, Kelurahan Tanjungbalai, Kota Tanjungbalai, Provinsi Sumatera Utara, Kode Pos 21313',
}

const SUBJECT_LABELS = {
  pengadaan: 'Pengadaan Barang & Jasa',
  'it-support': 'Konsultasi IT Support',
  outsourcing: 'Outsourcing',
  pendidikan: 'Biro Jasa Pendidikan',
  lainnya: 'Lainnya',
}

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subjectLabel = SUBJECT_LABELS[form.subject] || form.subject
    const text = [
      `*Pesan dari Website Contact Us*`,
      '',
      `*Nama:* ${form.name}`,
      `*Email:* ${form.email}`,
      form.company ? `*Perusahaan/Instansi:* ${form.company}` : null,
      `*Subjek:* ${subjectLabel}`,
      '',
      `*Pesan:*`,
      form.message,
    ]
      .filter(Boolean)
      .join('\n')
    const url = `https://wa.me/${CONTACT.phoneLink}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setForm({ name: '', email: '', company: '', subject: '', message: '' })
  }

  return (
    <>
      <section className="relative pt-32 pb-10 md:pb-24 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-raja-blue font-semibold text-sm uppercase tracking-wider text-center mb-2" data-aos="fade-up">
            Hubungi
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-raja-navy text-center mb-6" data-aos="fade-up" data-aos-delay="100">
            Contact Us
          </h1>
          <p className="text-slate-600 text-center max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Silakan isi formulir di bawah atau hubungi kami untuk konsultasi, penawaran pengadaan barang & jasa, IT support, outsourcing, dan kebutuhan lainnya.
          </p>
        </div>
      </section>

      <section className="py-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6" data-aos="fade-right">
                Kirim Pesan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div data-aos="fade-right" data-aos-delay="0">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-800 mb-1.5">
                    Nama *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-raja-blue focus:ring-2 focus:ring-raja-blue/20 outline-none transition"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div data-aos="fade-right" data-aos-delay="50">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-1.5">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-raja-blue focus:ring-2 focus:ring-raja-blue/20 outline-none transition"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div data-aos="fade-right" data-aos-delay="100">
                  <label htmlFor="company" className="block text-sm font-medium text-slate-800 mb-1.5">
                    Perusahaan / Instansi
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-raja-blue focus:ring-2 focus:ring-raja-blue/20 outline-none transition"
                    placeholder="Nama perusahaan atau instansi"
                  />
                </div>
                <div data-aos="fade-right" data-aos-delay="150">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-800 mb-1.5">
                    Subjek *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-raja-blue focus:ring-2 focus:ring-raja-blue/20 outline-none transition bg-white"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="pengadaan">Pengadaan Barang & Jasa</option>
                    <option value="it-support">Konsultasi IT Support</option>
                    <option value="outsourcing">Outsourcing</option>
                    <option value="pendidikan">Biro Jasa Pendidikan</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
                <div data-aos="fade-right" data-aos-delay="200">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-800 mb-1.5">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-raja-blue focus:ring-2 focus:ring-raja-blue/20 outline-none transition resize-y min-h-[120px]"
                    placeholder="Tulis pesan Anda..."
                  />
                </div>
                <div data-aos="fade-right" data-aos-delay="250">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center gap-2 px-8 py-3 bg-raja-blue text-white font-semibold rounded-xl hover:bg-raja-blue-dark transition-colors shadow-lg shadow-raja-blue/20"
                  >
                    <Send className="w-4 h-4" /> Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
            <div>
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-slate-800 mb-6" data-aos="fade-left">
                  Informasi Kontak
                </h2>
                <div className="space-y-6" data-aos="fade-left" data-aos-delay="100">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-sm font-medium text-amber-600 mb-1">Perusahaan</p>
                    <p className="text-slate-800 font-semibold">PT. RAJA ELEKTRO INC.</p>
                    <p className="text-slate-600 text-sm mt-1">Your Business Solution</p>
                  </div>
                  <div className="flex items-start gap-3 text-slate-600">
                    <Mail className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">Email</p>
                      <a href={`mailto:${CONTACT.email}`} className="text-sm hover:text-raja-blue transition-colors">{CONTACT.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-slate-600">
                    <Phone className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">Telepon / WA</p>
                      <a href={`https://wa.me/${CONTACT.phoneLink}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-raja-blue transition-colors">{CONTACT.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-slate-600">
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">Alamat</p>
                      <p className="text-sm">{CONTACT.address}</p>
                    </div>
                  </div>
                  {/* <div className="pt-4" data-aos="fade-left" data-aos-delay="200">
                    <ImagePlaceholder aspectRatio="aspect-video" label="Gambar placeholder — peta atau foto lokasi" className="w-full rounded-xl" />
                  </div> */}
                  <p className="text-slate-500 text-sm">
                    Tim kami akan merespons pesan Anda secepat mungkin. Untuk kebutuhan mendesak, silakan hubungi via WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
