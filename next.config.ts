/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.tcdn.com.br',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'integralmedica.vtexassets.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'http2.mlstatic.com',
        port: '',
        pathname: '/**',
      },
      // --- NOVOS DOMÍNIOS ADICIONADOS ---
      {
        protocol: 'https',
        hostname: 'darklab.ind.br',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'probiotica.vtexassets.com',
        port: '',
        pathname: '/**',
      },
      // ------------------------------------
    ],
  },
}

module.exports = nextConfig