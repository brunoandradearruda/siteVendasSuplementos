"use client";

import { useState } from 'react';
import { listaDeProdutos, Produto } from '@/data/produtos';
import Link from 'next/link';
import Image from 'next/image';

type Step = 'goal' | 'budget' | 'loading' | 'results';
type Goal = 'mass' | 'weight_loss' | 'energy';
type Budget = 'economy' | 'premium';

export default function GuiaPage() {
  const [step, setStep] = useState<Step>('goal');
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  // selectedBudget removido pois não estava sendo usado no render
  const [recommendations, setRecommendations] = useState<Produto[]>([]);

  const calculateRecommendations = (goal: Goal, budget: Budget) => {
    let filtered: Produto[] = [];

    if (goal === 'mass') {
      filtered = listaDeProdutos.filter(p => p.categoryId === 'proteina' || p.categoryId === 'creatina' || p.categoryId === 'hipercalorico');
    } else if (goal === 'weight_loss') {
      filtered = listaDeProdutos.filter(p => p.categoryId === 'proteina' || p.categoryId === 'albumina');
    } else if (goal === 'energy') {
      filtered = listaDeProdutos.filter(p => p.categoryId === 'pre-treino' || p.categoryId === 'creatina');
    }

    // CORREÇÃO: 'let' mudado para 'const' pois é um array que manipulamos métodos, mas a referência não muda
    const finalSelection: Produto[] = [];

    if (budget === 'economy') {
      const sorted = [...filtered].sort((a, b) => a.precoMedioEmReais - b.precoMedioEmReais);
      const prod1 = sorted[0];
      const prod2 = sorted.find(p => p.categoryId !== prod1?.categoryId);
      if (prod1) finalSelection.push(prod1);
      if (prod2) finalSelection.push(prod2);
    } else {
      const sorted = [...filtered].sort((a, b) => b.precoMedioEmReais - a.precoMedioEmReais);
      const prod1 = sorted[0];
      const prod2 = sorted.find(p => p.categoryId !== prod1?.categoryId);
      if (prod1) finalSelection.push(prod1);
      if (prod2) finalSelection.push(prod2);
    }

    setRecommendations(finalSelection);
    setStep('loading');
    setTimeout(() => setStep('results'), 1500);
  };

  const handleGoalSelect = (goal: Goal) => {
    setSelectedGoal(goal);
    setStep('budget');
  };

  const handleBudgetSelect = (budget: Budget) => {
    // Removido o setSelectedBudget daqui pois não é usado
    if (selectedGoal) {
      calculateRecommendations(selectedGoal, budget);
    }
  };

  const resetQuiz = () => {
    setStep('goal');
    setSelectedGoal(null);
    // setSelectedBudget(null); // Removido
    setRecommendations([]);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Consultor Virtual
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-4 mb-2">
            Descubra seu Suplemento Ideal
          </h1>
          <p className="text-slate-600">
            Responda 2 perguntas rápidas e montaremos a estratégia perfeita para você.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-[400px] relative">
          
          {step === 'goal' && (
            <div className="p-8 md:p-12 animate-fade-in">
              <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Qual é o seu objetivo principal?</h2>
              <div className="grid gap-4">
                <button onClick={() => handleGoalSelect('mass')} className="flex items-center p-4 border-2 border-slate-100 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-all group text-left">
                  <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">💪</span>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Ganhar Massa Muscular</h3>
                    <p className="text-slate-500 text-sm">Quero ficar maior, mais forte e definido.</p>
                  </div>
                </button>
                <button onClick={() => handleGoalSelect('weight_loss')} className="flex items-center p-4 border-2 border-slate-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group text-left">
                  <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">⚖️</span>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Emagrecimento / Definição</h3>
                    <p className="text-slate-500 text-sm">Quero perder gordura e manter a massa magra.</p>
                  </div>
                </button>
                <button onClick={() => handleGoalSelect('energy')} className="flex items-center p-4 border-2 border-slate-100 rounded-xl hover:border-amber-500 hover:bg-amber-50 transition-all group text-left">
                  <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">⚡</span>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Mais Energia e Performance</h3>
                    <p className="text-slate-500 text-sm">Sinto cansaço nos treinos e quero render mais.</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 'budget' && (
            <div className="p-8 md:p-12 animate-fade-in">
              <button onClick={() => setStep('goal')} className="text-sm text-slate-400 hover:text-slate-600 mb-6 flex items-center gap-1">← Voltar</button>
              <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Qual sua preferência de investimento?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <button onClick={() => handleBudgetSelect('economy')} className="p-6 border-2 border-slate-100 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-center group h-full">
                  <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform">💰</span>
                  <h3 className="font-bold text-slate-800 text-xl mb-2">Custo-Benefício</h3>
                  <p className="text-slate-500 text-sm">Quero produtos que funcionam bem com o menor preço possível.</p>
                </button>
                <button onClick={() => handleBudgetSelect('premium')} className="p-6 border-2 border-slate-100 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all text-center group h-full">
                  <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform">🏆</span>
                  <h3 className="font-bold text-slate-800 text-xl mb-2">Qualidade Premium</h3>
                  <p className="text-slate-500 text-sm">Não me importo de pagar mais pelas melhores marcas e ingredientes.</p>
                </button>
              </div>
            </div>
          )}

          {step === 'loading' && (
            <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-20">
              <div className="w-16 h-16 border-4 border-emerald-100 border-t-emerald-500 rounded-full animate-spin mb-4"></div>
              <h3 className="text-xl font-bold text-slate-800 animate-pulse">Analisando seu perfil...</h3>
              <p className="text-slate-500 mt-2">Selecionando os melhores produtos</p>
            </div>
          )}

          {step === 'results' && (
            <div className="p-8 md:p-12 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Sua Recomendação Personalizada</h2>
                <p className="text-slate-600 mt-2">Com base no seu objetivo de <strong>{selectedGoal === 'mass' ? 'Ganhar Massa' : selectedGoal === 'weight_loss' ? 'Emagrecer' : 'Ter Energia'}</strong>:</p>
              </div>

              <div className="grid gap-6 mb-8">
                {recommendations.map((produto, index) => (
                  <div key={produto.id} className="flex flex-col md:flex-row items-center bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-sm relative">
                    <div className="absolute -top-3 -left-3 bg-slate-800 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold shadow-md">
                      {index + 1}
                    </div>
                    <div className="relative w-24 h-24 flex-shrink-0 bg-white rounded-lg border border-slate-200 p-2 mb-4 md:mb-0 md:mr-6">
                      <Image src={produto.imagemUrl} alt={produto.nome} fill style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <p className="text-xs text-emerald-600 font-bold uppercase">{produto.categoria}</p>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">{produto.nome}</h3>
                      <p className="text-sm text-slate-500 mt-1">{produto.pontosPositivos[0]}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-center min-w-[140px]">
                      <span className="text-xl font-bold text-slate-800 mb-2">R$ {produto.precoMedioEmReais.toFixed(2)}</span>
                      <Link href={`/produto/${produto.slug}`} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors w-full text-center">
                        Ver Detalhes
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button onClick={resetQuiz} className="text-slate-500 hover:text-emerald-600 font-medium underline underline-offset-4">
                  Refazer o teste
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}