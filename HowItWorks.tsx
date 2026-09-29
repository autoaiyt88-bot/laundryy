import React from "react";
import { MessageSquare, Truck, Disc, CheckCircle2 } from "lucide-react";
import { howItWorksSteps, StepItem } from "../data/laundryData";

export const HowItWorks: React.FC = () => {
  const getStepIcon = (iconName: StepItem["iconName"]) => {
    switch (iconName) {
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-primary" />;
      case "Truck":
        return <Truck className="w-5 h-5 text-primary" />;
      case "WashingMachine":
        return <Disc className="w-5 h-5 text-primary animate-spin-slow" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-primary" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section
      id="cara-kerja"
      className="py-20 lg:py-28 bg-background border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
            Alur Praktis
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Cara Laundry di FreshWash
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Hanya 4 langkah mudah untuk mendapatkan pakaian bersih, wangi, dan
            rapi.
          </p>
        </div>

        {/* Timeline (Horizontal on desktop, vertical on mobile) */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-slate-200 -translate-y-8 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {howItWorksSteps.map((stepItem, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-black tracking-widest text-slate-400 group-hover:text-primary transition-colors">
                      {stepItem.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100/80 flex items-center justify-center transition-transform group-hover:scale-110">
                      {getStepIcon(stepItem.iconName)}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                    {stepItem.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <span>Langkah {stepItem.step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
