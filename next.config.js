/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Prevent tree-shaking/minification issues with Spline
    config.module.rules.push({
      test: /@splinetool\/react-spline/,
      sideEffects: false,
    });
    return config;
  },
  experimental: {
    serverActions: false, // Optional, helps in some edge cases with server/client confusion
  },
};

module.exports = nextConfig;
