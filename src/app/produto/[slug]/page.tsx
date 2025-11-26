import { listaDeProdutos } from '@/data/produtos';
import { getPrecoAtualizado } from '@/utils/apiML';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import StickyBuyButton from '@/components/StickyBuyButton';
import TrustBadges from '@/components/TrustBadges';

interface PageProps { 
  params: Promise<{ slug: string }> 
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const produto = listaDeProdutos.find(p => p.slug === slug);
  if (!produto) return { title: 'Produto não encontrado' };
  return { title: `${produto.nome} | Review Completo`, description: `Vale a pena comprar o ${produto.nome}? Confira nossa análise completa.` };
}
    
const slugify = (text: string) => text.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');

export default async function ProdutoPage({ params }: PageProps) {
  const { slug } = await params;
  const produto = listaDeProdutos.find(p => p.slug === slug);
  if (!produto) notFound();

  const precoRealTime = await getPrecoAtualizado(produto.mlId);
  const precoFinal = precoRealTime || produto.precoMedioEmReais;
  const categoriaSlug = slugify(produto.categoria);

  const produtosRelacionados = listaDeProdutos
    .filter(p => p.categoryId === produto.categoryId && p.id !== produto.id)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: produto.nome,
    image: produto.imagemUrl,
    description: `Análise completa do ${produto.nome}.`,
    brand: {
      '@type': 'Brand',
      name: produto.marca,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      price: precoFinal,
      availability: 'https://schema.org/InStock',
      url: produto.linkAfiliado,
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container mx-auto px-4 max-w-6xl">
        <nav className="text-sm text-slate-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link> /
          <Link href={`/categoria/${categoriaSlug}`} className="hover:text-emerald-600 transition-colors">{produto.categoria}</Link> /
          <span className="text-slate-800 font-medium truncate">{produto.nome}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 bg-white p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <Image src={produto.imagemUrl} alt={produto.nome} fill style={{ objectFit: 'contain' }} className="p-4 hover:scale-105 transition-transform duration-500" priority />
              </div>
            </div>

            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col">
              <div className="mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{produto.marca}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">{produto.nome}</h1>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
                <p className="text-slate-700 italic text-lg">
                  <span className="not-italic text-2xl mr-2">💡</span>
                  {/* CORREÇÃO: Aspas arrumadas */}
                  &quot;Ideal para quem busca <strong>{produto.pontosPositivos[0].toLowerCase()}</strong> com a confiabilidade da marca {produto.marca}.&quot;
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-6 rounded-2xl shadow-sm mb-10 relative overflow-hidden">
                {precoRealTime && (
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl animate-pulse">
                    PREÇO ATUALIZADO
                  </div>
                )}
                <p className="text-sm text-slate-500 mb-1">Melhor oferta encontrada no Mercado Livre:</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-extrabold text-emerald-600">R$ {precoFinal.toFixed(2).replace('.', ',')}</span>
                  <span className="text-sm text-emerald-700 font-medium bg-emerald-100 px-2 py-1 rounded">À vista</span>
                </div>
                
                <a href={produto.linkAfiliado} target="_blank" rel="noopener noreferrer" 
                   className="block w-full bg-[#2D3277] hover:bg-[#23265e] text-white text-center text-xl font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3">
                   {/* CORREÇÃO: Troca de img por Image com width/height definidos */}
                   <Image src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__small.png" alt="ML" width={30} height={30} className="h-6 w-auto" />
                   Comprar Agora com Segurança
                </a>
                <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                  Transação segura processada pelo Mercado Livre
                </p>
              </div>

              <TrustBadges />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2 border-b pb-2 border-slate-100">
                    <span className="bg-green-100 text-green-700 p-1 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></span>
                    Pontos Positivos
                  </h3>
                  <ul className="space-y-3">
                    {produto.pontosPositivos.map((ponto, i) => (
                      <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                        <span className="text-green-500 mt-1">●</span> {ponto}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2 border-b pb-2 border-slate-100">
                    <span className="bg-red-100 text-red-700 p-1 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></span>
                    Pontos de Atenção
                  </h3>
                  <ul className="space-y-3">
                    {produto.pontosNegativos.map((ponto, i) => (
                      <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                        <span className="text-red-400 mt-1">●</span> {ponto}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {produtosRelacionados.length > 0 && (
          <section className="border-t border-slate-200 pt-12 mb-20">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Outras Opções de {produto.categoria}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {produtosRelacionados.map((relacionado) => (
                <Link href={`/produto/${relacionado.slug}`} key={relacionado.id} className="group block">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-slate-100 transition-all duration-300 p-4 flex flex-col h-full">
                    <div className="relative w-full h-40 mb-4">
                      <Image src={relacionado.imagemUrl} alt={relacionado.nome} fill style={{ objectFit: 'contain' }} className="group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="mt-auto">
                      <p className="text-xs text-blue-600 font-bold uppercase">{relacionado.marca}</p>
                      <h3 className="text-sm font-bold text-slate-800 line-clamp-2 h-10 mt-1 group-hover:text-blue-600 transition-colors">{relacionado.nome}</h3>
                      <p className="text-lg font-bold text-emerald-600 mt-2">R$ {relacionado.precoMedioEmReais.toFixed(2).replace('.', ',')}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
      <StickyBuyButton price={precoFinal} link={produto.linkAfiliado} name={produto.nome} />
    </div>
  );
}