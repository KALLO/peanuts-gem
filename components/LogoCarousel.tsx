
import React from 'react';

const logos = [
  'Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5', 'Logo 6', 'Logo 7', 'Logo 8'
];

const LogoCarousel: React.FC = () => {
  return (
    <section className="py-20 border-y border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-transparent">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-center font-heading font-bold text-xs uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500">
          Asiakkaitamme
        </h2>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="mx-12 text-2xl font-heading font-black text-gray-300 dark:text-white/20 hover:text-peanuts-accent transition-colors flex items-center gap-2 grayscale hover:grayscale-0">
              <div className="w-8 h-8 rounded bg-current opacity-20"></div>
              {logo}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
