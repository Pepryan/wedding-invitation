/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/wedding-invitation',
  assetPrefix: '/wedding-invitation/',
  experimental: {
    disableOptimizedLoading: true,
  }
}

module.exports = nextConfig 