import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', 
  basePath: '/top-app',
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'old-images.hb.ru-msk.vkcs.cloud',
        port: '',
        pathname: '/**', // Разрешает любые пути на этом домене
      },
    ],
  },
};

export default nextConfig;
