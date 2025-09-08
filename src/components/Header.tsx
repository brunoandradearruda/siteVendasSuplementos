"use client"; // Importante: Torna este um Componente de Cliente para usar hooks

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook para ler a URL atual

export default function Header() {
  const pathname = usePathname(); // Pega a URL atual. Ex: "/", "/comparador", etc.

  // Função para verificar se o link deve estar ativo
  const isLinkActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-slate-800 text-center">
          Guia de Suplementos PRO
        </h1>
        <p className="text-slate-600 text-center mt-2">
          Análises e recomendações dos melhores suplementos do mercado.
        </p>
        <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-4 border-t pt-4">
          <Link 
            href="/" 
            className={`font-semibold pb-1 transition-colors ${isLinkActive('/') 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-slate-700 hover:text-blue-600'}`}
          >
            Recomendações
          </Link>
          <Link 
            href="/comparador" 
            className={`font-semibold pb-1 transition-colors ${isLinkActive('/comparador') 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-slate-700 hover:text-blue-600'}`}
          >
            Tabela Comparativa
          </Link>
          <Link 
            href="/guia" 
            className={`font-semibold pb-1 transition-colors ${isLinkActive('/guia') 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-slate-700 hover:text-blue-600'}`}
          >
            Qual suplemento tomar?
          </Link>
        </nav>
      </div>
    </header>
  );
}