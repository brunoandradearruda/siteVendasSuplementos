"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [termo, setTermo] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Evita recarregar a página
    if (termo.trim()) {
      router.push(`/busca?q=${encodeURIComponent(termo)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md hidden md:block">
      <input
        type="text"
        placeholder="Buscar suplemento..."
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        className="w-full py-2 pl-4 pr-10 rounded-full border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm text-slate-700"
      />
      <button 
        type="submit" 
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white rounded-full text-slate-400 hover:text-emerald-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </button>
    </form>
  );
}