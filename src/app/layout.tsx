import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header"; // 1. IMPORTA O NOVO COMPONENTE
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '800'] 
});

export const metadata: Metadata = {
  title: "Guia de Suplementos PRO",
  description: "Análises, comparações e recomendações dos melhores suplementos do mercado.",
};

// --- Componente do Rodapé (Footer) ---
// O Footer é simples e não precisa de interatividade, então pode continuar aqui.
function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-400">
      <div className="container mx-auto py-8 px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Guia de Suplementos PRO. Todos os direitos reservados.</p>
        <p className="text-xs mt-2">
          Aviso: As informações neste site são para fins educacionais. Consulte sempre um profissional de saúde antes de iniciar qualquer suplementação.
        </p>
      </div>
    </footer>
  );
}

// --- O Layout Principal que "abraça" todas as páginas ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} bg-slate-50`}>
        <div className="flex flex-col min-h-screen">
          <Header /> {/* 2. USA O COMPONENTE IMPORTADO */}
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}