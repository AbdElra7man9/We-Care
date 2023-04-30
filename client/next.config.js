/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // esmExternals: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/abdo9/image/**',
      },
      {
        protocol: 'https',
        hostname: 'shreethemes.in',
        port: '',
        pathname: '/doctris/layouts/assets/images/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
