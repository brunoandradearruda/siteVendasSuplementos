import Image from 'next/image';
import Link from 'next/link';
import { listaDeProdutos } from '@/data/produtos';

const slugify = (text: string) => {
  return text.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
};

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {listaDeProdutos.map((produto) => {
          const slugDaMateria = slugify(produto.categoria);
          const linkUrl = `/suplementos/${slugDaMateria}`;

          return (
            <Link href={linkUrl} key={produto.id} className="block group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full group-hover:shadow-xl transition-shadow duration-300">
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
                  <div className="mt-auto pt-4">
                     <span className="block w-full bg-emerald-500 text-white text-center font-bold py-3 px-4 rounded-lg group-hover:bg-emerald-600 transition-colors">
                      Ver Análise Completa
                     </span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}