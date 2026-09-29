import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../data/laundryData";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].floatingWa;

  return (
    <aside
      aria-label={t.ariaLabel}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`hidden sm:block bg-dark text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-slate-700 transition-all duration-200 ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        {t.tooltip}
      </div>

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl(translations[language].waMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.ariaLabel}
        className="w-14 h-14 rounded-full bg-success hover:bg-green-600 text-white flex items-center justify-center shadow-lg shadow-success/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-success/30"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
};
