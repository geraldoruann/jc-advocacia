import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Empresário",
    text: "O Dr. Jeferson foi fundamental na regularização dos imóveis da minha família. Processo que parecia impossível foi resolvido com clareza e agilidade."
  },
  {
    id: 2,
    name: "Ana Paula Silva",
    role: "Cliente de Divórcio",
    text: "Em um momento tão difícil, encontrei no escritório não apenas advogados, mas parceiros que me trouxeram paz e segurança. Gratidão eterna."
  },
  {
    id: 3,
    name: "Roberto Campos",
    role: "Investidor Imobiliário",
    text: "A análise contratual feita pela equipe evitou um prejuízo enorme. Profissionalismo e técnica jurídica impecáveis."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-jc-black relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-jc-wine/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white font-serif text-4xl font-bold mb-4">Resultados e Feedbacks</h2>
          <p className="text-gray-400 font-light text-lg">O que nossos clientes dizem sobre nossa atuação.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-jc-darkGray p-8 rounded-sm border border-white/5 hover:border-jc-gold transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] group relative">
              <Quote className="absolute top-6 right-6 text-jc-gold/10 group-hover:text-jc-gold/30 transition-colors" size={40} />
              
              <div className="flex gap-1 text-jc-gold mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" className="drop-shadow-sm" />)}
              </div>
              
              <p className="text-gray-300 italic mb-8 font-serif leading-relaxed">"{t.text}"</p>
              
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-bold text-white group-hover:text-jc-gold transition-colors">{t.name}</h4>
                <span className="text-xs text-jc-wineLight uppercase tracking-wider font-bold">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;