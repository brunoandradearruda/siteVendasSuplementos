"use client";

import { useState } from 'react';
import { listaDeProdutos, Produto } from '@/data/produtos';
import Image from 'next/image';
import Link from 'next/link';

const getMetrics = (p: Produto) => {
  const doses = p.dosePadraoEmGramas > 0 ? p.pesoEmGramas / p.dosePadraoEmGramas : 0;
  const custoDose = doses > 0 ? p.precoMedioEmReais / doses : 0;
  return { doses, custoDose };
};

export default function DueloPage() {
  const [prod1Id, setProd1Id] = useState<number>(listaDeProdutos[0].id);
  const [prod2Id, setProd2Id] = useState<number>(listaDeProdutos[1]?.id || listaDeProdutos[0].id);

  const p1 = listaDeProdutos.find(p => p.id === prod1Id)!;
  const p2 = listaDeProdutos.find(p => p.id === prod2Id)!;

  const m1 = getMetrics(p1);
  const m2 = getMetrics(p2);

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
        </header>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="w-full md:w-1/3">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Lutador 1</label>
              <select value={prod1Id} onChange={(e) => setProd1Id(Number(e.target.value))} className="w-full p-3 rounded-xl border-2 border-slate-200 bg-slate-50 font-bold text-slate-700">{listaDeProdutos.map(p => (<option key={p.id} value={p.id}>{p.nome}</option>))}</select>
            </div>
            <div className="text-4xl font-black text-slate-300">VS</div>
            <div className="w-full md:w-1/3">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Lutador 2</label>
              <select value={prod2Id} onChange={(e) => setProd2Id(Number(e.target.value))} className="w-full p-3 rounded-xl border-2 border-slate-200 bg-slate-50 font-bold text-slate-700">{listaDeProdutos.map(p => (<option key={p.id} value={p.id}>{p.nome}</option>))}</select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 relative mb-12">
          {[p1, p2].map((p, idx) => {
             const metricas = idx === 0 ? m1 : m2;
             const oponenteMetricas = idx === 0 ? m2 : m1;
             const isWinner = getWinner(metricas.custoDose, oponenteMetricas.custoDose, 'min') === (idx === 0 ? 'p1' : 'p2');
             
             return (
              <div key={p.id} className={`bg-white rounded-2xl p-6 shadow-lg border-t-4 ${isWinner ? 'border-green-500 ring-2 ring-green-500/20' : 'border-slate-200'}`}>
                <div className="relative h-48 mb-4"><Image src={p.imagemUrl} alt={p.nome} fill style={{objectFit: 'contain'}} /></div>
                <h2 className="text-lg md:text-xl font-bold text-slate-800 text-center mb-2 line-clamp-2 h-14">{p.nome}</h2>
                <div className="text-center mb-4">
                   <span className="text-2xl font-bold text-slate-900">R$ {p.precoMedioEmReais.toFixed(2)}</span>
                   <p className="text-xs text-slate-500">Custo/Dose: <strong className={isWinner ? 'text-green-600' : 'text-slate-600'}>R$ {metricas.custoDose.toFixed(2)}</strong></p>
                </div>
                <Link href={`/produto/${p.slug}`} className={`block w-full text-white text-center py-3 rounded-xl font-bold text-sm transition-colors ${idx === 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700'}`}>Ver Análise</Link>
              </div>
             )
          })}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-black z-10 border-4 border-slate-50 shadow-xl hidden md:flex">VS</div>
        </div>

      </div>
    </div>
  );
}