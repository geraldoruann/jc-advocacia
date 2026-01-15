import React from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop')", // Executive/Legal vibe
        }}
      ></div>

      {/* Overlay - Dark Luxury Gradient */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-jc-black via-jc-black/50 to-jc-wine/30 z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-jc-black to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end">
        <div className="animate-fade-in-up flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* JC Brasão (Crest) Logo - Positioned to the LEFT of the text */}
          <div className="relative group cursor-default shrink-0 order-1 md:order-1">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-jc-gold/20 blur-3xl rounded-full animate-pulse-slow z-0 scale-75 group-hover:scale-100 transition-transform duration-700"></div>
            
            {/* Animated Container */}
            <div className="animate-float relative z-10">
              <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl filter transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                {/* Outer Shield */}
                <path d="M100 10 L170 40 V90 C170 145 100 190 100 190 C100 190 30 145 30 90 V40 L100 10Z" stroke="#D4AF37" strokeWidth="3" fill="rgba(106, 10, 30, 0.6)" className="group-hover:fill-jc-wine transition-colors duration-500"/>
                {/* Inner Decorative Line */}
                <path d="M100 22 L158 47 V88 C158 135 100 175 100 175 C100 175 42 135 42 88 V47 L100 22Z" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" className="group-hover:opacity-100 transition-opacity duration-500"/>
                {/* Initials */}
                <text x="100" y="118" fontSize="70" fontFamily="serif" fontWeight="bold" fill="#D4AF37" textAnchor="middle" letterSpacing="4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} className="group-hover:text-white transition-colors duration-500">JC</text>
                {/* Star/Crown Detail - Rotates on hover */}
                <path d="M100 35 L103 42 L110 42 L105 47 L107 54 L100 50 L93 54 L95 47 L90 42 L97 42 Z" fill="#D4AF37" className="origin-[100px_45px] group-hover:animate-spin-slow" />
                {/* Bottom Flourish */}
                <path d="M70 140 Q100 160 130 140" stroke="#D4AF37" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Text Content - Right side */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-2xl order-2 md:order-2">
            <h2 className="text-jc-gold font-sans uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-bold flex items-center gap-4 justify-end">
              <span className="hidden md:block h-[1px] w-12 bg-jc-gold"></span>
              Advocacia Especializada
              <span className="md:hidden h-[1px] w-12 bg-jc-gold"></span>
            </h2>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Excelência em Direito <br />
              <span className="text-jc-gold">Imobiliário, Família e Sucessões</span>
            </h1>
            
            <p className="mt-4 max-w-xl text-xl text-gray-300 font-light mb-10 md:border-r-2 md:border-jc-gold md:pr-6 md:pl-0">
              Proteção jurídica com transparência, estratégia e confiança para o seu patrimônio e sua família.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
               <a 
                href="https://wa.me/5511999999999" 
                className="order-2 sm:order-1 px-8 py-4 bg-transparent border border-jc-gold text-jc-gold font-bold text-lg rounded-sm hover:bg-jc-wine hover:border-jc-wine hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a 
                href="#contact" 
                className="order-1 sm:order-2 px-8 py-4 bg-jc-gold text-jc-wine font-bold text-lg rounded-sm hover:bg-white hover:text-jc-wine transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
              >
                Agendar Consulta
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;