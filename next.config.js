/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['non-linearcareer.com'], // Replace with your domain if images are external
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    disableStaticImages: false,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: 'public/book cover.jpg', // Adjust pathname as needed
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: 'public/IMG_0373 Medium 2.jpeg', // Adjust pathname as needed
      },
       {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3000',
        pathname: 'public/book cover.jpg', // Adjust pathname as needed
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3000',
        pathname: 'public/IMG_0373 Medium 2.jpeg', // Adjust pathname as needed
      },
    ],
  },
};

module.exports = nextConfig;
