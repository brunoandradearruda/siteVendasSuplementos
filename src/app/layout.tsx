import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guia de Suplementos PRO",
  description: "Análises, comparações e recomendações dos melhores suplementos do mercado.",
};

// --- COMPONENTE DO CABEÇALHO (HEADER) ---
function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-slate-800 text-center">
          Guia de Suplementos PRO
        </h1>
        <p className="text-slate-600 text-center mt-2">
          Análises e recomendações dos melhores suplementos do mercado.
        </p>
        <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-4 border-t pt-4">
          <Link href="/" className="font-semibold text-slate-700 hover:text-blue-600">
            Recomendações
          </Link>
          <Link href="/comparador" className="font-semibold text-slate-700 hover:text-blue-600">
            Tabela Comparativa
          </Link>
          <Link href="/guia" className="font-semibold text-slate-700 hover:text-blue-600">
            Qual suplemento tomar?
          </Link>
        </nav>
      </div>
    </header>
  );
}

// --- COMPONENTE DO RODAPÉ (FOOTER) ---
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


// --- O LAYOUT PRINCIPAL QUE "ABRAÇA" TODAS AS PÁGINAS ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-slate-50`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}