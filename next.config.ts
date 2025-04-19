import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        hostname: "useful-perch-663.convex.cloud",
        protocol: "https",
      },
      {
        hostname: "befitting-caribou-927.convex.cloud", 
        protocol: "https",
      }
    ],
  },
};

export default nextConfig;
