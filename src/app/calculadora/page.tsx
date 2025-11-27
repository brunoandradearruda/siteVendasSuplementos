"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function CalculadoraPage() {
  const [genero, setGenero] = useState('masculino');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [atividade, setAtividade] = useState('1.2');
  const [objetivo, setObjetivo] = useState('manter');
  
  const [resultado, setResultado] = useState<{calorias: number, proteina: number, carbo: number, gordura: number} | null>(null);

  const calcular = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseFloat(peso);
    const a = parseFloat(altura);
    const i = parseFloat(idade);
    const factor = parseFloat(atividade);

    if (!p || !a || !i) return;

    let tmb = 0;
    if (genero === 'masculino') {
      tmb = 88.36 + (13.4 * p) + (4.8 * a) - (5.7 * i);
    } else {
      tmb = 447.6 + (9.2 * p) + (3.1 * a) - (4.3 * i);
    }

    let gastoTotal = tmb * factor;

    if (objetivo === 'perder') gastoTotal -= 500;
    if (objetivo === 'ganhar') gastoTotal += 500;

    const proteinaG = p * 2; 
    const gorduraG = p * 0.8;
    
    const calProteina = proteinaG * 4;
    const calGordura = gorduraG * 9;
    const calRestantes = gastoTotal - calProteina - calGordura;
    const carboG = calRestantes / 4;

    setResultado({
      calorias: Math.round(gastoTotal),
      proteina: Math.round(proteinaG),
      gordura: Math.round(gorduraG),
      carbo: Math.round(carboG)
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Ferramenta Gratuita
          </span>
          <h1 className="text-3xl font-extrabold text-slate-800 mt-4">Calculadora de Dieta</h1>
          <p className="text-slate-600 mt-2">Descubra exatamente quanto comer para atingir seu objetivo.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <form onSubmit={calcular} className="p-8 border-b border-slate-100">
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Gênero</label>
                {/* CORREÇÃO: Adicionado text-slate-900 para ficar bem escuro */}
                <select value={genero} onChange={(e) => setGenero(e.target.value)} className="w-full p-3 bg-slate-50 text-slate-900 font-medium rounded-lg border border-slate-200 focus:border-purple-500 outline-none">
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Idade</label>
                {/* CORREÇÃO: Adicionado text-slate-900 e placeholder-slate-400 */}
                <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} placeholder="Anos" className="w-full p-3 bg-slate-50 text-slate-900 placeholder-slate-400 font-medium rounded-lg border border-slate-200 focus:border-purple-500 outline-none" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Peso (kg)</label>
                <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder="KG" className="w-full p-3 bg-slate-50 text-slate-900 placeholder-slate-400 font-medium rounded-lg border border-slate-200 focus:border-purple-500 outline-none" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Altura (cm)</label>
                <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="CM" className="w-full p-3 bg-slate-50 text-slate-900 placeholder-slate-400 font-medium rounded-lg border border-slate-200 focus:border-purple-500 outline-none" required />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nível de Atividade</label>
              <select value={atividade} onChange={(e) => setAtividade(e.target.value)} className="w-full p-3 bg-slate-50 text-slate-900 font-medium rounded-lg border border-slate-200 focus:border-purple-500 outline-none">
                <option value="1.2">Sedentário (Pouco ou nenhum exercício)</option>
                <option value="1.375">Levemente ativo (Exercício leve 1-3 dias/sem)</option>
                <option value="1.55">Moderadamente ativo (Exercício moderado 3-5 dias/sem)</option>
                <option value="1.725">Muito ativo (Exercício pesado 6-7 dias/sem)</option>
                <option value="1.9">Extremamente ativo (Trabalho físico ou treino 2x dia)</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Objetivo</label>
              <select value={objetivo} onChange={(e) => setObjetivo(e.target.value)} className="w-full p-3 bg-slate-50 text-slate-900 font-medium rounded-lg border border-slate-200 focus:border-purple-500 outline-none">
                <option value="perder">Perder Peso (Definição)</option>
                <option value="manter">Manter Peso Atual</option>
                <option value="ganhar">Ganhar Massa (Bulking)</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-purple-200 transform hover:-translate-y-1">
              Calcular Meus Macros
            </button>
          </form>

          {resultado && (
            <div className="p-8 bg-purple-50 animate-fade-in">
              <h3 className="text-center text-slate-800 font-bold text-xl mb-6">Sua Meta Diária</h3>
              
              <div className="flex justify-center mb-8">
                <div className="text-center">
                  <span className="text-4xl font-extrabold text-purple-700">{resultado.calorias}</span>
                  <p className="text-xs text-purple-500 font-bold uppercase tracking-wide">Calorias / Dia</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
                  <span className="block text-2xl font-bold text-slate-800">{resultado.proteina}g</span>
                  <span className="text-xs text-slate-500 uppercase">Proteína</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
                  <span className="block text-2xl font-bold text-slate-800">{resultado.carbo}g</span>
                  <span className="text-xs text-slate-500 uppercase">Carbo</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
                  <span className="block text-2xl font-bold text-slate-800">{resultado.gordura}g</span>
                  <span className="text-xs text-slate-500 uppercase">Gordura</span>
                </div>
              </div>

              <div className="bg-white border-l-4 border-emerald-500 p-4 rounded-r-xl shadow-sm">
                <p className="text-slate-700 text-sm mb-3">
                  💡 <strong>Dica do Especialista:</strong> Bater {resultado.proteina}g de proteína apenas com comida pode ser difícil e caro.
                </p>
                <Link href="/categoria/proteina" className="block w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg text-sm transition-colors">
                  Ver Melhores Ofertas de Whey Protein
                </Link>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}