"use client";

import { useState } from 'react';
// AQUI ESTAVA O ERRO: Importe diretamente do caminho relativo se o alias @ não funcionar
import { listaDeTreinos, RotinaTreino } from '@/data/treinos'; 
import Link from 'next/link';

export default function TreinosPage() {
  // Garante que a lista existe antes de tentar acessar o índice [1]
  const treinoInicial = listaDeTreinos.length > 1 ? listaDeTreinos[1] : listaDeTreinos[0];
  const [treinoAtivo, setTreinoAtivo] = useState<RotinaTreino>(treinoInicial);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-12">
          <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Conteúdo Exclusivo
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mt-4 mb-4">
            Fichas de Treino Gratuitas
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Selecione seu objetivo abaixo e acesse uma rotina completa preparada para otimizar seus resultados junto com a suplementação.
          </p>
        </div>

        {/* SELETOR DE TREINOS (ABAS) */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {listaDeTreinos.map((treino) => (
            <button
              key={treino.id}
              onClick={() => setTreinoAtivo(treino)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-sm ${
                treinoAtivo.id === treino.id
                  ? 'bg-slate-800 text-white ring-4 ring-slate-200'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {treino.nome}
            </button>
          ))}
        </div>

        {/* CONTEÚDO DO TREINO */}
        <div className="animate-fade-in">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10 mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-slate-100 pb-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">{treinoAtivo.nome}</h2>
                <p className="text-slate-500">{treinoAtivo.descricao}</p>
              </div>
              <span className={`mt-4 md:mt-0 px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide ${
                treinoAtivo.nivel === 'Iniciante' ? 'bg-green-100 text-green-700' : 
                treinoAtivo.nivel === 'Intermediário' ? 'bg-blue-100 text-blue-700' : 
                treinoAtivo.nivel === 'Avançado' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
              }`}>
                Nível: {treinoAtivo.nivel}
              </span>
            </div>

            {/* LISTA DE DIAS */}
            <div className="grid gap-8">
              {treinoAtivo.dias.map((dia, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                      <span className="bg-slate-800 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {dia.titulo}
                    </h3>
                    <div className="text-sm text-slate-500 font-medium">
                      Foco: <span className="text-slate-800">{dia.foco}</span>
                    </div>
                  </div>

                  {/* TABELA DE EXERCÍCIOS */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-200 text-slate-700 uppercase text-xs">
                        <tr>
                          <th className="p-3 rounded-l-lg">Exercício</th>
                          <th className="p-3">Séries</th>
                          <th className="p-3">Reps</th>
                          <th className="p-3 rounded-r-lg">Descanso</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-600">
                        {dia.exercicios.map((ex, i) => (
                          <tr key={i} className="border-b border-slate-200 last:border-0 hover:bg-white transition-colors">
                            <td className="p-3 font-medium text-slate-800">{ex.nome}</td>
                            <td className="p-3">{ex.series}</td>
                            <td className="p-3">{ex.repeticoes}</td>
                            <td className="p-3">{ex.descanso}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* DICA DE SUPLEMENTO */}
                  <div className="mt-6 bg-blue-50 border border-blue-100 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💊</span>
                      <div>
                        <p className="text-xs text-blue-600 font-bold uppercase">Potencialize este treino</p>
                        <p className="text-sm text-slate-700 font-medium">Sugestão: <strong>{dia.suplementoIndicado}</strong></p>
                      </div>
                    </div>
                    <Link href={dia.linkCategoria} className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors whitespace-nowrap">
                      Ver Melhores Opções
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}