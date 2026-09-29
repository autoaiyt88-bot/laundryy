import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, MessageCircle, Globe } from "lucide-react";
import { businessInfo, getWhatsAppUrl } from "../data/laundryData";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: "#" },
    { name: t.services, href: "#layanan" },
    { name: t.pricing, href: "#harga" },
    { name: t.gallery, href: "#galeri" },
    { name: t.about, href: "#tentang-kami" },
    { name: t.faq, href: "#faq" },
    { name: t.contact, href: "#lokasi" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl text-dark tracking-tight leading-tight block">
                {businessInfo.name}
              </span>
              <span className="text-[11px] font-medium text-muted block -mt-0.5">
                {language === "id"
                  ? "Bersih, Wangi & Rapi"
                  : "Fresh, Clean & Crisp"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Side (Language Switcher & CTA) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/80 hover:bg-white text-xs font-bold transition-all shadow-2xs cursor-pointer"
              title={
                language === "id"
                  ? "Switch to English"
                  : "Ganti ke Bahasa Indonesia"
              }
            >
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span
                className={
                  language === "id"
                    ? "text-primary font-black"
                    : "text-slate-400"
                }
              >
                ID
              </span>
              <span className="text-slate-300">/</span>
              <span
                className={
                  language === "en"
                    ? "text-primary font-black"
                    : "text-slate-400"
                }
              >
                EN
              </span>
            </button>

            {/* Desktop CTA Button */}
            <a
              href={getWhatsAppUrl(translations[language].waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.orderNow}</span>
            </a>
          </div>

          {/* Mobile Right Bar (Language Switcher + Hamburger Button) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-bold"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-black uppercase">
                {language}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-dark hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            {/* Mobile Lang Button */}
            <div className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 text-xs">
              <span className="font-semibold text-slate-600">
                {language === "id"
                  ? "Bahasa / Language:"
                  : "Language / Bahasa:"}
              </span>
              <button
                type="button"
                onClick={toggleLanguage}
                className="px-3 py-1 bg-white border border-slate-200 rounded-lg font-bold text-primary shadow-xs"
              >
                {language === "id"
                  ? "🇮🇩 ID ➔ 🇬🇧 Switch to English"
                  : "🇬🇧 EN ➔ 🇮🇩 Ubah ke Indonesia"}
              </button>
            </div>

            <a
              href={getWhatsAppUrl(translations[language].waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-sm transition-colors mt-1"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.orderNow} (WhatsApp)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
