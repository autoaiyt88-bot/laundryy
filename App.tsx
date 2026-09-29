import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-dark flex flex-col selection:bg-primary selection:text-white">
      {/* 1. Header / Navbar with Language Switcher */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust / Stats */}
        <Stats />

        {/* 4. Services Section */}
        <Services />

        {/* 5. Price Section */}
        <Pricing />

        {/* 6. Gallery Section (Menggantikan Cara Kerja) */}
        <Gallery />

        {/* 7. Why Choose Us (Benefits) */}
        <Benefits />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. About Section */}
        <About />

        {/* 10. FAQ Section */}
        <FAQ />

        {/* 11. Call To Action & Lokasi Google Maps */}
        <CTA />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
};

export default App;
