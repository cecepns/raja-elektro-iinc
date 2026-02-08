import { Link } from "react-router-dom";
import {
  Monitor,
  Package,
  ShoppingCart,
  Users,
  BookOpen,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import LayananBanner from "../assets/layanan-banner-2.png";

const KATALOG_INAPROC = "https://katalog.inaproc.id/raja-elektro-inc";
const KATALOG_SIPLAH =
  "https://siplah.tokoladang.co.id/official-store/pt-raja-elektro-inc.77581?keyword=&sort=&etalase=0";

const services = [
  {
    title: "Konsultasi IT Support",
    desc: "Layanan konsultasi dan dukungan teknologi informasi untuk mendukung operasional dan digitalisasi bisnis Anda.",
    items: [
      "Audit infrastruktur IT",
      "Perencanaan & implementasi",
      "Support berkelanjutan",
    ],
    Icon: Monitor,
  },
  {
    title: "Pengadaan Barang & Jasa INAPROC",
    desc: "Pengadaan melalui sistem INAPROC untuk kebutuhan elektronik, mobiler, jasa IT Support, dan barang/jasa lainnya.",
    items: ["Elektronik", "Mobiler", "Jasa IT Support", "Barang & jasa lain"],
    Icon: Package,
  },
  {
    title: "Pengadaan Barang & Jasa SIPLAH / TOKOLADANG",
    desc: "Pengadaan melalui SIPLAH dan TOKOLADANG — elektronik, mobiler, jasa IT Support, serta kebutuhan pengadaan lainnya.",
    items: [
      "Elektronik",
      "Mobiler",
      "Jasa IT Support",
      "Katalog resmi e-katalog",
    ],
    Icon: ShoppingCart,
  },
  {
    title: "Pengadaan Jasa Outsourcing",
    desc: "Penyediaan tenaga kerja outsourcing yang terlatih dan terverifikasi untuk berbagai kebutuhan operasional.",
    items: [
      "Satpam (Security)",
      "Customer Service (CS)",
      "Driver",
      "Resepsionis",
      "Tenaga pendukung lain",
    ],
    Icon: Users,
  },
  {
    title: "Biro Jasa Pendidikan Non Formal",
    desc: "Layanan di bidang pendidikan non formal dan pelatihan untuk peningkatan kompetensi SDM.",
    Icon: BookOpen,
    items: [],
  },
  {
    title: "Kebutuhan Lainnya",
    desc: "Solusi terpadu untuk berbagai kebutuhan pengadaan barang, jasa, dan konsultasi sesuai permintaan Anda.",
    Icon: Sparkles,
    items: ["Kustomisasi layanan", "Konsultasi kebutuhan", "Penawaran khusus"],
  },
];

export default function Service() {
  return (
    <>
      <section className="relative pt-32 pb-10 md:pb-24 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-raja-blue font-semibold text-sm uppercase tracking-wider text-center mb-2"
            data-aos="fade-up"
          >
            Layanan
          </p>
          <h1
            className="text-3xl sm:text-5xl font-bold text-raja-navy text-center mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Layanan Kami
          </h1>
          <p
            className="text-slate-600 text-center max-w-2xl mx-auto mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            PT. RAJA ELEKTRO INC. bergerak di bidang Pengadaan Barang & Jasa
            dengan portofolio layanan yang lengkap untuk mendukung kebutuhan
            institusi dan bisnis.
          </p>
          <div
            className="max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="relative w-full rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 shadow-xl overflow-hidden">
              <img
                src={LayananBanner}
                alt="Banner Layanan"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-raja-blue/40 hover:shadow-xl hover:shadow-raja-blue/5 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i % 2 === 0 ? 0 : 100}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                  <service.Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <h2 className="text-xl font-bold text-raja-navy mb-3 group-hover:text-raja-blue transition-colors">
                  {service.title}
                </h2>
                <p className="text-slate-600 mb-4">{service.desc}</p>
                {service.items.length > 0 && (
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-raja-blue shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold text-raja-navy text-center mb-6"
            data-aos="fade-up"
          >
            Akses Katalog Resmi
          </h2>
          <div
            className="flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a
              href={KATALOG_INAPROC}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium rounded-xl hover:bg-slate-900 transition-colors"
            >
              Katalog INAPROC <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={KATALOG_SIPLAH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-raja-blue text-white font-medium rounded-xl hover:bg-raja-blue-dark transition-colors"
            >
              SIPLAH Toko Ladang <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-700 font-medium mb-4" data-aos="fade-up">
            Butuh penawaran atau konsultasi?
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center px-6 py-3 bg-raja-blue text-white font-semibold rounded-xl hover:bg-raja-blue-dark transition-colors"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </>
  );
}
