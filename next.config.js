/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  // output: 'standalone',
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.API_HOSTNAME_URL,
        port: '',
        pathname: '/api/**',
      },
    ],
  },
}
