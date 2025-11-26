/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.tcdn.com.br' },
      { protocol: 'https', hostname: 'integralmedica.vtexassets.com' },
      { protocol: 'https', hostname: 'http2.mlstatic.com' },
      { protocol: 'https', hostname: 'darklab.ind.br' },
      { protocol: 'https', hostname: 'probiotica.vtexassets.com' },
      // ADICIONADO: Autorização para imagens do blog (Unsplash)
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;