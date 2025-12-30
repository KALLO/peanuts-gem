
import React from 'react';

const logos = [
  { name: 'Business Tampere', src: '/assets/customers/business-tampere.png' },
  { name: 'Digia', src: '/assets/customers/digia-logo 1.png' },
  { name: 'Martat', src: '/assets/customers/2020-Martat-vaakalogo-ISO-sininen-PNG-1024x340 1.png' },
  { name: 'Lempi', src: '/assets/customers/lempi-logo.png' },
  { name: 'Safetum', src: '/assets/customers/safetum.png' },
  { name: 'Tampere', src: '/assets/customers/tampere 1.png' },
  { name: 'Logo Mobiili', src: '/assets/customers/logo_mobiili 1.png' },
  /* Unclear filenames, including them as requested */
  { name: 'Client 1', src: '/assets/customers/Clip path group.png' },
  { name: 'Client 2', src: '/assets/customers/Frame.png' },
  { name: 'Client 3', src: '/assets/customers/image 1.png' },
  { name: 'Client 4', src: '/assets/customers/image 4.png' },
];

const LogoCarousel: React.FC = () => {
  return (
    <section className="py-20 border-y border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-center font-heading font-bold text-xs uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500">
          Asiakkaitamme
        </h2>
      </div>

      <div className="relative flex w-full">
        <div className="animate-marquee flex items-center whitespace-nowrap min-w-full">
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="mx-8 md:mx-12 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-12 w-auto object-contain max-w-[150px]"
                loading="lazy"
              />
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
