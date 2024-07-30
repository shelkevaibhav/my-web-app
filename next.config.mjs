/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.toiimg.com',
        port: '',
        pathname: '/thumb/msid-111864556,imgsize-72174,width-400,resizemode-4/**',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
        port: '',
        pathname: '/images/branding/**',
      },
      {
        protocol: 'https',
        hostname: 'images.hindustantimes.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
};

export default nextConfig;
