/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'p7lrpwrygsvtwfmu.public.blob.vercel-storage.com',
      'gistfy.vercel.app',
      'v0.blob.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'p7lrpwrygsvtwfmu.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gistfy.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig

