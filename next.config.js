/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  // basePath: isProd ? '/final-teamD-project' : '',
  assetPrefix: "https://njit-wis.github.io/final-teamD-project/"
}

module.exports = nextConfig
