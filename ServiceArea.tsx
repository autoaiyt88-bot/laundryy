import React from "react";
import { MapPin, Navigation, CheckCircle } from "lucide-react";
import { serviceAreaList, getWhatsAppUrl } from "../data/laundryData";
import { ScrollReveal } from "./ScrollReveal";

export const ServiceArea: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Info & Area Tags */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <ScrollReveal direction="up" className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
                Jangkauan Layanan
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
                Melayani Area Sekitar Anda
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Kami siap melayani antar-jemput cucian untuk rumah, kos,
                apartemen, maupun tempat usaha Anda di wilayah Denpasar dan
                sekitarnya.
              </p>
            </ScrollReveal>

            {/* Area Pills Grid */}
            <ScrollReveal
              direction="up"
              delay={100}
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              {serviceAreaList.map((area, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold hover:border-primary/50 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{area}</span>
                </div>
              ))}
            </ScrollReveal>

            {/* Check Area Prompt & CTA */}
            <ScrollReveal
              direction="up"
              delay={150}
              className="pt-6 border-t border-slate-100 space-y-3"
            >
              <p className="text-sm font-bold text-dark">
                Apakah lokasi Anda termasuk area layanan kami?
              </p>
              <a
                href={getWhatsAppUrl(
                  "Halo FreshWash Laundry, apakah lokasi saya bisa dijangkau layanan antar jemput?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-sm transition-all hover:shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Cek Area Pickup</span>
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Map Card */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal
              direction="right"
              delay={100}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-soft space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-primary flex items-center justify-center">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-sm sm:text-base">
                      Layanan Antar & Jemput
                    </h3>
                    <p className="text-xs text-muted">
                      Jadwal fleksibel setiap hari
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-success text-xs font-bold border border-green-200">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Tersedia
                </span>
              </div>

              {/* Map Preview Frame */}
              <div className="rounded-2xl overflow-hidden border border-slate-200/80 aspect-[4/3] bg-white relative">
                <iframe
                  title="Peta Layanan Denpasar"
                  src="https://maps.google.com/maps?q=Denpasar+Bali&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-muted pt-1">
                <span>📍 Titik penjemputan utama: Denpasar, Bali</span>
                <span className="font-semibold text-primary">
                  08:00 – 20:00
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
