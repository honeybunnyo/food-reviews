/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-68e1cd49593e470eb23d48261c54fb64.r2.dev',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
