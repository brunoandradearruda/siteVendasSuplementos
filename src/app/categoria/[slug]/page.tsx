import { listaDeCategorias } from '@/data/categorias';
import { listaDeProdutos } from '@/data/produtos';
import FAQAccordion from '@/components/FAQAccordion'; // Importando o novo componente
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

interface PageProps { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoria = listaDeCategorias.find(c => c.id === slug);
  if (!categoria) return { title: 'Categoria não encontrada' }
  return { title: `Melhores ${categoria.nome} | Guia de Suplementos`, description: categoria.descricao }
}

export default async function CategoriaPage({ params }: PageProps) {
  const { slug } = await params;
  const categoria = listaDeCategorias.find(c => c.id === slug);
  if (!categoria) notFound();

  const produtosDaCategoria = listaDeProdutos.filter(p => p.categoryId === slug);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* CABEÇALHO DA CATEGORIA */}
      <div className="bg-white shadow-sm border-b border-slate-200 mb-10">
        <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-4xl font-extrabold text-slate-800 mb-4">{categoria.nome}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{categoria.descricao}</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* GRID DE PRODUTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtosDaCategoria.map(produto => (
            <Link href={`/produto/${produto.slug}`} key={produto.id} className="group block h-full">
               <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative">
                  
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      Ver Análise
                    </span>
                  </div>

                  <div className="relative w-full h-64 bg-white p-6 flex items-center justify-center">
                    <Image src={produto.imagemUrl} alt={produto.nome} fill style={{objectFit: 'contain'}} className="p-4 group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col border-t border-slate-50 bg-slate-50/50">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">{produto.marca}</span>
                    <h2 className="text-xl font-bold text-slate-800 leading-snug mb-2 group-hover:text-blue-600 transition-colors">{produto.nome}</h2>
                    
                    <div className="mt-auto pt-4 w-full">
                       <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl group-hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                          Conferir Detalhes
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                       </button>
                    </div>
                  </div>
                </div>
            </Link>
          ))}
          {produtosDaCategoria.length === 0 && (<p className="text-center text-slate-500 col-span-full py-10">Nenhum produto encontrado nesta categoria.</p>)}
        </div>

        {/* FAQ (AGORA INTERATIVO) */}
        <section className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">Dúvidas Comuns sobre {categoria.nome}</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Aqui usamos o nosso novo componente */}
          <FAQAccordion itens={categoria.perguntasFrequentes} />
          
        </section>
      </div>
    </div>
  );
}