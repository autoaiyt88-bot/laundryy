import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { galleryImages } from '../data/laundryData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { ScrollReveal } from './ScrollReveal';

export const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].gallery;
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>('all');

  const categoryList: Array<{ key: string; label: string }> = [
    { key: 'all', label: t.categories.all },
    { key: 'facilities', label: t.categories.facilities },
    { key: 'results', label: t.categories.results },
    { key: 'process', label: t.categories.process },
    { key: 'packaging', label: t.categories.packaging },
  ];

  // Map category key to Indonesian category values in galleryImages
  const filteredImages = activeCategoryKey === 'all'
    ? galleryImages
    : galleryImages.filter((img) => {
        if (activeCategoryKey === 'facilities') return img.category === 'Fasilitas';
        if (activeCategoryKey === 'results') return img.category === 'Hasil Cucian';
        if (activeCategoryKey === 'process') return img.category === 'Proses' || img.category === 'Layanan';
        if (activeCategoryKey === 'packaging') return img.category === 'Kemasan';
        return true;
      });

  return (
    <section id="galeri" className="py-20 lg:py-28 bg-background border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            {t.title}
          </h2>
          <p className="text-muted text-base sm:text-lg">
            {t.subtitle}
          </p>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <ScrollReveal direction="up" delay={100} className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryList.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategoryKey(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategoryKey === cat.key
                  ? 'bg-primary text-white shadow-sm scale-105'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <ScrollReveal
              key={index}
              delay={index * 80}
              direction="up"
              className="h-full"
            >
              <div className="group relative rounded-3xl overflow-hidden bg-slate-100 shadow-soft border border-slate-200/80 aspect-[4/3] transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                {/* Image */}
                <img
                  src={image.imageUrl}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/30 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-secondary flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {image.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    {image.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
