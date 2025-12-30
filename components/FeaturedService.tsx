
import React from 'react';
import Button from './Button';
import { Cpu, Zap, LineChart, Binary } from 'lucide-react';

const FeaturedService: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-[#1a0c1c] to-[#130814] border border-peanuts-accent/20 p-8 md:p-16">
        {/* Animated Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#FA92FF', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#FFCA51', stopOpacity:1}} />
              </linearGradient>
            </defs>
            <path d="M10,90 Q50,10 90,90" fill="none" stroke="url(#grad)" strokeWidth="0.5" className="animate-pulse" />
            <path d="M20,80 Q50,20 80,80" fill="none" stroke="url(#grad)" strokeWidth="0.5" />
            <path d="M30,70 Q50,30 70,70" fill="none" stroke="url(#grad)" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peanuts-secondary/10 border border-peanuts-secondary/20 text-peanuts-secondary text-[10px] font-heading font-bold uppercase tracking-widest mb-6">
              <Zap size={14} /> Tulevaisuuden ratkaisut
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
              Data-alustat ja <span className="text-peanuts-secondary">Generatiivinen AI</span>.
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
              Emme vain integroi valmiita malleja. Luomme kustomoituja data-alustoja ja tekoälyagentteja, jotka ymmärtävät yrityksenne uniikin datan ja tuottavat aitoa mitattavaa arvoa.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <Cpu className="text-peanuts-accent shrink-0" />
                <span className="text-sm font-medium text-gray-300">Agenttisovellukset</span>
              </div>
              <div className="flex items-start gap-3">
                <LineChart className="text-peanuts-accent shrink-0" />
                <span className="text-sm font-medium text-gray-300">Ennustava analytiikka</span>
              </div>
              <div className="flex items-start gap-3">
                <Binary className="text-peanuts-accent shrink-0" />
                <span className="text-sm font-medium text-gray-300">Data-arkkitehtuurit</span>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="text-peanuts-accent shrink-0" />
                <span className="text-sm font-medium text-gray-300">Prosessiautomaatio</span>
              </div>
            </div>

            <Button variant="primary">Tutustu AI-strategiaamme</Button>
          </div>

          <div className="hidden lg:block">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 rounded-xl glass-card border-peanuts-accent/20 flex items-center justify-center p-6 text-center group hover:scale-105 transition-transform">
                    <div className="space-y-2">
                      <div className="text-3xl font-heading font-black text-peanuts-accent">+400%</div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500">Tehokkuuden kasvu</div>
                    </div>
                  </div>
                  <div className="h-64 rounded-xl bg-peanuts-accent/5 border border-peanuts-accent/10 p-6 flex items-end">
                    <div className="font-heading font-bold text-lg text-white">Reaaliaikainen data-insight</div>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-64 rounded-xl bg-peanuts-secondary/5 border border-peanuts-secondary/10 p-6">
                    <div className="w-12 h-12 rounded-lg bg-peanuts-secondary/20 mb-4 flex items-center justify-center">
                      <Zap className="text-peanuts-secondary" />
                    </div>
                    <div className="font-heading font-bold text-lg text-white">Älykkäät automaatiot</div>
                  </div>
                  <div className="h-48 rounded-xl glass-card border-peanuts-secondary/20 flex items-center justify-center p-6 text-center group hover:scale-105 transition-transform">
                    <div className="space-y-2">
                      <div className="text-3xl font-heading font-black text-peanuts-secondary">99.9%</div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500">Luotettavuus</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
