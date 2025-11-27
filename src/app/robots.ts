import { MetadataRoute } from 'next';

// CORREÇÃO: Força o arquivo a ser estático
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = 'https://www.seusite.com.br'; 

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}