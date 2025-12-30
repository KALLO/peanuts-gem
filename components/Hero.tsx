
import React from 'react';
import Button from './Button';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Pattern */}
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Ambient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-peanuts-accent/10 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-peanuts-secondary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-peanuts-accent/20 bg-peanuts-accent/5 text-peanuts-accent text-xs font-heading font-bold uppercase tracking-widest mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-peanuts-accent animate-pulse"></span>
          Digitaalisen muutoksen edelläkävijä
        </div>

        <h1 className="text-5xl md:text-8xl font-heading font-black text-gray-900 dark:text-white leading-[1.1] tracking-tighter mb-8 max-w-5xl mx-auto">
          Rakennamme <span className="text-transparent bg-clip-text bg-gradient-to-r from-peanuts-accent to-peanuts-secondary">huomisen</span> palveluita tänään.
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-peanuts-text max-w-2xl mx-auto mb-12 leading-relaxed">
          Olemme kokenut strategi- ja teknologiatalo, joka muuttaa haastavat visiot menestyneiksi digitaalisiksi ekosysteemeiksi.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button variant="primary" className="w-full sm:w-auto">
            Varaa konsultaatio
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto" href="#referenssit">
            Katso referenssit <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.3em] font-heading font-bold text-gray-400">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-peanuts-accent to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
