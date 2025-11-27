import { MetadataRoute } from 'next';
import { listaDeProdutos } from '@/data/produtos';
import { listaDeCategorias } from '@/data/categorias';

// CORREÇÃO: Força o arquivo a ser estático
export const dynamic = 'force-static';

const BASE_URL = 'https://www.seusite.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
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

  const rotasCategorias = listaDeCategorias.map((cat) => ({
    url: `${BASE_URL}/categoria/${cat.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const rotasProdutos = listaDeProdutos.map((prod) => ({
    url: `${BASE_URL}/produto/${prod.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [...rotasEstaticas, ...rotasCategorias, ...rotasProdutos];
}