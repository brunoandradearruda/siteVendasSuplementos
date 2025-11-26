"use client";

import { useState, useMemo } from 'react';
import { listaDeProdutos, Produto } from '@/data/produtos';
import Image from 'next/image';
import Link from 'next/link';

// Função auxiliar para calcular métricas
const getMetrics = (p: Produto) => {
  const doses = p.dosePadraoEmGramas > 0 ? p.pesoEmGramas / p.dosePadraoEmGramas : 0;
  const custoDose = doses > 0 ? p.precoMedioEmReais / doses : 0;
  return { doses, custoDose };
};

export default function DueloPage() {
  // Estado para os dois produtos selecionados. Começamos com os dois primeiros da lista como exemplo.
  const [prod1Id, setProd1Id] = useState<number>(listaDeProdutos[0].id);
  const [prod2Id, setProd2Id] = useState<number>(listaDeProdutos[1]?.id || listaDeProdutos[0].id);

  // Busca os objetos completos dos produtos
  const p1 = listaDeProdutos.find(p => p.id === prod1Id)!;
  const p2 = listaDeProdutos.find(p => p.id === prod2Id)!;

  // Cálculos
  const m1 = getMetrics(p1);
  const m2 = getMetrics(p2);

  // Lógica do "Vencedor" (Retorna 'p1', 'p2' ou 'draw')
  const getWinner = (val1: number, val2: number, type: 'min' | 'max') => {
    if (val1 === val2) return 'draw';
    if (type === 'min') return val1 < val2 ? 'p1' : 'p2';
    return val1 > val2 ? 'p1' : 'p2';
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        
        <header className="text-center mb-12">
          <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
            Modo Batalha
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 italic">
            DUELO DE TITÃS
          </h1>
          <p className="text-slate-600 mt-3 text-lg">
            Coloque dois suplementos lado a lado e veja quem vence.
          </p>
        </header>

        {/* ÁREA DE SELEÇÃO */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            
            {/* Seleção P1 */}
            <div className="w-full md:w-1/3">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Lutador 1</label>
              <select 
                value={prod1Id} 
                onChange={(e) => setProd1Id(Number(e.target.value))}
                className="w-full p-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none bg-slate-50 font-bold text-slate-700"
              >
                {listaDeProdutos.map(p => (
                  <option key={p.id} value={p.id}>{p.nome}</option>
                ))}
              </select>
            </div>

            {/* VS */}
            <div className="text-4xl font-black text-slate-300">VS</div>

            {/* Seleção P2 */}
            <div className="w-full md:w-1/3">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Lutador 2</label>
              <select 
                value={prod2Id} 
                onChange={(e) => setProd2Id(Number(e.target.value))}
                className="w-full p-3 rounded-xl border-2 border-slate-200 focus:border-red-500 outline-none bg-slate-50 font-bold text-slate-700"
              >
                {listaDeProdutos.map(p => (
                  <option key={p.id} value={p.id}>{p.nome}</option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* ARENA DE BATALHA */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 relative">
          
          {/* CARD PRODUTO 1 */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg border-t-4 ${getWinner(m1.custoDose, m2.custoDose, 'min') === 'p1' ? 'border-green-500 ring-2 ring-green-500/20' : 'border-slate-200'}`}>
            <div className="relative h-48 mb-4">
              <Image src={p1.imagemUrl} alt={p1.nome} fill style={{objectFit: 'contain'}} />
            </div>
            <h2 className="text-lg md:text-xl font-bold text-slate-800 text-center mb-2 line-clamp-2 h-14">{p1.nome}</h2>
            <p className="text-center text-sm text-slate-500 mb-6">{p1.marca}</p>
            
            <Link href={`/produto/${p1.slug}`} className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors mb-6">
              Ver Análise
            </Link>
          </div>

          {/* CARD PRODUTO 2 */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg border-t-4 ${getWinner(m1.custoDose, m2.custoDose, 'min') === 'p2' ? 'border-green-500 ring-2 ring-green-500/20' : 'border-slate-200'}`}>
            <div className="relative h-48 mb-4">
              <Image src={p2.imagemUrl} alt={p2.nome} fill style={{objectFit: 'contain'}} />
            </div>
            <h2 className="text-lg md:text-xl font-bold text-slate-800 text-center mb-2 line-clamp-2 h-14">{p2.nome}</h2>
            <p className="text-center text-sm text-slate-500 mb-6">{p2.marca}</p>

            <Link href={`/produto/${p2.slug}`} className="block w-full bg-red-600 text-white text-center py-2 rounded-lg font-bold text-sm hover:bg-red-700 transition-colors mb-6">
              Ver Análise
            </Link>
          </div>

          {/* ÍCONE VS ABSOLUTO NO MEIO (Desktop) */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-black z-10 border-4 border-slate-50 shadow-xl hidden md:flex">
            VS
          </div>
        </div>

        {/* TABELA DE STATUS (STATS) */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
          {/* LINHA: PREÇO TOTAL */}
          <div className="grid grid-cols-3 border-b border-slate-100 hover:bg-slate-50 transition-colors py-4">
            <div className={`text-center px-2 ${getWinner(p1.precoMedioEmReais, p2.precoMedioEmReais, 'min') === 'p1' ? 'font-bold text-green-600' : 'text-slate-500'}`}>
              R$ {p1.precoMedioEmReais.toFixed(2)}
            </div>
            <div className="text-center text-xs font-bold text-slate-400 uppercase flex items-center justify-center">Preço Total</div>
            <div className={`text-center px-2 ${getWinner(p1.precoMedioEmReais, p2.precoMedioEmReais, 'min') === 'p2' ? 'font-bold text-green-600' : 'text-slate-500'}`}>
              R$ {p2.precoMedioEmReais.toFixed(2)}
            </div>
          </div>

          {/* LINHA: PESO */}
          <div className="grid grid-cols-3 border-b border-slate-100 hover:bg-slate-50 transition-colors py-4">
            <div className={`text-center px-2 ${getWinner(p1.pesoEmGramas, p2.pesoEmGramas, 'max') === 'p1' ? 'font-bold text-green-600' : 'text-slate-500'}`}>
              {p1.pesoEmGramas}g
            </div>
            <div className="text-center text-xs font-bold text-slate-400 uppercase flex items-center justify-center">Tamanho</div>
            <div className={`text-center px-2 ${getWinner(p1.pesoEmGramas, p2.pesoEmGramas, 'max') === 'p2' ? 'font-bold text-green-600' : 'text-slate-500'}`}>
              {p2.pesoEmGramas}g
            </div>
          </div>

          {/* LINHA: RENDIMENTO */}
          <div className="grid grid-cols-3 border-b border-slate-100 hover:bg-slate-50 transition-colors py-4">
            <div className={`text-center px-2 ${getWinner(m1.doses, m2.doses, 'max') === 'p1' ? 'font-bold text-green-600' : 'text-slate-500'}`}>
              {Math.floor(m1.doses)} doses
            </div>
            <div className="text-center text-xs font-bold text-slate-400 uppercase flex items-center justify-center">Rendimento</div>
            <div className={`text-center px-2 ${getWinner(m1.doses, m2.doses, 'max') === 'p2' ? 'font-bold text-green-600' : 'text-slate-500'}`}>
              {Math.floor(m2.doses)} doses
            </div>
          </div>

          {/* LINHA: CUSTO POR DOSE (A MAIS IMPORTANTE) */}
          <div className="grid grid-cols-3 bg-slate-900 text-white py-6">
            <div className={`text-center px-2 text-xl ${getWinner(m1.custoDose, m2.custoDose, 'min') === 'p1' ? 'font-bold text-emerald-400' : 'text-slate-400'}`}>
              R$ {m1.custoDose.toFixed(2)}
              {getWinner(m1.custoDose, m2.custoDose, 'min') === 'p1' && <span className="block text-[10px] text-emerald-400 uppercase">Vencedor</span>}
            </div>
            <div className="text-center text-xs font-bold text-slate-400 uppercase flex items-center justify-center">Custo / Dose</div>
            <div className={`text-center px-2 text-xl ${getWinner(m1.custoDose, m2.custoDose, 'min') === 'p2' ? 'font-bold text-emerald-400' : 'text-slate-400'}`}>
              R$ {m2.custoDose.toFixed(2)}
              {getWinner(m1.custoDose, m2.custoDose, 'min') === 'p2' && <span className="block text-[10px] text-emerald-400 uppercase">Vencedor</span>}
            </div>
          </div>

        </div>

        {/* BOTÕES DE AÇÃO */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 mt-6">
           <a href={p1.linkAfiliado} target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-white text-center font-bold py-4 rounded-xl shadow-lg transition-transform hover:scale-105">
              Comprar {p1.nome}
           </a>
           <a href={p2.linkAfiliado} target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-white text-center font-bold py-4 rounded-xl shadow-lg transition-transform hover:scale-105">
              Comprar {p2.nome}
           </a>
        </div>

      </div>
    </div>
  );
}