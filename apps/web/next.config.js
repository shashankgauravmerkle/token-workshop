/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@token-workshop/ui', '@token-workshop/tokens'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'via.placeholder.com' },
      { protocol: 'https', hostname: 'images.toryburch.com' },
    ],
  },
}

module.exports = nextConfig
