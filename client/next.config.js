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
    ],
  },
}

module.exports = nextConfig
