/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: process.env.REACT_APP_HOST || 'localhost',
    port: process.env.PORT || 8111,
    hot: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: true,
    },
  },
  performance: {
    hints: false,
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});