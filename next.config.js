/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        hostname: 'images.unsplash.com',
        hostname: 'source.unsplash.com',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'res.cloudinary.com',
      // tambahkan domain lain yang diperlukan
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig 