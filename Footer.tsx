import React from "react";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import { businessInfo, getWhatsAppUrl } from "../data/laundryData";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const tNav = translations[language].nav;
  const tFoot = translations[language].footer;

  return (
    <footer
      id="kontak"
      className="bg-dark text-slate-300 text-sm border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {businessInfo.name}
              </span>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {tFoot.tagline}
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={businessInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={businessInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              <a
                href={businessInfo.socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center text-xs font-black transition-colors"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>

          {/* Quick Nav (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {tFoot.navTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {tNav.home}
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="hover:text-white transition-colors"
                >
                  {tNav.services}
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-white transition-colors">
                  {tNav.pricing}
                </a>
              </li>
              <li>
                <a
                  href="#galeri"
                  className="hover:text-white transition-colors"
                >
                  {tNav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#tentang-kami"
                  className="hover:text-white transition-colors"
                >
                  {tNav.about}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {tNav.faq}
                </a>
              </li>
              <li>
                <a
                  href="#lokasi"
                  className="hover:text-white transition-colors"
                >
                  {tNav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {tFoot.contactTitle}
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-success shrink-0" />
                <a
                  href={getWhatsAppUrl(
                    translations[language].waMessages.general,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-slate-300 font-semibold"
                >
                  WhatsApp: {businessInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>{businessInfo.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="hover:text-white"
                >
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">
                    {tFoot.hoursLabel}:
                  </p>
                  <p>{businessInfo.openingHours}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © 2026 {businessInfo.name}. {tFoot.rights}
          </p>
          <p className="text-slate-400">{tFoot.bottomTagline}</p>
        </div>
      </div>
    </footer>
  );
};
