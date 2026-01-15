import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Planejamento Sucessório: Por que fazer?",
    excerpt: "Entenda como o planejamento sucessório pode evitar conflitos familiares e reduzir custos com inventário no futuro.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    date: "12 AGO, 2024",
    category: "Sucessões"
  },
  {
    id: 2,
    title: "Usucapião Extrajudicial: O Guia Completo",
    excerpt: "Saiba quais são os requisitos para regularizar seu imóvel diretamente no cartório, sem a necessidade de processo judicial.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    date: "05 SET, 2024",
    category: "Imobiliário"
  },
  {
    id: 3,
    title: "Guarda Compartilhada x Unilateral",
    excerpt: "As principais diferenças entre os tipos de guarda e o que a legislação brasileira prioriza para o bem-estar dos filhos.",
    image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1974&auto=format&fit=crop",
    date: "20 SET, 2024",
    category: "Família"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-jc-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-white font-serif text-4xl font-bold">Nosso Blog</h2>
            <p className="text-gray-400 mt-2 font-light">Artigos e atualizações jurídicas.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-jc-gold font-bold hover:text-white transition-colors text-sm uppercase tracking-wide">
            Ver todos os artigos <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-jc-darkGray rounded-sm overflow-hidden hover:shadow-[0_0_20px_rgba(106,10,30,0.2)] transition-all duration-300 group flex flex-col h-full border border-white/5">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-jc-wine/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <span className="absolute top-4 left-4 bg-jc-black/80 backdrop-blur-sm text-jc-gold text-[10px] font-bold px-3 py-1 uppercase tracking-wider z-20 border border-jc-gold/20">
                  {post.category}
                </span>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-jc-wineLight text-xs font-bold tracking-widest mb-3 block">{post.date}</span>
                <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-jc-gold transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:text-jc-gold transition-colors">
                  Ler Mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-jc-gold font-bold hover:text-white transition-colors">
            Ver todos os artigos <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;