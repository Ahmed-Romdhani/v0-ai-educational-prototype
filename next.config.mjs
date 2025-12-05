/** @type {import('next').NextConfig} */
const nextConfig = {
  // Augmente la limite de taille pour les modèles
  experimental: {
    serverComponentsExternalPackages: ['@tensorflow/tfjs'],
  },
  
  // Désactive le strict mode pour TF.js
  reactStrictMode: false,
  
  // Headers pour les fichiers binaires
  async headers() {
    return [
      {
        source: '/models/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;