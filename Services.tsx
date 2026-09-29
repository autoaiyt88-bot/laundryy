import React from "react";
import {
  Shirt,
  Zap,
  Sparkles,
  Bed,
  Footprints,
  Truck,
  ArrowRight,
} from "lucide-react";
import { getWhatsAppUrl } from "../data/laundryData";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { ScrollReveal } from "./ScrollReveal";

export const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const getIcon = (id: string) => {
    switch (id) {
      case "kiloan":
        return <Shirt className="w-6 h-6 text-primary" />;
      case "express":
        return <Zap className="w-6 h-6 text-primary" />;
      case "satuan":
        return <Sparkles className="w-6 h-6 text-primary" />;
      case "bedcover":
        return <Bed className="w-6 h-6 text-primary" />;
      case "sepatu":
        return <Footprints className="w-6 h-6 text-primary" />;
      case "antar-jemput":
        return <Truck className="w-6 h-6 text-primary" />;
      default:
        return <Shirt className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="layanan" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with ScrollReveal */}
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

        {/* Services Grid (6 Cards with stagger reveal) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.items.map((service, index) => (
            <ScrollReveal
              key={service.id}
              delay={index * 80}
              direction="up"
              className="h-full"
            >
              <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-soft hover:shadow-card-hover hover:border-blue-200 transition-all duration-300 flex flex-col justify-between h-full group">
                <div className="space-y-4">
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100/70 flex items-center justify-center transition-transform group-hover:scale-110">
                    {getIcon(service.id)}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 block uppercase tracking-wider">
                      {language === "id" ? "Tarif" : "Rate"}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-dark">
                      {service.price}
                    </span>
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      translations[language].waMessages.service(service.title),
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary-hover hover:underline transition-colors"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
