import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";
import SalesNotification from "@/components/SalesNotification";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '800'] 
});

export const metadata: Metadata = {
  // IMPORTANTE: Troque este URL pelo seu domínio final quando comprar (ex: https://suplementospro.com.br)
  metadataBase: new URL('https://www.seusite.com.br'), 
  
  title: "Guia de Suplementos PRO",
  description: "Análises, comparações e recomendações dos melhores suplementos do mercado.",
  
  openGraph: {
    title: "Guia de Suplementos PRO",
    description: "Pare de jogar dinheiro fora. Escolha os melhores suplementos com nossas análises.",
    siteName: "Guia de Suplementos PRO",
    locale: "pt_BR",
    type: "website",
  },
};







export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} bg-slate-50`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <SalesNotification /> {/* ADICIONE AQUI */}
        </div>
      </body>
    </html>
  );
}