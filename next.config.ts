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
      // --- LINHAS ADICIONADAS ---
      {
        protocol: 'https',
        hostname: 'integralmedica.vtexassets.com',
        port: '',
        pathname: '/**',
      },
      // --------------------------
    ],
  },
}

module.exports = nextConfig