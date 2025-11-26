import { listaDePosts } from '@/data/posts';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Dicas de Suplementação e Treino',
  description: 'Artigos especializados para te ajudar a escolher os melhores suplementos e otimizar seus resultados.',
};

export default function BlogPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Blog do <span className="text-emerald-600">Especialista</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conteúdo direto ao ponto, sem enrolação, para você entender o que está colocando no seu corpo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listaDePosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={post.imagemUrl} 
                  alt={post.titulo} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
                  {post.data}
                </span>
                <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.titulo}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                  {post.resumo}
                </p>
                <span className="text-sm font-bold text-slate-800 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Ler Artigo Completo <span className="text-emerald-500">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}