import { listaDeMaterias } from '@/data/materias';
import { listaDeProdutos } from '@/data/produtos';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Interface para os parâmetros da página (o 'slug' da URL)
interface PageProps {
  params: {
    slug: string;
  };
}

export default function MateriaPage({ params }: PageProps) {
  const { slug } = params;

  // Encontra a matéria correspondente ao slug da URL
  const materia = listaDeMaterias.find((m) => m.id === slug);

  // Se a matéria não for encontrada, mostra uma página de erro 404
  if (!materia) {
    notFound();
  }

  // Encontra o produto associado a esta matéria para mostrar o card de compra
  const produtoAssociado = listaDeProdutos.find((p) => p.id === materia.produtoId);

  return (
    <div className="bg-slate-50 min-h-screen">
       <header className="bg-white shadow-sm">
        <div className="container mx-auto py-6 px-4">
          <div className="text-center mb-4">
             <Link href="/" className="text-blue-600 hover:underline">
                &larr; Voltar para a página principal
             </Link>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-800 text-center">
            {materia.titulo}
          </h1>
          <p className="text-slate-600 text-center mt-2 text-lg">
            {materia.subtitulo}
          </p>
        </div>
      </header>
      
      <main className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Coluna Principal com o Conteúdo */}
          <article className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-lg shadow-md">
            {materia.conteudo.map((secao, index) => (
              <section key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4">
                  {secao.secao}
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  {secao.paragrafos.map((p, pIndex) => (
                    <p key={pIndex} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              </section>
            ))}
          </article>

          {/* Barra Lateral com o Card de Compra */}
          <aside className="lg:col-span-1">
            {produtoAssociado && (
               <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-28">
                <div className="relative w-full h-56">
                  <Image
                    src={produtoAssociado.imagemUrl}
                    alt={`Imagem do produto ${produtoAssociado.nome}`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-4"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-800">{produtoAssociado.nome}</h3>
                  <p className="text-md text-slate-500 mb-4">{produtoAssociado.marca}</p>
                  <a
                    href={produtoAssociado.linkAfiliado}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-emerald-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-600 transition-transform duration-200 hover:scale-105"
                  >
                    Ver Melhor Oferta
                  </a>
                </div>
               </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}