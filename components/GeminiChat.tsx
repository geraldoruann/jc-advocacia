import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Scale } from 'lucide-react';
import { ChatMessage } from '../types';
import { generateLegalChatResponse } from '../services/geminiService';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Olá! Sou o assistente virtual do escritório JC. Posso tirar dúvidas básicas sobre nossas áreas de atuação (Imobiliário e Família). Como posso ajudar hoje?',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    
    const responseText = await generateLegalChatResponse(history, userMsg.text);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-jc-darkGray rounded-lg shadow-2xl border border-jc-gold/30 overflow-hidden flex flex-col animate-fade-in-up h-[500px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-jc-wine to-black p-4 flex justify-between items-center shadow-md border-b border-jc-gold/20">
            <div className="flex items-center gap-3">
              <div className="bg-black/30 p-2 rounded-full border border-white/10">
                <Scale size={18} className="text-jc-gold" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">Assistente JC</h3>
                <span className="text-[10px] text-green-400 flex items-center gap-1 uppercase tracking-wider font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-black/40">
            {messages.map((msg) => (
              <div key={msg.id} className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-lg p-3 text-sm shadow-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-jc-wine text-white rounded-br-none border border-jc-wineLight' 
                      : 'bg-jc-black text-gray-200 border border-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-jc-black border border-gray-800 rounded-lg p-3 rounded-bl-none shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-jc-gold" />
                  <span className="text-xs text-gray-500">Digitando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Disclaimer */}
          <div className="bg-black px-4 py-2 text-[10px] text-gray-600 text-center border-t border-gray-900">
             IA em treinamento. Não substitui consulta jurídica.
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-jc-darkGray border-t border-gray-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua dúvida..."
              className="flex-1 bg-black border border-gray-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-jc-wine focus:ring-1 focus:ring-jc-wine placeholder-gray-600"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-jc-gold text-jc-wine p-2 rounded-full hover:bg-jc-wine hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-gradient-to-r from-jc-wine to-[#500010] text-white px-6 py-4 rounded-full shadow-[0_0_20px_rgba(106,10,30,0.5)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] border border-jc-wineLight hover:border-jc-gold transition-all duration-300 transform hover:-translate-y-1"
      >
        <span className={`${isOpen ? 'hidden' : 'hidden md:block'} font-bold text-sm uppercase tracking-wide`}>Dúvidas Jurídicas?</span>
        {isOpen ? <X size={24} /> : <MessageSquare size={24} className="text-jc-gold" />}
      </button>
    </div>
  );
};

export default GeminiChat;