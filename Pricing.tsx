import React from "react";
import { Check, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../data/laundryData";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { ScrollReveal } from "./ScrollReveal";

export const Pricing: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].pricing;

  return (
    <section
      id="harga"
      className="py-20 lg:py-28 bg-white border-t border-slate-200/80"
    >
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

        {/* Pricing Cards Grid (3 Cards with stagger reveal) */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {t.plans.map((plan, index) => {
            const isExpress = plan.id === "express";
            return (
              <ScrollReveal
                key={plan.id}
                delay={index * 120}
                direction="up"
                className="h-full"
              >
                <div
                  className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative h-full ${
                    isExpress
                      ? "bg-white border-2 border-primary shadow-card-hover md:-translate-y-2"
                      : "bg-slate-50/70 hover:bg-white border border-slate-200 shadow-soft hover:shadow-card"
                  }`}
                >
                  {/* Badge for Express */}
                  {isExpress && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-extrabold uppercase px-3.5 py-1 rounded-full shadow-sm tracking-wider">
                      {t.popularBadge}
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Plan Header */}
                    <div>
                      <h3 className="text-lg font-bold text-dark tracking-wide uppercase">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-muted mt-1 leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Display */}
                    <div className="pt-2 pb-4 border-b border-slate-200/70">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-dark tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-sm font-semibold text-muted">
                          {plan.unit}
                        </span>
                      </div>
                    </div>

                    {/* Feature List */}
                    <ul className="space-y-3.5 text-sm text-slate-700 font-medium">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="pt-8 mt-6 border-t border-slate-100">
                    <a
                      href={getWhatsAppUrl(
                        translations[language].waMessages.pricing(
                          plan.name,
                          plan.price,
                          plan.unit,
                        ),
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                        isExpress
                          ? "bg-primary hover:bg-primary-hover text-white shadow-sm hover:shadow-md"
                          : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-300"
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t.cta}</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Note */}
        <ScrollReveal direction="none" delay={200}>
          <p className="text-center text-xs text-muted mt-10">{t.note}</p>
        </ScrollReveal>
      </div>
    </section>
  );
};
