import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'befitting-caribou-927.convex.cloud',
      },
      {
        protocol: 'https',
        hostname: 'useful-perch-663.convex.cloud',
      },
    ],
  },
};

export default nextConfig;

