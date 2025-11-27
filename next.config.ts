import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Gera a pasta "out" com HTML estático
  images: {
    unoptimized: true, // Permite imagens sem servidor Node.js
  },
};

export default nextConfig;