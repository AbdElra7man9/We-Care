/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    bufferutil: "bufferutil",
    "utf-8-validate": "utf-8-validate",
    // esmExternals: true
  },
}

module.exports = nextConfig
