"use client";

import { useState } from 'react';
import Link from 'next/link';

type Objetivo = 'massa' | 'energia' | 'emagrecimento';

export default function GuiaPage() {
  const [objetivo, setObjetivo] = useState<Objetivo | null>(null);

  const renderRecomendacao = () => {
    switch (objetivo) {
      case 'massa':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md border animate-fade-in">
            <h3 className="font-bold text-xl text-slate-800">Objetivo: Ganhar Massa Muscular</h3>
            <p className="mt-2 text-slate-600">Para construir músculos, você precisa de dois pilares: proteína suficiente para reconstruir as fibras musculares e energia para treinos intensos.</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><strong>Whey Protein:</strong> Essencial para a recuperação e síntese proteica pós-treino.</li>
              <li><strong>Creatina:</strong> Aumenta sua força e explosão, permitindo treinos mais pesados e eficazes.</li>
            </ul>
          </div>
        );
      case 'energia':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md border animate-fade-in">
            <h3 className="font-bold text-xl text-slate-800">Objetivo: Mais Energia e Performance</h3>
            <p className="mt-2 text-slate-600">Para maximizar seu rendimento, foco e resistência durante os treinos, os suplementos certos podem fazer toda a diferença.</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><strong>Pré-Treino:</strong> Fornece um pico de energia, foco mental e melhora a vasodilatação para um "pump" melhor.</li>
              <li><strong>Creatina:</strong> É a base da energia para movimentos rápidos e explosivos. Essencial para performance.</li>
            </ul>
          </div>
        );
      case 'emagrecimento':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md border animate-fade-in">
            <h3 className="font-bold text-xl text-slate-800">Objetivo: Emagrecimento e Definição</h3>
            <p className="mt-2 text-slate-600">O foco aqui é manter a massa muscular enquanto se perde gordura. A suplementação ajuda a garantir que seu corpo tenha os nutrientes certos durante o déficit calórico.</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><strong>Whey Protein:</strong> Ajuda a manter a saciedade e a atingir a meta de proteína, protegendo seus músculos.</li>
              <li><strong>Termogênicos (com cautela):</strong> Podem ajudar a acelerar o metabolismo e dar mais energia para os treinos.</li>
            </ul>
          </div>
        );
      default:
        return <p className="text-center text-slate-500">Selecione um objetivo acima para ver as recomendações.</p>;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
       <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-slate-800 text-center">
            Qual suplemento tomar?
          </h1>
          <p className="text-slate-600 text-center mt-2">
            Descubra a melhor suplementação para o seu objetivo.
          </p>
           <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-4 border-t pt-4">
            <Link href="/" className="font-semibold text-slate-700 hover:text-blue-600">
              Recomendações
            </Link>
            <Link href="/comparador" className="font-semibold text-slate-700 hover:text-blue-600">
              Tabela Comparativa
            </Link>
            <Link href="/guia" className="font-semibold text-blue-600 border-b-2 border-blue-600 pb-1">
              Qual suplemento tomar?
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-slate-700 mb-6">Qual é o seu principal objetivo?</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={() => setObjetivo('massa')} className={`px-6 py-3 font-bold rounded-lg transition-all ${objetivo === 'massa' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-white text-slate-700 hover:bg-slate-100 shadow'}`}>
              Ganhar Massa Muscular
            </button>
            <button onClick={() => setObjetivo('energia')} className={`px-6 py-3 font-bold rounded-lg transition-all ${objetivo === 'energia' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-white text-slate-700 hover:bg-slate-100 shadow'}`}>
              Mais Energia / Performance
            </button>
            <button onClick={() => setObjetivo('emagrecimento')} className={`px-6 py-3 font-bold rounded-lg transition-all ${objetivo === 'emagrecimento' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-white text-slate-700 hover:bg-slate-100 shadow'}`}>
              Emagrecimento / Definição
            </button>
          </div>
        </section>

        <section className="mt-12 max-w-2xl mx-auto">
          {renderRecomendacao()}
        </section>
      </main>
    </div>
  );
}