import React from "react";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { ScrollReveal } from "./ScrollReveal";

export const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal
          direction="up"
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            {t.title}
          </h2>
          <p className="text-muted text-base sm:text-lg">{t.subtitle}</p>
        </ScrollReveal>

        {/* Testimonials Cards (3 Cards) */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.items.map((item, index) => (
            <ScrollReveal
              key={index}
              delay={index * 120}
              direction="up"
              className="h-full"
            >
              <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-200 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  {/* Header: Rating & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-300" />
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                    “{item.content}”
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-primary font-bold text-sm flex items-center justify-center">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-sm">{item.name}</h4>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
