/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [{ hostname: 'robohash.org' }],
    },
};

module.exports = nextConfig;
