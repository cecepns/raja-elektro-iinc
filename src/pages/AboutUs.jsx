import { Link } from "react-router-dom";
import { FileText, CheckCircle2 } from "lucide-react";
import ImagePlaceholder from "../components/ImagePlaceholder";
import profileOwner from "../assets/profile-owner.jpeg";
import nibPdf from "../assets/dokumen-pendukung/NIB PT Raja Elektro Inc.pdf";
import suratPernyataanPdf from "../assets/dokumen-pendukung/surat-pernyataan-perubahan-41250913120262573.pdf";
import suratSertifikatPdf from "../assets/dokumen-pendukung/surat-sertifikat-perubahan-41250913120262573.pdf";

const highlights = [
  "Pengadaan Barang & Jasa terpercaya",
  "Konsultasi IT Support profesional",
  "Channel INAPROC, SIPLAH, TOKOLADANG",
  "Outsourcing & Biro Jasa Pendidikan",
];

const documents = [
  { label: "NIB PT Raja Elektro Inc", href: nibPdf },
  { label: "Surat Pernyataan Perubahan", href: suratPernyataanPdf },
  { label: "Surat Sertifikat Perubahan", href: suratSertifikatPdf },
];

export default function AboutUs() {
  return (
    <>
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-raja-blue font-semibold text-sm uppercase tracking-wider text-center mb-2"
            data-aos="fade-up"
          >
            Tentang Kami
          </p>
          <h1
            className="text-3xl sm:text-5xl font-bold text-raja-navy text-center mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About Us
          </h1>
          <p
            className="text-slate-600 text-center max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            PT. RAJA ELEKTRO INC. hadir sebagai mitra pengadaan barang & jasa
            serta solusi bisnis Anda.
          </p>
        </div>
      </section>

      <section className="py-12 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-raja-navy mb-6"
                data-aos="fade-right"
              >
                Siapa Kami
              </h2>
              <p
                className="text-slate-600 mb-4"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <strong className="text-slate-800">
                  PT. RAJA ELEKTRO INC.
                </strong>{" "}
                adalah perusahaan yang bergerak di bidang{" "}
                <strong>Pengadaan Barang & Jasa</strong>. Kami menyediakan
                layanan konsultasi IT Support, pengadaan melalui INAPROC dan
                SIPLAH/TOKOLADANG (elektronik, mobiler, jasa IT Support, dan
                lainnya), pengadaan jasa outsourcing (Satpam, CS, Driver,
                Resepsionis), biro jasa pendidikan non formal, serta kebutuhan
                lain yang Anda butuhkan.
              </p>
              <p
                className="text-slate-600"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Dengan tagline{" "}
                <strong className="text-raja-blue">
                  &quot;Your Business Solution&quot;
                </strong>
                , kami berkomitmen menjadi solusi terpercaya untuk institusi dan
                bisnis dalam memenuhi kebutuhan pengadaan dan layanan pendukung.
              </p>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="w-96 rounded overflow-hidden border shadow-md border-slate-200 mx-auto">
                <img
                  src={profileOwner}
                  alt="Profil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-raja-navy text-center mb-10" data-aos="fade-up">
            Profil
          </h2>
          <div className="flex flex-col items-center max-w-md mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl mb-4">
              <img src={profileOwner} alt="Profil" className="w-full h-full object-cover" />
            </div>
            <p className="font-semibold text-slate-800 text-lg">Profil</p>
            <p className="text-slate-500 text-sm">PT. RAJA ELEKTRO INC.</p>
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-raja-navy text-center mb-10"
            data-aos="fade-up"
          >
            Mengapa Memilih Kami
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <div
                key={item}
                className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-100 text-amber-600 shrink-0">
                  <CheckCircle2 className="w-5 h-5" strokeWidth={2} />
                </span>
                <p className="font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-slate-800 text-center mb-8"
            data-aos="fade-up"
          >
            Dokumen Pendukung
          </h2>
          <p
            className="text-slate-600 text-center max-w-xl mx-auto mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Dokumen resmi perusahaan tersedia untuk diunduh.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {documents.map((doc, i) => (
              <a
                key={doc.label}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-raja-blue/40 hover:shadow-md transition-all"
                data-aos="fade-up"
                data-aos-delay={150 + i * 50}
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <span className="font-medium text-slate-800 text-sm">
                  {doc.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 mb-6" data-aos="fade-up">
            Ingin tahu lebih banyak atau siap bekerjasama?
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center px-6 py-3 bg-raja-blue text-white font-semibold rounded-xl hover:bg-raja-blue-dark transition-colors"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
