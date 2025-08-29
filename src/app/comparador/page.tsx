"use client";

import { useState, useMemo } from 'react';
import { listaDeProdutos, Produto } from '@/data/produtos';

interface ProdutoCalculado extends Produto {
  dosesPorEmbalagem: number;
  custoPorDose: number;
}

export default function ComparadorPage() {
  const [sortConfig, setSortConfig] = useState<{ key: keyof ProdutoCalculado | 'nome', direction: 'ascending' | 'descending' }>({ key: 'custoPorDose', direction: 'ascending' });

  const produtosOrdenados = useMemo(() => {
    const produtosCalculados: ProdutoCalculado[] = listaDeProdutos.map(p => {
      const dosesPorEmbalagem = p.dosePadraoEmGramas > 0 ? p.pesoEmGramas / p.dosePadraoEmGramas : 0;
      const custoPorDose = dosesPorEmbalagem > 0 ? p.precoMedioEmReais / dosesPorEmbalagem : 0;
      return { ...p, dosesPorEmbalagem, custoPorDose };
    });

    const sortedArray = [...produtosCalculados].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    return sortedArray;
  }, [sortConfig]);

  const requestSort = (key: keyof ProdutoCalculado | 'nome') => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  const getSortIndicator = (key: keyof ProdutoCalculado | 'nome') => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? ' ▲' : ' ▼';
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left text-slate-500">
          <thead className="text-xs text-slate-700 uppercase bg-slate-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                <button onClick={() => requestSort('nome')} className="font-bold flex items-center w-full text-left">
                  Produto{getSortIndicator('nome')}
                </button>
              </th>
              <th scope="col" className="px-6 py-3">
                <button onClick={() => requestSort('precoMedioEmReais')} className="font-bold flex items-center w-full text-left">
                  Preço Médio{getSortIndicator('precoMedioEmReais')}
                </button>
              </th>
              <th scope="col" className="px-6 py-3">
                 <button onClick={() => requestSort('dosesPorEmbalagem')} className="font-bold flex items-center w-full text-left">
                  Doses{getSortIndicator('dosesPorEmbalagem')}
                </button>
              </th>
              <th scope="col" className="px-6 py-3">
                 <button onClick={() => requestSort('custoPorDose')} className="font-bold flex items-center w-full text-left">
                  Custo / Dose{getSortIndicator('custoPorDose')}
                </button>
              </th>
              <th scope="col" className="px-6 py-3">Ação</th>
            </tr>
          </thead>
          <tbody>
            {produtosOrdenados.map((p) => (
              <tr key={p.id} className="bg-white border-b hover:bg-slate-50">
                <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">
                  {p.nome}<br/><span className="font-normal text-slate-500">{p.marca}</span>
                </th>
                <td className="px-6 py-4">R$ {p.precoMedioEmReais.toFixed(2)}</td>
                <td className="px-6 py-4">{Math.round(p.dosesPorEmbalagem)}</td>
                <td className="px-6 py-4 font-bold text-emerald-600">R$ {p.custoPorDose.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <a href={p.linkAfiliado} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline">Ver Oferta</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}