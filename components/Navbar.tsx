import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Áreas de Atuação', href: '#services' },
    { name: 'Por que nos escolher', href: '#why-us' },
    { name: 'Resultados', href: '#testimonials' },
    { name: 'Sobre', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-jc-black/95 backdrop-blur-md py-3 shadow-lg border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="w-full px-6 lg:px-16">
        <div className="flex items-center h-16">
          {/* Logo & Name - Far Left */}
          <div className="flex-shrink-0 flex items-center gap-4">
            {/* Crest Logo (Brasão) - Scaled for Navbar */}
            <div className="h-14 w-14 relative flex items-center justify-center filter drop-shadow-md hover:scale-105 transition-transform duration-300">
               <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Outer Shield */}
                <path d="M100 10 L170 40 V90 C170 145 100 190 100 190 C100 190 30 145 30 90 V40 L100 10Z" stroke="#D4AF37" strokeWidth="12" fill="#6A0A1E"/>
                {/* Inner Decorative Line */}
                <path d="M100 22 L158 47 V88 C158 135 100 175 100 175 C100 175 42 135 42 88 V47 L100 22Z" stroke="#D4AF37" strokeWidth="6" opacity="0.6"/>
                {/* Initials */}
                <text x="100" y="118" fontSize="70" fontFamily="serif" fontWeight="bold" fill="#D4AF37" textAnchor="middle" letterSpacing="4">JC</text>
                {/* Star/Crown Detail */}
                <path d="M100 35 L103 42 L110 42 L105 47 L107 54 L100 50 L93 54 L95 47 L90 42 L97 42 Z" fill="#D4AF37" />
              </svg>
            </div>
            
            <div className={`hidden md:block font-serif text-2xl tracking-widest text-white`}>
              JEFERSON CARDOSO
            </div>
          </div>

          {/* Spacer to push Menu and CTA to the right */}
          <div className="flex-1"></div>

          {/* Desktop Menu - Positioned on the Right */}
          <div className="hidden lg:flex items-center space-x-8 mr-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-jc-gold transition-colors text-sm uppercase tracking-wider font-sans font-semibold relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-jc-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="px-8 py-3 border border-jc-gold text-jc-gold hover:bg-jc-gold hover:text-jc-wine transition-all rounded-sm font-semibold text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-jc-gold hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden bg-jc-black/95 backdrop-blur-xl absolute top-full left-0 w-full shadow-2xl border-t border-white/10 animate-fade-in-down h-screen">
          <div className="px-6 py-8 space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-100 hover:text-jc-gold block px-3 py-4 text-lg font-medium uppercase tracking-wide border-b border-white/5 w-full text-center"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5511999999999"
              className="mt-6 px-8 py-4 bg-jc-gold text-jc-wine font-bold rounded-sm w-full text-center uppercase text-lg shadow-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;