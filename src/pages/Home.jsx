import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Monitor, Package, ShoppingCart, Users, ArrowRight } from "lucide-react";
import HeroBgImage from "../assets/hero-banner.png";
import MitraBanner from "../assets/mitra-banner.png";
import axios from "axios";
import { API_BASE } from "../utils/api";

const ICON_MAP = {
  Monitor,
  Package,
  ShoppingCart,
  Users,
};

function mapServices(raw) {
  if (!Array.isArray(raw)) return [];
  return raw.map((item, index) => {
    const Icon =
      (item.icon && ICON_MAP[item.icon]) ||
      (index === 0
        ? Monitor
        : index === 1
        ? Package
        : index === 2
        ? ShoppingCart
        : Users);
    return {
      title: item.title || "",
      desc: item.desc || "",
      Icon,
    };
  });
}

export default function Home() {
  const [hero, setHero] = useState(null);
  const [servicesPreview, setServicesPreview] = useState(null);
  const [mitra, setMitra] = useState(null);
  const [cta, setCta] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/content/home_hero`, { withCredentials: false })
      .then((res) => res?.data && setHero(res.data))
      .catch(() => {});

    axios
      .get(`${API_BASE}/api/content/home_services_preview`, { withCredentials: false })
      .then((res) => res?.data && setServicesPreview(mapServices(res.data)))
      .catch(() => {});

    axios
      .get(`${API_BASE}/api/content/home_mitra`, { withCredentials: false })
      .then((res) => res?.data && setMitra(res.data))
      .catch(() => {});

    axios
      .get(`${API_BASE}/api/content/home_cta`, { withCredentials: false })
      .then((res) => res?.data && setCta(res.data))
      .catch(() => {});
  }, []);

  const heroSubtitle =
    hero?.subtitle || "Your Business Solution";
  const heroTitle =
    hero?.title || "Pengadaan Barang & Jasa yang Terpercaya";
  const heroHighlight =
    hero?.highlight || "Terpercaya";
  const heroDescription =
    hero?.description ||
    "PT. RAJA ELEKTRO INC. menyediakan solusi lengkap: konsultasi IT Support, pengadaan melalui INAPROC & SIPLAH, outsourcing, dan biro jasa pendidikan — satu pintu untuk kebutuhan bisnis Anda.";
  const heroImage = hero?.imageUrl || HeroBgImage;

  const layananTitle =
    hero?.servicesSectionTitle || "Solusi Lengkap untuk Bisnis Anda";
  const layananSubtitle =
    hero?.servicesSectionSubtitle || "Layanan Kami";

  const mitraTitle =
    mitra?.title || "Mitra Pengadaan Terpercaya";
  const mitraDescription =
    mitra?.description ||
    "Kami melayani pengadaan barang dan jasa melalui channel resmi INAPROC dan SIPLAH Toko Ladang, didukung tim IT dan layanan outsourcing yang siap mendukung operasional Anda.";
  const mitraImage = mitra?.imageUrl || MitraBanner;

  const ctaTitle =
    cta?.title || "Siap Bekerja Sama?";
  const ctaDescription =
    cta?.description ||
    "Tim kami siap membantu pengadaan barang & jasa, IT support, dan kebutuhan lainnya. Hubungi kami untuk konsultasi tanpa wajib.";
  const ctaButtonText = cta?.buttonText || "Contact Us";

  return (
    <>
      <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p
                className="text-raja-blue font-semibold text-sm uppercase tracking-wider mb-4"
                data-aos="fade-up"
              >
                {heroSubtitle}
              </p>
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-raja-navy leading-tight mb-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {heroTitle.replace(heroHighlight, "")}
                <span className="text-raja-blue"> {heroHighlight}</span>
              </h1>
              <p
                className="text-lg text-slate-600 max-w-xl mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {heroDescription}
              </p>
              <div
                className="flex flex-wrap gap-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link
                  to="/service"
                  className="inline-flex items-center px-6 py-3 bg-raja-blue text-white font-semibold rounded-xl hover:bg-raja-blue-dark transition-colors shadow-lg shadow-raja-blue/25"
                >
                  Lihat Layanan
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center px-6 py-3 border-2 border-raja-navy text-raja-navy font-semibold rounded-xl hover:bg-raja-navy hover:text-white transition-colors"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
            <div
              className="relative flex justify-center order-1 lg:order-2"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="relative w-full max-w-md aspect-square rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 shadow-xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="PT. RAJA ELEKTRO INC."
                  className="w-full h-full object-cover drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-raja-blue font-semibold text-sm uppercase tracking-wider text-center mb-2"
            data-aos="fade-up"
          >
            {layananSubtitle}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-raja-navy text-center mb-14"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {layananTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(servicesPreview || []).map((item, i) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-raja-blue/30 hover:shadow-lg hover:shadow-raja-blue/5 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={100 + i * 50}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                  <item.Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10" data-aos="fade-up">
            <Link
              to="/service"
              className="inline-flex items-center gap-2 text-raja-blue font-semibold hover:underline"
            >
              Selengkapnya <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1" data-aos="fade-right">
              <div className="relative w-full mx-auto max-w-md aspect-square rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 shadow-xl overflow-hidden">
                <img
                  src={mitraImage}
                  alt="Mitra Pengadaan Terpercaya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2
                className="text-3xl sm:text-4xl font-bold text-raja-navy mb-6"
                data-aos="fade-up"
              >
              {mitraTitle}
              </h2>
              <p
                className="text-slate-600 mb-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
              {mitraDescription}
              </p>
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 text-raja-blue font-semibold hover:underline"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Tentang kami <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold text-raja-navy mb-6"
              data-aos="fade-up"
            >
              {ctaTitle}
            </h2>
            <p
              className="text-slate-600 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {ctaDescription}
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-raja-navy text-white font-semibold rounded-xl hover:bg-raja-blue-dark transition-colors shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {ctaButtonText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
