import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // config contentlayer
  // swcMinify: true,
  turbopack: {},
};

export default withContentlayer(nextConfig);
