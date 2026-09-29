import React from "react";
import { Award, ShieldCheck, HeartHandshake } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { ScrollReveal } from "./ScrollReveal";

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  const pillarIcons = [
    <Award className="w-6 h-6 text-primary" key="award" />,
    <ShieldCheck className="w-6 h-6 text-primary" key="shield" />,
    <HeartHandshake className="w-6 h-6 text-primary" key="heart" />,
  ];

  return (
    <section
      id="tentang-kami"
      className="py-20 lg:py-28 bg-background border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Experience Badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <ScrollReveal
              direction="left"
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="rounded-3xl overflow-hidden shadow-card border border-slate-200/80 aspect-[4/5] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1000&q=80"
                  alt="About FreshWash Laundry"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* 3+ Years Experience Pill */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-5 shadow-card border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center font-extrabold text-xl">
                  3+
                </div>
                <div>
                  <p className="text-sm font-bold text-dark">{t.badgeYears}</p>
                  <p className="text-xs text-muted">{t.badgeLocation}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: About Description */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <ScrollReveal direction="up" className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
                {t.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
                {t.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={80}>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {t.p1}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120}>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                {t.p2}
              </p>
            </ScrollReveal>

            {/* 3 Core Pillars */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4 text-left">
              {t.pillars.map((pillar, index) => (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={160 + index * 40}
                >
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2 h-full">
                    {pillarIcons[index % pillarIcons.length]}
                    <h4 className="font-bold text-sm text-dark">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-muted">{pillar.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
