const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'detailsMf',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './detail': './src/components/Detail',
        },
      })
    );

    return config;
  },
};
module.exports = nextConfig;
