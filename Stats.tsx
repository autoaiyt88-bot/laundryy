import React from "react";
import { Users, CheckCircle2, Star, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { ScrollReveal } from "./ScrollReveal";

export const Stats: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].stats;

  const statsList = [
    {
      ...t.customers,
      icon: <Users className="w-5 h-5 text-primary" key="users" />,
    },
    {
      ...t.orders,
      icon: <CheckCircle2 className="w-5 h-5 text-primary" key="orders" />,
    },
    {
      ...t.rating,
      icon: (
        <Star className="w-5 h-5 text-amber-500 fill-amber-500" key="rating" />
      ),
    },
    {
      ...t.experience,
      icon: <Clock className="w-5 h-5 text-primary" key="years" />,
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {statsList.map((stat, index) => (
            <ScrollReveal
              key={index}
              delay={index * 100}
              direction="up"
              className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-1">
                {stat.icon}
              </div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-dark tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-slate-800">
                {stat.label}
              </p>
              {stat.desc && (
                <p className="text-xs text-muted hidden sm:block">
                  {stat.desc}
                </p>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
