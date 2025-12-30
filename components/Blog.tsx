
import React from 'react';
import { BlogArticle } from '../types';

const articles: BlogArticle[] = [
  { id: '1', title: 'Generatiivinen tekoäly liiketoiminnassa: Mistä aloittaa?', tags: ['AI', 'Strategia'], date: '2024-03-20', image: 'https://picsum.photos/600/400?random=21' },
  { id: '2', title: 'Miksi valita Headless CMS vuonna 2024?', tags: ['Technology', 'Web'], date: '2024-03-12', image: 'https://picsum.photos/600/400?random=22' },
  { id: '3', title: 'Parempaa UX-suunnittelua datan avulla', tags: ['UX Design', 'Data'], date: '2024-02-25', image: 'https://picsum.photos/600/400?random=23' },
  { id: '4', title: 'React Native vs. Flutter: Kehittäjän näkökulma', tags: ['Mobile', 'Dev'], date: '2024-02-15', image: 'https://picsum.photos/600/400?random=24' },
  { id: '5', title: 'Kyberturvallisuus on osa koodia, ei lisäosa', tags: ['Security', 'Backend'], date: '2024-01-30', image: 'https://picsum.photos/600/400?random=25' },
  { id: '6', title: 'Moderni pilvi-infrastruktuuri skaalautuvuuden takeena', tags: ['Cloud', 'DevOps'], date: '2024-01-15', image: 'https://picsum.photos/600/400?random=26' },
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 dark:text-white mb-4 tracking-tighter">
            Ajankohtaista<span className="text-peanuts-accent">.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">
            Jaamme näkemyksiämme teknologiasta, strategiasta ja digitaalisen maailman ilmiöistä.
          </p>
        </div>
        <a href="#" className="font-heading font-bold text-peanuts-accent uppercase tracking-widest text-sm border-b-2 border-peanuts-accent pb-1">
          Kaikki artikkelit
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article) => (
          <article key={article.id} className="group">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 flex gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-black/50 backdrop-blur-md rounded text-[9px] text-white font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white group-hover:text-peanuts-accent transition-colors leading-tight mb-2">
              {article.title}
            </h3>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              {new Date(article.date).toLocaleDateString('fi-FI')}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
