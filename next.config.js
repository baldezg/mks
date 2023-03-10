/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ['mks-sistemas.nyc3.digitaloceanspaces.com'],
}

}

module.exports = nextConfig;