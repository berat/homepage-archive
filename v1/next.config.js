const { withContentlayer } = require('next-contentlayer');
const path = require('path');

module.exports = withContentlayer()({
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com'],
    minimumCacheTTL: 86400,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  }
});
