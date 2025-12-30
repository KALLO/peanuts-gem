
import React from 'react';
import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#130814] pt-24 pb-12 border-t border-gray-100 dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-8 h-8 bg-peanuts-accent rounded flex items-center justify-center font-heading font-black text-black text-lg transition-transform group-hover:rotate-12">
                P
              </div>
              <span className="font-heading font-bold text-xl tracking-tighter text-gray-900 dark:text-white">
                PEANUTS<span className="text-peanuts-accent">.</span>
              </span>
            </a>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              Olemme kumppanisi matkalla kohti digitaalista huomista. Rakennamme arvoa teknologian avulla.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Instagram, Twitter, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-500 dark:text-white hover:text-peanuts-accent hover:border-peanuts-accent transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-gray-900 dark:text-white uppercase tracking-widest text-xs mb-8">Palvelut</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-peanuts-accent transition-colors">Strategia</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-peanuts-accent transition-colors">Teknologia</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-peanuts-accent transition-colors">Design</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-peanuts-accent transition-colors">Data & AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-gray-900 dark:text-white uppercase tracking-widest text-xs mb-8">Yritys</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-peanuts-accent transition-colors">Meistä</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-peanuts-accent transition-colors">Urat</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-peanuts-accent transition-colors">Referenssit</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-peanuts-accent transition-colors">Ota yhteyttä</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-gray-900 dark:text-white uppercase tracking-widest text-xs mb-8">Yhteystiedot</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li>Aleksanterinkatu 12, 00100 Helsinki</li>
              <li>info@peanutsgroup.com</li>
              <li>+358 40 123 4567</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-100 dark:border-white/5 pt-12 text-xs font-medium text-gray-400 uppercase tracking-widest">
          <p>© 2024 Peanuts Group Oy. Kaikki oikeudet pidätetään.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-peanuts-accent transition-colors">Tietosuoja</a>
            <a href="#" className="hover:text-peanuts-accent transition-colors">Evästeet</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
