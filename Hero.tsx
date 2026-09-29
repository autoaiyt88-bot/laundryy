import React from "react";
import {
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { getWhatsAppUrl } from "../data/laundryData";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 via-background to-background">
      {/* Subtle soft backdrop accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-primary text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>{t.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-dark tracking-tight leading-[1.15]">
              {t.headline}{" "}
              <span className="text-primary underline decoration-secondary decoration-wavy decoration-2 underline-offset-8">
                {t.headlineHighlight}
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={getWhatsAppUrl(translations[language].waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm sm:text-base shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.ctaWhatsapp}</span>
              </a>

              <a
                href="#harga"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm sm:text-base border border-slate-200 shadow-xs transition-all hover:border-slate-300"
              >
                <span>{t.ctaPrice}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>{t.trustClean}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>{t.trustPrice}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>{t.trustFast}</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Image & Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Realistic Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-card border border-slate-100 bg-white aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1000&q=80"
                  alt="FreshWash Laundry environment"
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Soft Gradient Overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Status Card */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-4 sm:p-5 shadow-card border border-slate-100 flex items-center gap-3.5 transition-transform hover:scale-105 duration-300">
                <div className="w-11 h-11 rounded-xl bg-green-50 text-success flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {t.floatingDone}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-dark flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    {t.floatingReady}
                  </p>
                </div>
              </div>

              {/* Floating Service Guarantee Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-card border border-slate-100 items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-dark">
                    {t.floatingHygienic}
                  </p>
                  <p className="text-[11px] text-muted">{t.floatingMachine}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
