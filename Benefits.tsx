import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Tag,
  Clock,
  Smile,
  Headphones,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { ScrollReveal } from "./ScrollReveal";

export const Benefits: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].benefits;

  const benefitIcons = [
    <Sparkles className="w-5 h-5 text-primary" key="sparkle" />,
    <ShieldCheck className="w-5 h-5 text-primary" key="shield" />,
    <Tag className="w-5 h-5 text-primary" key="tag" />,
    <Clock className="w-5 h-5 text-primary" key="clock" />,
    <Smile className="w-5 h-5 text-primary" key="smile" />,
    <Headphones className="w-5 h-5 text-primary" key="support" />,
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Benefits Content with ScrollReveal */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal
              direction="up"
              className="space-y-3 text-center lg:text-left"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
                {t.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
                {t.title}
              </h2>
              <p className="text-muted text-base sm:text-lg">{t.subtitle}</p>
            </ScrollReveal>

            {/* 6 Benefits Grid with stagger reveal */}
            <div className="grid sm:grid-cols-2 gap-6">
              {t.items.map((benefit, index) => (
                <ScrollReveal key={index} delay={index * 60} direction="up">
                  <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-card transition-all duration-300 space-y-2 h-full group">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-primary/40 transition-colors">
                        {benefitIcons[index % benefitIcons.length]}
                      </div>
                      <h3 className="font-bold text-dark text-base">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed pl-12">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Laundry Image with ScrollReveal */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal
              direction="right"
              delay={150}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Image Frame */}
              <div className="rounded-3xl overflow-hidden shadow-card border border-slate-100 aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1000&q=80"
                  alt="FreshWash Laundry professional process"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Quality Seal Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl p-4 sm:p-5 shadow-card border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-dark">{t.qualitySeal}</p>
                  <p className="text-[11px] text-muted">{t.qualitySub}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
