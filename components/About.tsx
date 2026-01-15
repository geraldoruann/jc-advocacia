import React from 'react';
import { Award, BookOpen, Scale } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-jc-black text-white relative">
       {/* Decorative Gold Line */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent to-jc-gold"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo */}
          <div className="w-full md:w-5/12 relative group">
            <div className="absolute inset-0 bg-jc-gold transform translate-x-3 translate-y-3 rounded-sm group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" 
              alt="Jeferson Cardoso" 
              className="relative rounded-sm shadow-xl w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Bio */}
          <div className="w-full md:w-7/12">
            <h3 className="text-jc-gold text-sm font-bold uppercase tracking-widest mb-2">Fundador</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Dr. Jeferson Cardoso</h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              Com mais de uma década de experiência na advocacia, Jeferson Cardoso consolidou sua carreira atuando com rigor técnico e humanidade nas áreas de Direito Imobiliário e Família.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              Sua trajetória é marcada pela busca incessante de soluções que tragam paz social e segurança jurídica aos seus clientes, aliando tradição jurídica com estratégias modernas de resolução de conflitos.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
                <Award className="text-jc-gold" size={24} />
                <div>
                  <h4 className="font-bold text-white">Especialista em Direito Imobiliário</h4>
                  <p className="text-sm text-gray-500">Pós-graduado pela PUC-SP</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
                <Scale className="text-jc-gold" size={24} />
                <div>
                  <h4 className="font-bold text-white">Membro da Comissão de Família da OAB</h4>
                  <p className="text-sm text-gray-500">Atuação ativa na defesa dos direitos familiares</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BookOpen className="text-jc-gold" size={24} />
                <div>
                  <h4 className="font-bold text-white">Autor de Artigos Jurídicos</h4>
                  <p className="text-sm text-gray-500">Contribuições acadêmicas sobre Sucessões</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;