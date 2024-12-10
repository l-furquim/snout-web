import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/app/components/profile-header.tsx',
  },
};

export default nextConfig;
