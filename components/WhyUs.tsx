import React from 'react';
import { ShieldCheck, Target, TrendingUp, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: "Confiança e Sigilo",
    desc: "Tratamento ético e sigiloso de todas as informações."
  },
  {
    icon: Target,
    title: "Estratégia Personalizada",
    desc: "Análise única para cada caso, buscando a melhor solução jurídica."
  },
  {
    icon: TrendingUp,
    title: "Resultados Reais",
    desc: "Foco na eficiência e na obtenção dos objetivos do cliente."
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Humano",
    desc: "Acolhimento e clareza em todas as etapas do processo."
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-jc-black text-white relative overflow-hidden">
      {/* Wine Spotlight Effect (20% Wine feel) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-jc-wine/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-jc-wine/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-jc-gold font-serif text-4xl font-bold mb-6 relative inline-block">
              Por que nos escolher?
              <span className="block h-1 w-20 bg-jc-wine mt-2"></span>
            </h2>
            <p className="text-gray-300 mb-10 text-lg font-light leading-relaxed">
              Entendemos que por trás de cada processo existe uma história de vida, um patrimônio construído com esforço ou uma relação familiar que precisa de cuidado. Nossa missão é oferecer suporte jurídico robusto sem perder a humanidade.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/10">
                  <div className="p-3 bg-jc-wine/20 rounded-full text-jc-gold shrink-0 border border-jc-wine/30">
                     <reason.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{reason.title}</h4>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative group">
             <div className="absolute -inset-4 border-2 border-jc-gold/30 rounded-sm transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
             <div className="absolute inset-0 bg-jc-wine/20 mix-blend-overlay z-20 pointer-events-none"></div>
             <img 
               src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop" 
               alt="Justiça e Direito" 
               className="rounded-sm shadow-2xl relative z-10 filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 w-full"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;