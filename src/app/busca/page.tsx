import { listaDeProdutos } from '@/data/produtos';
import Link from 'next/link';
import Image from 'next/image';

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function BuscaPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const termo = q?.toLowerCase() || '';

  const resultados = listaDeProdutos.filter((produto) => 
    produto.nome.toLowerCase().includes(termo) ||
    produto.marca.toLowerCase().includes(termo) ||
    produto.categoria.toLowerCase().includes(termo)
  );

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">
          {/* CORREÇÃO: Aspas corrigidas */}
          Resultados para: <span className="text-emerald-600">&quot;{q}&quot;</span>
        </h1>

        {resultados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resultados.map((produto) => (
              <Link href={`/produto/${produto.slug}`} key={produto.id} className="group block h-full">
                 <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative">
                    <div className="relative w-full h-64 bg-white p-6 flex items-center justify-center">
                      <Image src={produto.imagemUrl} alt={produto.nome} fill style={{objectFit: 'contain'}} className="p-4 group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col border-t border-slate-50 bg-slate-50/50">
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">{produto.marca}</span>
                      <h2 className="text-xl font-bold text-slate-800 leading-snug mb-2 group-hover:text-blue-600 transition-colors">{produto.nome}</h2>
                      <div className="mt-auto pt-4 w-full">
                         <span className="block w-full bg-blue-600 text-white text-center font-bold py-3 px-4 rounded-xl group-hover:bg-blue-700 transition-colors">
                            Ver Análise
                         </span>
                      </div>
                    </div>
                  </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-slate-500">Nenhum produto encontrado.</p>
            <Link href="/" className="mt-4 inline-block text-emerald-600 font-bold hover:underline">
              Voltar para a página inicial
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}