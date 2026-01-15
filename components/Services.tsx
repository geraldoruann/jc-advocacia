import React from 'react';
import { Home, Users, FileText, Key } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Direito Imobiliário",
    description: "Assessoria completa em compra e venda, locação, regularização de imóveis, usucapião e distratos imobiliários.",
    icon: Home
  },
  {
    title: "Direito de Família",
    description: "Atuação sensível e estratégica em divórcios, guarda de filhos, pensão alimentícia e regime de bens.",
    icon: Users
  },
  {
    title: "Sucessões e Inventários",
    description: "Planejamento sucessório, testamentos e condução de inventários judiciais e extrajudiciais com agilidade.",
    icon: FileText
  },
  {
    title: "Regularização de Imóveis",
    description: "Soluções jurídicas para regularizar documentação imobiliária junto a cartórios e órgãos públicos.",
    icon: Key
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-jc-black relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-jc-wine/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white font-serif text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Áreas de Atuação
            <span className="block h-1 w-24 bg-jc-gold mx-auto mt-4"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-sans text-lg font-light">
            Soluções jurídicas personalizadas focadas na segurança do seu patrimônio e na harmonia familiar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-jc-darkGray p-8 rounded-sm border border-white/10 hover:border-jc-gold transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.2)] hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full group-hover:bg-jc-gold/20 transition-colors duration-500"></div>

              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 text-jc-gold group-hover:bg-jc-gold group-hover:text-jc-wine transition-colors duration-500 shadow-lg border border-white/5 group-hover:border-transparent">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-jc-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              <div className="mt-6 w-8 h-[2px] bg-jc-gold group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;