
import React from 'react';
import Button from './Button';

const CTA: React.FC = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="relative rounded-[24px] bg-peanuts-accent p-12 md:p-24 overflow-hidden text-center">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100">
             <path d="M0 50 Q 25 25 50 50 T 100 50" fill="none" stroke="black" strokeWidth="2" className="animate-[marquee_10s_linear_infinite]" />
             <path d="M0 60 Q 25 35 50 60 T 100 60" fill="none" stroke="black" strokeWidth="2" className="animate-[marquee_15s_linear_infinite]" />
          </svg>
        </div>

        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl font-heading font-black text-black mb-8 tracking-tighter uppercase">
            Oletko valmis <br /> valtaamaan markkinan?
          </h2>
          <p className="text-xl md:text-2xl text-black/70 max-w-2xl mx-auto mb-12 font-medium">
            Älä tyydy keskinkertaiseen. Rakennetaan yhdessä jotain, joka muuttaa alasi pelisäännöt pysyvästi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="outline" className="bg-black text-white hover:bg-white hover:text-black border-transparent !px-12 !py-5">
              Aloitetaan tänään
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white !px-12 !py-5">
              Katso palvelut
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
