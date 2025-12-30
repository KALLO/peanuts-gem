
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCarousel from './components/LogoCarousel';
import Services from './components/Services';
import CustomerStories from './components/CustomerStories';
import BoldStatement from './components/BoldStatement';
import CTA from './components/CTA';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import FeaturedService from './components/FeaturedService';
import Footer from './components/Footer';
import FlashlightCursor from './components/FlashlightCursor';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    // Set initial theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className={`${isDarkMode ? 'dark' : ''} transition-colors duration-500`}>
      <div className="min-h-screen bg-white dark:bg-[#130814] text-gray-900 dark:text-[#CECECE] relative">
        <FlashlightCursor />
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        
        <main>
          <Hero />
          <LogoCarousel />
          
          <div className="relative py-20 overflow-hidden">
            {/* Geometric Overlays */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-peanuts-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-peanuts-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            <Services />
          </div>

          <FeaturedService />

          <section className="bg-gray-50 dark:bg-[#1a0c1c] py-24 diagonal-bg">
            <CustomerStories />
          </section>

          <BoldStatement />

          <section className="py-24">
            <Testimonials />
          </section>

          <CTA />

          <section className="bg-gray-50 dark:bg-[#1a0c1c] py-24 diagonal-bg-reverse mt-20">
            <Blog />
          </section>
        </main>

        <Footer />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Peanuts Group",
            "url": "https://www.peanutsgroup.com",
            "logo": "https://www.peanutsgroup.com/logo.png",
            "description": "Digitaalisen muutoksen asiantuntija. Strateginen kehittäminen, mobiilisovellukset ja AI-ratkaisut.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "FI"
            }
          })}
        </script>
      </div>
    </div>
  );
};

export default App;
