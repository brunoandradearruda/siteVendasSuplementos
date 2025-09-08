import { listaDeCategorias } from '@/data/categorias';
import { listaDeProdutos } from '@/data/produtos';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface PageProps { params: { slug: string } }

export default function CategoriaPage({ params }: PageProps) {
  const categoria = listaDeCategorias.find(c => c.id === params.slug);
  
  if (!categoria) {
    notFound();
  }

  // LÓGICA DE FILTRO CORRIGIDA E SIMPLIFICADA
  const produtosDaCategoria = listaDeProdutos.filter(p => p.categoryId === params.slug);

  return (
    <div className="container mx-auto py-10 px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-slate-800">{categoria.nome}</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{categoria.descricao}</p>
      </header>

      {/* Grid de Produtos da Categoria */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {produtosDaCategoria.map(produto => (
          <Link href={`/produto/${produto.slug}`} key={produto.id} className="block group">
             <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full group-hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-56"><Image src={produto.imagemUrl} alt={produto.nome} fill style={{objectFit: 'contain'}} className="p-4" /></div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-slate-800">{produto.nome}</h2>
                  <h3 className="text-md text-slate-500 mb-4">{produto.marca}</h3>
                  <div className="mt-auto pt-4"><span className="block w-full bg-blue-500 text-white text-center font-bold py-3 px-4 rounded-lg group-hover:bg-blue-600 transition-colors">Ver Análise Detalhada</span></div>
                </div>
              </div>
          </Link>
        ))}
        {/* Mensagem caso não encontre produtos */}
        {produtosDaCategoria.length === 0 && (
            <p className="md:col-span-2 lg:col-span-3 text-center text-slate-500">Nenhum produto encontrado para esta categoria ainda.</p>
        )}
      </div>

      {/* Seção de Perguntas Frequentes */}
      <section className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {categoria.perguntasFrequentes.map((faq, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md border">
              <h3 className="font-bold text-lg text-slate-800">{faq.pergunta}</h3>
              <p className="text-slate-600 mt-1">{faq.resposta}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}