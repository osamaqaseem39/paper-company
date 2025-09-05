/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  experimental: {
    // Remove deprecated appDir option
  }
}

module.exports = nextConfig 