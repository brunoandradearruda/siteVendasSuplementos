"use client";

import { useState, useEffect } from 'react';
import { listaDeProdutos } from '@/data/produtos';
import Image from 'next/image';

// Dados fictícios para gerar prova social
const nomes = ['João', 'Pedro', 'Lucas', 'Mateus', 'Guilherme', 'Gabriel', 'Rafael', 'Felipe', 'Bruno', 'Thiago', 'Ana', 'Julia', 'Beatriz', 'Mariana', 'Larissa'];
const cidades = ['São Paulo - SP', 'Rio de Janeiro - RJ', 'Belo Horizonte - MG', 'Curitiba - PR', 'Porto Alegre - RS', 'Brasília - DF', 'Salvador - BA', 'Recife - PE'];
const acoes = ['comprou', 'garantiu', 'aproveitou a oferta de'];

export default function SalesNotification() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ nome: '', cidade: '', produto: listaDeProdutos[0], acao: '' });

  useEffect(() => {
    // Função para sortear os dados
    const showNotification = () => {
      const randomNome = nomes[Math.floor(Math.random() * nomes.length)];
      const randomCidade = cidades[Math.floor(Math.random() * cidades.length)];
      const randomProduto = listaDeProdutos[Math.floor(Math.random() * listaDeProdutos.length)];
      const randomAcao = acoes[Math.floor(Math.random() * acoes.length)];

      setData({ nome: randomNome, cidade: randomCidade, produto: randomProduto, acao: randomAcao });
      setVisible(true);

      // Esconde depois de 5 segundos
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    // Primeira notificação aparece após 5 segundos
    const initialTimer = setTimeout(showNotification, 5000);

    // Repete a cada 20 segundos
    const interval = setInterval(showNotification, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-4 md:bottom-4 md:left-4 z-40 max-w-sm w-full bg-white rounded-lg shadow-2xl border-l-4 border-emerald-500 p-4 animate-slide-in-left cursor-pointer hover:scale-105 transition-transform">
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 flex-shrink-0 bg-slate-50 rounded-md p-1 border border-slate-100">
          <Image 
            src={data.produto.imagemUrl} 
            alt={data.produto.nome} 
            fill 
            style={{ objectFit: 'contain' }} 
          />
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-0.5">
            <span className="font-bold text-slate-800">{data.nome}</span> de {data.cidade}
          </p>
          <p className="text-sm text-slate-700 leading-tight">
            {data.acao} <span className="font-bold text-emerald-600">{data.produto.nome}</span>
          </p>
          <p className="text-[10px] text-slate-400 mt-1">Há poucos minutos</p>
        </div>
      </div>
    </div>
  );
}