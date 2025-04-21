import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // images: {
  //   remotePatterns: [
  //     {
  //       hostname: "useful-perch-663.convex.cloud",
  //       protocol: "https",
  //     },
  //     {
  //       hostname: "befitting-caribou-927.convex.cloud", 
  //       protocol: "https", 
  //       pathname: "/api/storage/**",
  //     }
  //   ],
  // }, 

  images: {
    domains: ['befitting-caribou-927.convex.cloud', 'useful-perch-663.convex.cloud'],
  },
};

export default nextConfig;
