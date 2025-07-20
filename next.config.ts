import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static site generation for better performance
  output: 'export',
  
  // Disable image optimization since we're using static export
  images: {
    unoptimized: true,
  },
  
  // Configure trailing slashes for static hosting
  trailingSlash: true,
  
  // Optimize bundle size and performance
  compress: true,
  
  // Enable experimental features for better performance
  experimental: {
    // Optimize for static export
    optimizePackageImports: ['react', 'react-dom'],
  },
};

export default nextConfig;
