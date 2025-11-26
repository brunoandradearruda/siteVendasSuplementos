import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Mude para o seu domínio real
  const BASE_URL = 'https://www.seusite.com.br'; 

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Exemplo de pasta bloqueada (opcional)
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}