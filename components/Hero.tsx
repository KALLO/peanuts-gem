
import React from 'react';
import Button from './Button';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Pattern */}
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.2]">
        <img
          src="/assets/hero-pattern-v2.png"
          alt="Abstract Background Pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ambient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-peanuts-accent/10 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-peanuts-secondary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-peanuts-accent/20 bg-peanuts-accent/5 text-peanuts-accent text-sm md:text-base font-heading font-bold uppercase tracking-widest mb-10 animate-fade-in">
          <span className="flex h-2.5 w-2.5 rounded-full bg-peanuts-accent animate-pulse"></span>
          Digitaalisen muutoksen edelläkävijä
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-gray-900 dark:text-white leading-[1.05] tracking-tighter mb-10 max-w-6xl mx-auto">
          Rakennamme <span className="text-transparent bg-clip-text bg-gradient-to-r from-peanuts-accent to-peanuts-secondary">huomisen</span> palveluita tänään.
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-peanuts-text max-w-3xl mx-auto mb-14 leading-relaxed">
          Olemme kokenut strategi- ja teknologiatalo, joka muuttaa haastavat visiot menestyneiksi digitaalisiksi ekosysteemeiksi.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button variant="primary" className="w-full sm:w-auto text-base px-10 py-5">
            Varaa konsultaatio
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto text-base px-10 py-5" href="#referenssit">
            Katso referenssit <ArrowUpRight size={20} />
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
