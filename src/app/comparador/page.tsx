"use client";

import { useState, useMemo } from 'react';
import { listaDeProdutos, Produto } from '@/data/produtos';
import Image from 'next/image';
import Link from 'next/link';

interface ProdutoCalculado extends Produto {
  dosesPorEmbalagem: number;
  custoPorDose: number;
}

// CORREÇÃO: Definimos exatamente quais chaves podem ser usadas para ordenar
// Isso acalma o TypeScript e remove o erro de "undefined"
type SortableKeys = 'nome' | 'precoMedioEmReais' | 'dosesPorEmbalagem' | 'custoPorDose';

export default function ComparadorPage() {
  // Usamos o tipo SortableKeys aqui
  const [sortConfig, setSortConfig] = useState<{ key: SortableKeys, direction: 'ascending' | 'descending' }>({ key: 'custoPorDose', direction: 'ascending' });

  const produtosOrdenados = useMemo(() => {
    const produtosCalculados: ProdutoCalculado[] = listaDeProdutos.map(p => {
      const dosesPorEmbalagem = p.dosePadraoEmGramas > 0 ? p.pesoEmGramas / p.dosePadraoEmGramas : 0;
      const custoPorDose = dosesPorEmbalagem > 0 ? p.precoMedioEmReais / dosesPorEmbalagem : 0;
      return { ...p, dosesPorEmbalagem, custoPorDose };
    });

    const sortedArray = [...produtosCalculados].sort((a, b) => {
      // Extraímos os valores com segurança
      const valA = a[sortConfig.key];
      const valB = b[sortConfig.key];

      // Verificação de segurança extra
      if (valA === undefined || valB === undefined) return 0;

      if (valA < valB) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (valA > valB) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });

    return sortedArray;
  }, [sortConfig]);

  const requestSort = (key: SortableKeys) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  const getSortIndicator = (key: SortableKeys) => {
    if (sortConfig.key !== key) return <span className="text-slate-300 ml-1">↕</span>;
    return sortConfig.direction === 'ascending' ? <span className="text-emerald-500 ml-1">▲</span> : <span className="text-emerald-500 ml-1">▼</span>;
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Comparador de Custo-Benefício</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Descubra qual suplemento rende mais. Clique nos cabeçalhos da tabela para ordenar por preço, dose ou custo real.
          </p>
        </header>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider">
                  <th className="p-4 font-semibold cursor-pointer hover:bg-slate-800 transition-colors" onClick={() => requestSort('nome')}>
                    <div className="flex items-center">Produto {getSortIndicator('nome')}</div>
                  </th>
                  <th className="p-4 font-semibold hidden md:table-cell">Categoria</th>
                  <th className="p-4 font-semibold cursor-pointer hover:bg-slate-800 transition-colors" onClick={() => requestSort('precoMedioEmReais')}>
                    <div className="flex items-center">Preço Total {getSortIndicator('precoMedioEmReais')}</div>
                  </th>
                  <th className="p-4 font-semibold cursor-pointer hover:bg-slate-800 transition-colors" onClick={() => requestSort('dosesPorEmbalagem')}>
                    <div className="flex items-center">Rendimento {getSortIndicator('dosesPorEmbalagem')}</div>
                  </th>
                  <th className="p-4 font-semibold cursor-pointer bg-emerald-600 hover:bg-emerald-700 transition-colors" onClick={() => requestSort('custoPorDose')}>
                    <div className="flex items-center">Custo por Dose {getSortIndicator('custoPorDose')}</div>
                  </th>
                  <th className="p-4 font-semibold text-center">Ação</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 text-sm">
                {produtosOrdenados.map((p, index) => (
                  <tr key={p.id} className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    
                    {/* Coluna Produto (Foto + Nome) */}
                    <td className="p-4">
                      <Link href={`/produto/${p.slug}`} className="flex items-center gap-4 group">
                        <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-200 p-1">
                          <Image src={p.imagemUrl} alt={p.nome} fill style={{ objectFit: 'contain' }} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">{p.nome}</p>
                          <p className="text-xs text-slate-500">{p.marca}</p>
                        </div>
                      </Link>
                    </td>

                    <td className="p-4 hidden md:table-cell">
                      <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs font-bold uppercase">{p.categoria}</span>
                    </td>

                    <td className="p-4 font-medium">
                      R$ {p.precoMedioEmReais.toFixed(2)}
                    </td>

                    <td className="p-4">
                      {Math.floor(p.dosesPorEmbalagem)} doses
                    </td>

                    {/* Coluna de Destaque (Custo por Dose) */}
                    <td className="p-4 bg-emerald-50/50 font-bold text-emerald-700 text-base border-l border-r border-emerald-100">
                      R$ {p.custoPorDose.toFixed(2)}
                    </td>

                    <td className="p-4 text-center">
                      <Link href={`/produto/${p.slug}`} className="inline-block text-blue-600 hover:text-blue-800 font-bold text-xs uppercase tracking-wide hover:underline">
                        Ver Detalhes
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <p className="text-center text-xs text-slate-400 mt-6">
          * Os cálculos de rendimento são baseados na dose sugerida pelo fabricante. Preços podem variar.
        </p>
      </div>
    </div>
  );
}