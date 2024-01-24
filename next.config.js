/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos']
    },
    experimental: {
        serverActions: true,
        esmExternals: false
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig
