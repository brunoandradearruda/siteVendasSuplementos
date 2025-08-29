import { listaDeProdutos } from '@/data/produtos';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

// Função para gerar o Título e a Descrição da página dinamicamente (ótimo para SEO)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const produto = listaDeProdutos.find(p => p.slug === params.slug);
  if (!produto) {
    return { title: 'Produto não encontrado' };
  }
  return {
    title: `${produto.nome} | Análise Completa`,
    description: `Confira nossa análise detalhada do ${produto.nome} da marca ${produto.marca}, incluindo pontos positivos e negativos.`,
  };
}

export default function ProdutoPage({ params }: PageProps) {
  const produto = listaDeProdutos.find(p => p.slug === params.slug);

  // Se o produto com o slug da URL não existir, mostra uma página 404
  if (!produto) {
    notFound();
  }

  // Função para criar a URL da categoria
  const slugify = (text: string) => text.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
  const categoriaSlug = slugify(produto.categoria);

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Coluna da Esquerda: Imagem */}
          <div className="relative w-full h-80 md:h-96">
            <Image
              src={produto.imagemUrl}
              alt={`Imagem do produto ${produto.nome}`}
              fill
              style={{ objectFit: 'contain' }}
              className="p-4"
              priority // Prioriza o carregamento da imagem principal
            />
          </div>

          {/* Coluna da Direita: Detalhes */}
          <div>
            <div className="mb-4 text-sm text-slate-500">
                <Link href="/" className="hover:text-blue-600">Home</Link> &gt; 
                <Link href={`/categoria/${categoriaSlug}`} className="hover:text-blue-600"> {produto.categoria}</Link>
            </div>
            <span className="text-sm font-semibold text-blue-600 bg-blue-100 py-1 px-3 rounded-full">
              {produto.marca}
            </span>
            <h1 className="text-4xl font-extrabold text-slate-800 mt-2">{produto.nome}</h1>

            {/* Card de Compra */}
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-md my-6">
              <p className="text-lg text-slate-600">Preço médio encontrado:</p>
              <p className="text-4xl font-bold text-emerald-700 my-2">R$ {produto.precoMedioEmReais.toFixed(2)}</p>
              <a 
                href={produto.linkAfiliado}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full bg-emerald-500 text-white text-center font-bold py-4 px-4 rounded-lg hover:bg-emerald-600 transition-transform duration-200 hover:scale-105"
              >
                Ver Melhor Oferta no Mercado Livre
              </a>
            </div>

            {/* Análise: Pontos Positivos e Negativos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="font-bold text-lg flex items-center text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Pontos Positivos
                </h3>
                <ul className="mt-2 space-y-2 list-inside">
                  {produto.pontosPositivos.map((ponto, i) => <li key={i} className="text-slate-600">{ponto}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg flex items-center text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                  Pontos Negativos
                </h3>
                <ul className="mt-2 space-y-2 list-inside">
                  {produto.pontosNegativos.map((ponto, i) => <li key={i} className="text-slate-600">{ponto}</li>)}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}