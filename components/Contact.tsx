import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Wand2, Loader2, Send } from 'lucide-react';
import { refineContactMessage } from '../services/geminiService';

const Contact: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isRefining, setIsRefining] = useState(false);

  const handleRefine = async () => {
    if (!message.trim()) return;
    setIsRefining(true);
    const refined = await refineContactMessage(message);
    setMessage(refined);
    setIsRefining(false);
  };

  return (
    <>
    <section id="contact" className="py-24 bg-jc-black relative">
       {/* Background accent */}
       <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-jc-wine/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-white font-serif text-4xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-gray-400 mb-10 text-lg font-light leading-relaxed">
              Agende sua consulta ou tire suas dúvidas. Estamos prontos para oferecer a melhor orientação jurídica para o seu caso.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-jc-darkGray rounded-full text-jc-gold border border-white/5 group-hover:border-jc-gold/50 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Endereço</h4>
                  <p className="text-gray-400 mt-1">Av. Paulista, 1000, Sala 405<br />Bela Vista, São Paulo - SP</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-jc-darkGray rounded-full text-jc-gold border border-white/5 group-hover:border-jc-gold/50 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Telefone / WhatsApp</h4>
                  <p className="text-gray-400 mt-1">+55 (79) 8157-4766</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-jc-darkGray rounded-full text-jc-gold border border-white/5 group-hover:border-jc-gold/50 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">E-mail</h4>
                  <p className="text-gray-400 mt-1">contato@jefersoncardoso.adv.br</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 rounded-sm overflow-hidden border border-white/10 shadow-2xl">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197586022882!2d-46.6565156!3d-23.5639149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="250" 
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(85%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-jc-darkGray p-8 md:p-12 rounded-sm shadow-2xl border border-white/5 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-jc-gold/5 rounded-bl-full"></div>
            <h3 className="text-2xl font-serif font-bold text-white mb-8">Envie uma mensagem</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-jc-gold uppercase tracking-widest mb-2">Nome Completo</label>
                <input type="text" className="w-full px-4 py-4 bg-jc-black border border-white/10 text-white focus:border-jc-gold focus:ring-0 outline-none transition-colors placeholder-gray-600 rounded-sm" placeholder="Seu nome" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-jc-gold uppercase tracking-widest mb-2">E-mail</label>
                  <input type="email" className="w-full px-4 py-4 bg-jc-black border border-white/10 text-white focus:border-jc-gold focus:ring-0 outline-none transition-colors placeholder-gray-600 rounded-sm" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-jc-gold uppercase tracking-widest mb-2">Telefone</label>
                  <input type="tel" className="w-full px-4 py-4 bg-jc-black border border-white/10 text-white focus:border-jc-gold focus:ring-0 outline-none transition-colors placeholder-gray-600 rounded-sm" placeholder="(79) 8157-4766" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-jc-gold uppercase tracking-widest mb-2">Mensagem</label>
                <div className="relative">
                  <textarea 
                    rows={5} 
                    className="w-full px-4 py-4 bg-jc-black border border-white/10 text-white focus:border-jc-gold focus:ring-0 outline-none transition-colors placeholder-gray-600 resize-none rounded-sm" 
                    placeholder="Descreva brevemente seu caso..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button
                    type="button"
                    onClick={handleRefine}
                    disabled={isRefining || !message}
                    className="absolute bottom-3 right-3 text-xs bg-jc-wine text-white px-3 py-1 rounded-sm flex items-center gap-1 hover:bg-jc-gold hover:text-jc-wine transition-colors disabled:opacity-50 shadow-lg"
                    title="Usar IA para tornar a mensagem mais formal"
                  >
                     {isRefining ? <Loader2 size={12} className="animate-spin"/> : <Wand2 size={12} />}
                     IA Refinar
                  </button>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-jc-gold to-[#bfa14f] text-jc-wine font-bold py-4 uppercase tracking-wider hover:brightness-110 transition-all shadow-lg rounded-sm mt-4 flex justify-center items-center gap-2">
                Enviar Solicitação <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>

    {/* Footer - The 20% Wine Block */}
    <footer className="bg-jc-wine text-jc-gold border-t border-jc-wineLight relative">
       {/* Top Gold Line */}
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-jc-gold to-transparent opacity-50"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="font-serif text-3xl font-bold border-2 border-jc-gold px-3 py-1">JC</div>
             </div>
             <p className="text-white/80 text-sm leading-relaxed mb-6 font-light">
               Jeferson Cardoso Advocacia.<br/>
               Compromisso com a ética, a justiça e o direito de nossos clientes.
             </p>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full border border-jc-gold/30 flex items-center justify-center text-jc-gold hover:bg-jc-gold hover:text-jc-wine transition-all"><Instagram size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full border border-jc-gold/30 flex items-center justify-center text-jc-gold hover:bg-jc-gold hover:text-jc-wine transition-all"><Facebook size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full border border-jc-gold/30 flex items-center justify-center text-jc-gold hover:bg-jc-gold hover:text-jc-wine transition-all"><Linkedin size={18} /></a>
             </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#home" className="hover:text-jc-gold transition-colors block py-1">Início</a></li>
              <li><a href="#services" className="hover:text-jc-gold transition-colors block py-1">Áreas de Atuação</a></li>
              <li><a href="#about" className="hover:text-jc-gold transition-colors block py-1">Sobre o Advogado</a></li>
              <li><a href="#blog" className="hover:text-jc-gold transition-colors block py-1">Blog Jurídico</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Áreas</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="py-1">Direito Imobiliário</li>
              <li className="py-1">Direito de Família</li>
              <li className="py-1">Sucessões e Inventários</li>
              <li className="py-1">Regularização Fundiária</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">LGPD</h4>
            <p className="text-white/60 text-xs leading-relaxed border-l-2 border-jc-gold/30 pl-4">
              Respeitamos sua privacidade. Seus dados são tratados com total segurança e confidencialidade, em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-16 pt-8 text-center text-xs text-white/40 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Jeferson Cardoso Advocacia. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com excelência.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Contact;