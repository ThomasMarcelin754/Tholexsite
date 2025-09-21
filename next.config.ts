import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // App Router handles i18n via [locale] segments
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'x.com',
      },
      {
        protocol: 'https',
        hostname: 'linkedin.com',
      },
    ],
  },
};

export default nextConfig;
