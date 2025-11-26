import { MetadataRoute } from 'next';
import { listaDeProdutos } from '@/data/produtos';
import { listaDeCategorias } from '@/data/categorias';

// ATENÇÃO: Mude isso para o seu domínio real quando comprar (ex: https://suplementospro.com.br)
const BASE_URL = 'https://www.seusite.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Páginas Estáticas (Home, Comparador, Guia)
  const rotasEstaticas = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/comparador`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guia`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // 2. Páginas de Categorias (Geradas dinamicamente)
  const rotasCategorias = listaDeCategorias.map((cat) => ({
    url: `${BASE_URL}/categoria/${cat.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 3. Páginas de Produtos (Geradas dinamicamente - O mais importante!)
  const rotasProdutos = listaDeProdutos.map((prod) => ({
    url: `${BASE_URL}/produto/${prod.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const, // Preços mudam, então daily é bom
    priority: 0.9,
  }));

  return [...rotasEstaticas, ...rotasCategorias, ...rotasProdutos];
}