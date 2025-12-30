
import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Layout, 
  Layers, 
  ShieldCheck, 
  RefreshCw, 
  Terminal 
} from 'lucide-react';

const services = [
  { icon: Code2, title: "Strateginen kehittäminen", desc: "Liiketoimintalähtöinen visio ja etenemissuunnitelma." },
  { icon: Smartphone, title: "Mobiilisovellukset ja -ekosysteemit", desc: "Native ja cross-platform ratkaisut miljoonille käyttäjille." },
  { icon: Database, title: "Data-alustat ja tekoäly", desc: "Datan valjastaminen kilpailueduksi modernilla AI-teknologialla." },
  { icon: Layers, title: "Headless verkkopalvelut", desc: "Skaalautuvat ja nopeat palvelut moderneilla rajapinnoilla." },
  { icon: Layout, title: "Suunnittelupalvelut", desc: "Käyttäjäkokemus ja visuaalinen identiteetti keskiössä." },
  { icon: ShieldCheck, title: "Tekninen tuki", desc: "Varmistamme palveluiden häiriöttömän toiminnan 24/7." },
  { icon: RefreshCw, title: "Jatkuvat palvelut", desc: "Evolutiivinen kehitys osana liiketoimintaasi." },
  { icon: Terminal, title: "Ohjelmistokonsultointi", desc: "Huippuluokan osaajat osaksi omaa tiimiäsi." }
];

const Services: React.FC = () => {
  return (
    <section id="palvelut" className="container mx-auto px-6">
      <div className="max-w-4xl mb-20">
        <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
          Erikoisosaamisemme<span className="text-peanuts-accent">.</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-peanuts-text leading-relaxed">
          Vaikka tarjoamme asiantuntijuutta kaikissa digitaalisen muutoksen vaiheissa, keskitymme ensisijaisesti tavoitteelliseen palvelukehitykseen, hyödyntäen kymmenien menestyneiden palveluiden kehittämisessä testattua tekkistäkkiämme.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <a 
            key={idx} 
            href="#" 
            className="group relative p-8 glass-card rounded-[8px] border border-gray-100 dark:border-white/5 hover:border-peanuts-accent/50 transition-all duration-500 overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-peanuts-accent/5 rounded-full blur-2xl translate-x-16 -translate-y-16 group-hover:bg-peanuts-accent/10 transition-colors"></div>
            
            <service.icon className="w-10 h-10 text-peanuts-accent mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6" strokeWidth={1.5} />
            <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-peanuts-accent transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {service.desc}
            </p>
            
            <div className="mt-8 flex items-center text-xs font-heading font-bold uppercase tracking-widest text-peanuts-accent opacity-0 group-hover:opacity-100 transition-opacity">
              Lue lisää →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;
