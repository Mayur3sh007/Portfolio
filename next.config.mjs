/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mayuresh-chavan.vercel.app',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
