import { listaDePosts } from '@/data/posts';
import { listaDeProdutos } from '@/data/produtos';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// CORREÇÃO PARA EXPORTAÇÃO ESTÁTICA
export async function generateStaticParams() {
  return listaDePosts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = listaDePosts.find(p => p.id === slug);
  if (!post) return { title: 'Artigo não encontrado' };
  return { title: post.titulo, description: post.resumo };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = listaDePosts.find(p => p.id === slug);

  if (!post) notFound();

  const produtoRelacionado = post.produtoRelacionadoSlug 
    ? listaDeProdutos.find(p => p.slug === post.produtoRelacionadoSlug)
    : null;

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="relative h-[400px] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
        <Image 
          src={post.imagemUrl} 
          alt={post.titulo} 
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-40"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-sm font-bold mb-4 backdrop-blur-sm">
            BLOG SUPLEMENTOS PRO
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 max-w-4xl mx-auto">{post.titulo}</h1>
          <p className="text-slate-300">Por {post.autor} • {post.data}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
          <article className="prose prose-slate prose-lg max-w-none text-slate-700">
            {post.conteudo.map((paragrafo, index) => (
              <div key={index}>
                <p className="mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: paragrafo }} />
                {index === 1 && produtoRelacionado && (
                  <div className="my-10 bg-slate-50 border-l-4 border-emerald-500 p-6 rounded-r-xl shadow-sm not-prose flex flex-col sm:flex-row items-center gap-6">
                    <div className="relative w-24 h-24 flex-shrink-0 bg-white rounded-lg p-2 border border-slate-200">
                      <Image src={produtoRelacionado.imagemUrl} alt={produtoRelacionado.nome} fill style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                      <p className="text-xs font-bold text-slate-500 uppercase mb-1">Recomendação do Editor</p>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2">{produtoRelacionado.nome}</h3>
                      <Link href={`/produto/${produtoRelacionado.slug}`} className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold py-2 px-6 rounded-lg transition-colors">
                        Ver Análise e Preço
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </article>
          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link href="/blog" className="text-emerald-600 font-bold hover:underline">
              ← Voltar para o Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}