import Link from 'next/link';
import { listaDeCategorias } from '@/data/categorias';
import { listaDeProdutos } from '@/data/produtos';
import Image from 'next/image';

export default function Home() {
  // Destaques (IDs: 1-Whey Dux, 20-Creatina Soldiers, 41-Pre Treino Diablo)
  const destaques = [1, 20, 41].map(id => listaDeProdutos.find(p => p.id === id)).filter(Boolean);

  const videosEducativos = [
    { titulo: "Whey Protein: O Guia Definitivo", canal: "Leandro Twin", id: "Scg-kUEFz2g", categoria: "Proteína" },
    { titulo: "Tudo sobre Creatina (Mitos e Verdades)", canal: "Renato Cariani", id: "hM4hC40M3qU", categoria: "Creatina" },
    { titulo: "Qual o Melhor Pré-Treino para Você?", canal: "Gorgonoid", id: "6M2q3s4t5u", categoria: "Pré-Treino" },
    { titulo: "Hipercalórico: Como tomar?", canal: "Leandro Twin", id: "lWJ6V7x0_IQ", categoria: "Hipercalórico" },
    { titulo: "BCAA: Ainda vale a pena tomar?", canal: "Paulo Muzy", id: "_Z1A2B3C4d", categoria: "BCAA" },
    { titulo: "Albumina: A Proteína Barata", canal: "Gorgonoid", id: "Xy9Z8w7v6u", categoria: "Albumina" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <div className="relative bg-slate-900 text-white overflow-hidden pb-24">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 py-24 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold mb-4 border border-emerald-500/30 animate-fade-in">
            GUIA DEFINITIVO 2025
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Pare de Jogar Dinheiro Fora <br/> com <span className="text-emerald-400">Suplementos Ruins</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light">
            Análises honestas, comparativos diretos e os melhores preços do Mercado Livre selecionados por quem entende do assunto.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#categorias" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              Ver Recomendações
            </a>
          </div>
        </div>
      </div>

      {/* DESTAQUES DA SEMANA */}
      <div className="container mx-auto px-4 relative z-20 mt-[-60px] mb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="text-2xl">🔥</span> Destaques da Semana
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destaques.map((prod) => prod && (
              <Link href={`/produto/${prod.slug}`} key={prod.id} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200 group">
                <div className="relative w-20 h-20 flex-shrink-0 bg-white rounded-lg p-2 border border-slate-100">
                  <Image src={prod.imagemUrl} alt={prod.nome} fill className="object-contain group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">{prod.categoria}</p>
                  <h4 className="font-bold text-slate-800 text-sm leading-tight line-clamp-2">{prod.nome}</h4>
                  <p className="text-xs text-slate-500 mt-1 group-hover:text-blue-600 transition-colors">Ler análise &rarr;</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* LISTA DE CATEGORIAS (VISUAL NOVO COM FOTOS) */}
      <div id="categorias" className="container mx-auto pb-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Navegue por Categoria</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {listaDeCategorias.map((categoria) => (
            <Link href={`/categoria/${categoria.id}`} key={categoria.id} className="group">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 flex items-center gap-6 h-full">
                
                {/* Imagem da Categoria (Lado Esquerdo) */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-slate-50 rounded-xl p-2">
                  <Image 
                    src={categoria.imagemCapa} 
                    alt={categoria.nome} 
                    fill 
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Texto (Lado Direito) */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors mb-2">
                    {categoria.nome}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {categoria.descricao}
                  </p>
                  <span className="inline-block mt-3 text-sm font-bold text-emerald-600 group-hover:translate-x-2 transition-transform">
                    Ver produtos &rarr;
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* VÍDEOS DE ESPECIALISTAS */}
      <div className="bg-slate-100 py-16 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-2 flex items-center justify-center gap-2">
              <span className="text-red-600">▶</span> Aprenda com Especialistas
            </h2>
            <p className="text-slate-600">Entenda como cada suplemento age no seu corpo antes de comprar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videosEducativos.map((video, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-shadow flex flex-col">
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.titulo}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">{video.categoria}</span>
                  <h3 className="text-lg font-bold text-slate-800 leading-tight mb-2">{video.titulo}</h3>
                  <p className="text-sm text-slate-500 mt-auto flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span> {video.canal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NEWSLETTER / WHATSAPP VIP */}
      <div className="bg-slate-900 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-emerald-500/30">
            Comunidade Exclusiva
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Receba Ofertas Relâmpago de Suplementos
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Não fazemos spam. Enviamos apenas cupons de desconto reais e alertas quando os preços do Whey e Creatina caem no Mercado Livre.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="px-6 py-4 rounded-full text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-auto sm:min-w-[300px] opacity-70 cursor-not-allowed"
              disabled
            />
            <a 
              href="https://wa.me/?text=Quero%20entrar%20na%20lista%20VIP"
              target="_blank"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] whitespace-nowrap flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              Entrar no Grupo VIP
            </a>
          </div>
          <p className="text-xs text-slate-500 mt-4">Junte-se a mais de 500 membros que economizam todo mês.</p>
        </div>
      </div>

    </div>
  );
}