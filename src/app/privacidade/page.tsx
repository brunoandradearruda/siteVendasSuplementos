import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Guia de Suplementos PRO',
  description: 'Nossa política de privacidade e transparência sobre links de afiliados.',
};

export default function PrivacidadePage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Política de Privacidade</h1>
      
      <div className="prose prose-slate max-w-none text-slate-600">
        <p className="mb-4">A sua privacidade é importante para nós. É política do Guia de Suplementos PRO respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.</p>
        
        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">1. Links de Afiliados</h2>
        <p className="mb-4">
          Este site participa do Programa de Afiliados do Mercado Livre e outras parceiras. Isso significa que, ao clicar em alguns dos links e realizar uma compra, podemos receber uma pequena comissão. Isso <strong>não altera o preço</strong> que você paga pelo produto. Essas comissões ajudam a manter o site no ar e a produzir conteúdo de qualidade.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">2. Coleta de Dados</h2>
        <p className="mb-4">
          Não coletamos informações pessoais identificáveis (como nome ou e-mail) a menos que você as forneça voluntariamente (ex: em um formulário de contato). Utilizamos cookies apenas para melhorar a experiência de navegação e contabilizar cliques nos links de parceiros.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">3. Segurança</h2>
        <p className="mb-4">
          Todas as transações de compra são realizadas diretamente no site do Mercado Livre ou das lojas parceiras. Nós <strong>não temos acesso</strong> aos seus dados de pagamento ou cartão de crédito.
        </p>
      </div>
    </div>
  );
}