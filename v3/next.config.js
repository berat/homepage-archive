const { withContentlayer } = require('next-contentlayer');
const dns = require('dns');

// its for build error
dns.setDefaultResultOrder('ipv4first');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '**'
      }
    ]
  }
};

module.exports = withContentlayer(nextConfig);
