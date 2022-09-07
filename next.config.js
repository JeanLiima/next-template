const webpack = require("webpack");
const path = require('path')
/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.plugins.push(
        new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        })
      );
    return config;
    },
 }

module.exports = nextConfig
