import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso | Guia de Suplementos PRO',
};

export default function TermosPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Termos de Uso</h1>
      
      <div className="prose prose-slate max-w-none text-slate-600">
        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">1. Termos</h2>
        <p className="mb-4">Ao acessar o Guia de Suplementos PRO, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.</p>
        
        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">2. Isenção de Responsabilidade</h2>
        <p className="mb-4">
          Os materiais no Guia de Suplementos PRO são fornecidos "como estão". Não oferecemos garantias de que os preços exibidos sejam exatamente os mesmos do momento da compra, pois os vendedores podem alterar valores a qualquer momento.
        </p>
        <p className="mb-4">
          O conteúdo deste site tem caráter informativo e educacional. Não substitui aconselhamento médico ou nutricional profissional. Sempre consulte um médico ou nutricionista antes de iniciar o uso de suplementos.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">3. Precisão dos materiais</h2>
        <p className="mb-4">
          Podem haver erros técnicos, tipográficos ou fotográficos nos materiais exibidos. Não garantimos que qualquer material em seu site seja preciso, completo ou atual, embora nos esforcemos para manter as informações atualizadas.
        </p>
      </div>
    </div>
  );
}