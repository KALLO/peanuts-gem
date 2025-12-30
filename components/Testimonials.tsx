
import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: '1', name: 'Matti Meikäläinen', role: 'CTO', company: 'LogiFlow Oy', content: 'Peanuts Groupin kyky ymmärtää monimutkaisia liiketoimintaprosesseja ja kääntää ne saumattomaksi käyttäjäkokemukseksi on vertaansa vailla.', avatar: 'https://picsum.photos/100/100?random=1' },
  { id: '2', name: 'Laura Laitinen', role: 'Head of Digital', company: 'Global Retail', content: 'Tekninen osaaminen yhdistettynä strategiseen näkemykseen teki Peanutsista meille täydellisen kumppanin digitaaliseen uudistumiseen.', avatar: 'https://picsum.photos/100/100?random=2' },
  { id: '3', name: 'Antti Aaltonen', role: 'CEO', company: 'InnoTech Solutions', content: 'He eivät vain tee mitä pyydetään, vaan he haastavat meitä ajattelemaan laajemmin ja tavoittelemaan suurempia tuloksia.', avatar: 'https://picsum.photos/100/100?random=3' },
];

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="p-8 glass-card rounded-[8px] relative group hover:-translate-y-2 transition-transform duration-500">
            <Quote className="text-peanuts-accent/20 absolute top-6 right-6 w-12 h-12" />
            <p className="text-gray-600 dark:text-gray-300 italic mb-8 relative z-10">
              "{t.content}"
            </p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-peanuts-accent/20" />
              <div>
                <h4 className="font-heading font-bold text-gray-900 dark:text-white leading-none mb-1">{t.name}</h4>
                <p className="text-xs text-peanuts-accent font-medium">{t.role}, {t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
