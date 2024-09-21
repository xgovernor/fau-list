/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'logoipsum.com'
            }
        ]
    }
};

export default nextConfig;
