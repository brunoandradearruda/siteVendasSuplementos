import Link from 'next/link';
import { listaDeCategorias } from '@/data/categorias'; // AGORA IMPORTAMOS AS CATEGORIAS

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">
          Explore por Categoria
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Encontre o suplemento ideal para o seu objetivo.
        </p>
      </div>

      {/* NOVO GRID DE CATEGORIAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {listaDeCategorias.map((categoria) => (
          <Link href={`/categoria/${categoria.id}`} key={categoria.id} className="block group">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-slate-800">{categoria.nome}</h3>
              <p className="text-slate-600 mt-2 flex-grow">{categoria.descricao}</p>
              <span className="mt-6 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg group-hover:bg-blue-700 transition-colors">
                Ver Opções e Preços
              </span>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}