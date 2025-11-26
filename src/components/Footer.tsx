import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Sobre */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">Guia de Suplementos PRO</h3>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Nossa missão é simplificar a sua jornada fitness. Analisamos os melhores suplementos do mercado para que você invista seu dinheiro apenas no que traz resultados reais.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Início</Link></li>
              <li><Link href="/comparador" className="hover:text-emerald-400 transition-colors">Tabela Comparativa</Link></li>
              <li><Link href="/guia" className="hover:text-emerald-400 transition-colors">Guia de Objetivos</Link></li>
              <li><Link href="/sobre" className="hover:text-emerald-400 transition-colors">Quem Somos</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Legal */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacidade" className="hover:text-emerald-400 transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/termos" className="hover:text-emerald-400 transition-colors">Termos de Uso</Link></li>
              <li className="text-xs text-slate-500 mt-4">Contato: contato@seusite.com</li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Guia de Suplementos PRO. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 text-slate-500">
            Participamos do Programa de Associados do Mercado Livre.
          </p>
        </div>
      </div>
    </footer>
  );
}