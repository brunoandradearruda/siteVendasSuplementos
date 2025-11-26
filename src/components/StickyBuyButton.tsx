"use client";

import { useState, useEffect } from 'react';

interface StickyBuyButtonProps {
  price: number;
  link: string;
  name: string;
}

export default function StickyBuyButton({ price, link, name }: StickyBuyButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão após rolar 300px para baixo
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 z-50 md:hidden animate-slide-up">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 truncate max-w-[120px]">{name}</span>
          <span className="text-xl font-bold text-emerald-600">R$ {price.toFixed(2).replace('.', ',')}</span>
        </div>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-emerald-700 transition-colors text-sm"
        >
          Ver no ML
        </a>
      </div>
    </div>
  );
}