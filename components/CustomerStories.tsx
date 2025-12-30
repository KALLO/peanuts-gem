
import React from 'react';
import { CustomerStory } from '../types';

const stories: CustomerStory[] = [
  { id: '1', title: 'Energia-alan digitaalinen loikka', tags: ['Mobiili', 'IoT'], date: '2024-03-15', image: 'https://picsum.photos/600/400?random=11' },
  { id: '2', title: 'Headless-verkkokauppa miljoonamyyntiin', tags: ['E-commerce', 'React'], date: '2024-02-28', image: 'https://picsum.photos/600/400?random=12' },
  { id: '3', title: 'AI-agentti asiakaspalvelun tukena', tags: ['AI', 'Python'], date: '2024-01-10', image: 'https://picsum.photos/600/400?random=13' },
  { id: '4', title: 'Globaali data-alusta logistiikkaan', tags: ['Big Data', 'Azure'], date: '2023-12-05', image: 'https://picsum.photos/600/400?random=14' },
  { id: '5', title: 'Moderni jäsenpalvelu liittoyhteisölle', tags: ['Web', 'Accessibility'], date: '2023-11-20', image: 'https://picsum.photos/600/400?random=15' },
  { id: '6', title: 'Älykäs kiinteistönhallinnan ekosysteemi', tags: ['Smart Home', 'UX Design'], date: '2023-10-15', image: 'https://picsum.photos/600/400?random=16' },
];

const CustomerStories: React.FC = () => {
  return (
    <div id="referenssit" className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
          Mitä asiakkaamme meistä sanovat<span className="text-peanuts-accent">.</span>
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Asiakasluottamus ei synny tyhjästä, vaan se ansaitaan luotettavalla tekemisellä, hyvällä yhteistyöllä ja saaduilla tuloksilla.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <article 
            key={story.id} 
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden mb-6">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-peanuts-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="flex gap-2">
                  {story.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] text-white font-bold uppercase tracking-wider border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-3">
               <time className="text-xs font-heading font-bold uppercase tracking-widest text-peanuts-accent">
                {new Date(story.date).toLocaleDateString('fi-FI')}
               </time>
            </div>
            
            <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white leading-tight group-hover:text-peanuts-accent transition-colors">
              {story.title}
            </h3>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CustomerStories;
