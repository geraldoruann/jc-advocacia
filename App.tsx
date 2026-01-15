import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-jc-black text-gray-100 font-sans selection:bg-jc-gold selection:text-jc-wine">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <About />
        <Blog />
        <Contact />
      </main>
      <GeminiChat />
    </div>
  );
};

export default App;