/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos']
    },
    experimental: {
        serverActions: true,
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig
