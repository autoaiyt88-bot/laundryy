import React, { useState } from "react";
import {
  MessageCircle,
  MapPin,
  Navigation,
  Clock,
  CheckCircle,
  Copy,
  Check,
  ExternalLink,
  Truck,
} from "lucide-react";
import {
  businessInfo,
  getWhatsAppUrl,
  serviceAreaList,
} from "../data/laundryData";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { ScrollReveal } from "./ScrollReveal";

export const CTA: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].ctaLocation;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(businessInfo.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = businessInfo.address;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="lokasi"
      className="py-20 lg:py-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden"
    >
      {/* Background Soft Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <ScrollReveal
          direction="up"
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-secondary text-xs font-bold uppercase tracking-wider border border-white/15">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </ScrollReveal>

        {/* Integrated Grid: Info & Google Maps */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Outlet Detail & Action Buttons (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ScrollReveal
              direction="left"
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 space-y-6 h-full flex flex-col justify-between shadow-2xl"
            >
              <div className="space-y-6">
                {/* Header Outlet */}
                <div className="border-b border-white/15 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                      {t.outletTitle}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/20 text-green-300 text-xs font-bold border border-green-400/30">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      {t.openToday}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    {businessInfo.name}
                  </h3>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 font-semibold uppercase tracking-wider">
                        {t.addressLabel}
                      </p>
                      <p className="text-sm sm:text-base font-medium text-white leading-relaxed mt-0.5">
                        {businessInfo.address}
                      </p>
                    </div>
                  </div>

                  {/* Copy Address Button */}
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="ml-12 inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-white transition-colors bg-white/5 hover:bg-white/15 px-3 py-1.5 rounded-lg border border-white/15"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-green-300">{t.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.copyAddress}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 font-semibold uppercase tracking-wider">
                      {t.hoursLabel}
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      {businessInfo.openingHours}
                    </p>
                  </div>
                </div>

                {/* Pickup & Delivery Areas */}
                <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Truck className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-xs text-blue-200 font-semibold uppercase tracking-wider">
                      {t.pickupAreaLabel}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {serviceAreaList.map((area, aIndex) => (
                        <span
                          key={aIndex}
                          className="px-2.5 py-0.5 rounded-md bg-white/10 text-white text-[11px] font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/15 space-y-3">
                <a
                  href={getWhatsAppUrl(
                    translations[language].waMessages.general,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-slate-50 text-dark font-extrabold text-sm sm:text-base shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>{t.btnWhatsapp}</span>
                </a>

                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-secondary" />
                  <span>{t.btnMaps}</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Embedded Google Maps (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal
              direction="right"
              delay={120}
              className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white flex flex-col h-full min-h-[350px] sm:min-h-[420px]"
            >
              {/* Map Bar Header */}
              <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-slate-200 font-bold">
                    {t.mapHeader}
                  </span>
                </div>
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>{t.fullScreen}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="flex-1 w-full h-full min-h-[320px] bg-slate-100">
                <iframe
                  title="Google Maps FreshWash Laundry"
                  src="https://maps.google.com/maps?q=Jl.+Tukad+Barito+No.+88,+Renon,+Denpasar,+Bali&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[320px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map Footer Note */}
              <div className="bg-slate-50 px-5 py-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span>{t.mapNote}</span>
                <span className="text-primary font-semibold">{t.mapCity}</span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Quick Trust Badges */}
        <ScrollReveal
          direction="up"
          delay={150}
          className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-blue-100/90 font-medium"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-secondary" />
            {t.trustQuickResponse}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-secondary" />
            {t.trustPickupAvailable}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-secondary" />
            {t.trustFreshResult}
          </span>
        </ScrollReveal>
      </div>
    </section>
  );
};
