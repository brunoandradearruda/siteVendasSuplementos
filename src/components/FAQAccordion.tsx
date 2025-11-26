"use client"; // Isso permite usar interatividade (useState)

import { useState } from 'react';

interface FAQItem {
  pergunta: string;
  resposta: string;
}

interface FAQAccordionProps {
  itens: FAQItem[];
}

export default function FAQAccordion({ itens }: FAQAccordionProps) {
  // Estado para controlar qual pergunta está aberta (null = todas fechadas)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    // Se clicar no que já está aberto, fecha. Se não, abre o novo.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {itens.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md">
            {/* Cabeçalho da Pergunta (Clicável) */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between bg-white focus:outline-none group"
            >
              <h3 className={`font-bold text-lg transition-colors ${isOpen ? 'text-emerald-600' : 'text-slate-800 group-hover:text-emerald-600'}`}>
                {item.pergunta}
              </h3>
              
              {/* Ícone da Seta (Gira quando abre) */}
              <span className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-emerald-100 text-emerald-600' : 'text-slate-500'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>

            {/* Conteúdo da Resposta (Abre/Fecha) */}
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-slate-600 leading-relaxed pl-2 border-l-2 border-emerald-200">
                {item.resposta}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}