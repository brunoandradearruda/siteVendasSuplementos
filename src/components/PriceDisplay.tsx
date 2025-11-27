"use client";

import { useState, useEffect } from 'react';

interface PriceDisplayProps {
  mlId?: string;
  initialPrice: number;
}

export default function PriceDisplay({ mlId, initialPrice }: PriceDisplayProps) {
  const [price, setPrice] = useState(initialPrice);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (!mlId) return;

    // Esta função roda no navegador do visitante
    const fetchPrice = async () => {
      try {
        const response = await fetch(`https://api.mercadolibre.com/items/${mlId}`);
        if (response.ok) {
          const data = await response.json();
          // Se o preço do ML for diferente do manual, atualizamos
          if (data.price && data.price !== initialPrice) {
            setPrice(data.price);
            setUpdated(true);
          }
        }
      } catch (error) {
        console.error("Erro ao atualizar preço", error);
      }
    };

    fetchPrice();
  }, [mlId, initialPrice]);

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-6 rounded-2xl shadow-sm mb-10 relative overflow-hidden transition-all duration-500">
      
      {/* Faixa de "Atualizado" que aparece só se o preço mudou */}
      {updated && (
        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl animate-pulse">
          PREÇO ATUALIZADO AGORA
        </div>
      )}

      <p className="text-sm text-slate-500 mb-1">Melhor oferta encontrada no Mercado Livre:</p>
      
      <div className="flex items-baseline gap-2 mb-4">
        <span className={`text-5xl font-extrabold transition-colors duration-500 ${updated ? 'text-emerald-600' : 'text-slate-800'}`}>
          R$ {price.toFixed(2).replace('.', ',')}
        </span>
        <span className="text-sm text-emerald-700 font-medium bg-emerald-100 px-2 py-1 rounded">À vista</span>
      </div>
    </div>
  );
}