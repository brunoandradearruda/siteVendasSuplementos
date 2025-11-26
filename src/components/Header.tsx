"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';

export default function Header() {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">
              Suplementos<span className="text-emerald-500">PRO</span>
            </h1>
          </Link>

          {/* Barra de Busca (Aparece no meio em telas grandes) */}
          <div className="w-full md:max-w-sm order-3 md:order-2">
            <SearchBar />
          </div>

          {/* Navegação */}
          <nav className="flex gap-4 md:gap-6 order-2 md:order-3 text-sm font-semibold flex-wrap justify-center">
            <Link 
              href="/" 
              className={`transition-colors ${isLinkActive('/') ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
            >
              Início
            </Link>
            <Link 
              href="/comparador" 
              className={`transition-colors ${isLinkActive('/comparador') ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
            >
              Comparador
            </Link>
            <Link 
              href="/guia" 
              className={`transition-colors ${isLinkActive('/guia') ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
            >
              Guia
            </Link>
            <Link 
              href="/treinos" 
              className={`transition-colors ${isLinkActive('/treinos') ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
            >
              Treinos
            </Link>
            <Link 
              href="/blog" 
              className={`transition-colors ${isLinkActive('/blog') ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
            >
              Blog
            </Link>
            <Link 
              href="/calculadora" 
              className={`transition-colors ${isLinkActive('/calculadora') ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
            >
              Calculadora
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}