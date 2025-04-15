/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qoewyfcwslvltilcnfgr.supabase.co',
        pathname: '/**',
      },
    ],
  },

  
};

export default nextConfig;
