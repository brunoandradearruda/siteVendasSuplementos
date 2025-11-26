import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nós | Guia de Suplementos PRO',
  description: 'Conheça a missão do Guia de Suplementos PRO e nossa equipe de especialistas.',
};

export default function SobrePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
            Nossa missão é simplificar a sua <span className="text-emerald-600">evolução</span>.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Cansado de gastar dinheiro com suplementos que não funcionam? Nós também estávamos. Por isso criamos o Guia de Suplementos PRO.
          </p>
        </div>

        {/* Bloco de História/Valor */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto bg-slate-800">
              {/* Imagem ilustrativa de "equipe" ou academia */}
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" 
                alt="Equipe na academia" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Por que confiar em nós?</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                O mercado de suplementação é cheio de promessas vazias e marketing agressivo. É difícil saber o que realmente vale a pena.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Nossa equipe analisa rótulos, testa produtos e compara preços diariamente para trazer a você apenas o que funciona. Somos 100% transparentes: se um produto é ruim, nós falamos.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <span className="block text-3xl font-extrabold text-emerald-600">45+</span>
                  <span className="text-xs text-slate-500 uppercase font-bold">Produtos Analisados</span>
                </div>
                <div className="text-center border-l border-slate-200 pl-4">
                  <span className="block text-3xl font-extrabold text-emerald-600">10k+</span>
                  <span className="text-xs text-slate-500 uppercase font-bold">Leitores Mensais</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco de Compromisso */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <span className="text-4xl mb-4 block">🔍</span>
            <h3 className="font-bold text-slate-800 mb-2">Análises Imparciais</h3>
            <p className="text-sm text-slate-500">Nossas notas são baseadas em tabela nutricional e custo-benefício, não em hype.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <span className="text-4xl mb-4 block">💲</span>
            <h3 className="font-bold text-slate-800 mb-2">Melhores Preços</h3>
            <p className="text-sm text-slate-500">Nossos robôs monitoram o Mercado Livre para encontrar a melhor oferta do dia.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <span className="text-4xl mb-4 block">🔒</span>
            <h3 className="font-bold text-slate-800 mb-2">Segurança Total</h3>
            <p className="text-sm text-slate-500">Indicamos apenas lojas oficiais e vendedores Platinum/Gold.</p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-emerald-600 rounded-3xl p-10 md:p-16 text-white shadow-2xl shadow-emerald-200">
          <h2 className="text-3xl font-bold mb-4">Pronto para evoluir?</h2>
          <p className="text-emerald-100 mb-8 max-w-lg mx-auto">
            Não perca mais tempo pesquisando. Veja nosso ranking atualizado dos melhores suplementos do ano.
          </p>
          <Link 
            href="/comparador" 
            className="inline-block bg-white text-emerald-700 font-bold py-4 px-10 rounded-full hover:bg-emerald-50 transition-transform hover:scale-105 shadow-lg"
          >
            Ver Tabela Comparativa
          </Link>
        </div>

      </div>
    </div>
  );
}