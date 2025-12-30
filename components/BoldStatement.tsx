
import React from 'react';

const BoldStatement: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-peanuts-accent to-transparent"></div>
      
      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        <h2 className="text-5xl md:text-7xl font-heading font-black text-gray-900 dark:text-white mb-10 leading-[1.1] tracking-tighter">
          Kysymme ensisijaisesti miksi. <span className="text-transparent bg-clip-text bg-gradient-to-r from-peanuts-accent to-peanuts-secondary italic">Emme vain mitä.</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-peanuts-text leading-relaxed font-light">
          Kun aloitamme yhteistyön, rakennamme yhdessä teidän liiketoimintanne tulevaisuutta ja jotta voisimme ennakoida tulevaa mahdollisimman hyvin, on tärkeää selvittää miksi ollaan tekemässä haluttuja asioita. Tärkeää on varmistaa että työskentelemme liiketoimintanne kannalta merkityksellisiä tavoitteita kohti. <span className="font-bold text-gray-900 dark:text-white">Tuloksia ei synny pelkällä uskolla.</span>
        </p>
      </div>
    </section>
  );
};

export default BoldStatement;
