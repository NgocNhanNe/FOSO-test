import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false
  },
  images: {
    domains: ['robohash.org', 'fososoft.vn']
  }
};

export default nextConfig;
