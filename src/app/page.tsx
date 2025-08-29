import Image from 'next/image';
import Link from 'next/link';
import { listaDeProdutos } from '@/data/produtos';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-slate-800 text-center">
            Guia de Suplementos PRO
          </h1>
          <p className="text-slate-600 text-center mt-2">
            Análises e recomendações dos melhores suplementos do mercado.
          </p>
          
          <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-4 border-t pt-4">
            <Link href="/" className="font-semibold text-blue-600 border-b-2 border-blue-600 pb-1">
              Recomendações
            </Link>
            <Link href="/comparador" className="font-semibold text-slate-700 hover:text-blue-600">
              Tabela Comparativa
            </Link>
            <Link href="/guia" className="font-semibold text-slate-700 hover:text-blue-600">
              Qual suplemento tomar?
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {listaDeProdutos.map((produto) => (
            <div key={produto.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              
              <div className="relative w-full h-56">
                <Image
                  src={produto.imagemUrl}
                  alt={`Imagem do produto ${produto.nome}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 py-1 px-3 rounded-full self-start">
                  {produto.categoria}
                </span>
                <h2 className="text-2xl font-bold text-slate-800 mt-3">{produto.nome}</h2>
                <h3 className="text-md text-slate-500 mb-4">{produto.marca}</h3>
                
                <a
                  href={produto.linkAfiliado}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full bg-emerald-500 text-white text-center font-bold py-3 px-4 rounded-lg hover:bg-emerald-600 transition-transform duration-200 hover:scale-105"
                >
                  Ver Oferta no Mercado Livre
                </a>
              </div>
            </div>
          ))}

        </div>
      </main>
    </div>
  );
}