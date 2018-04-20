const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: '[name].[hash].bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss-loader',
          { loader: 'sass-loader', query: { sourceMap: false } },
        ],
        exclude: /node_modules/,
      },
      { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=15000&name=[name]-[hash].[ext]' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      images: path.join(__dirname, '/src/assets/img'),
      variables: path.join(__dirname, '/src/assets/stylesheets/abstracts/_variables'),
      mixins: path.join(__dirname, '/src/assets/stylesheets/abstracts/_mixins'),
      respond: path.join(__dirname, '/src/assets/stylesheets/abstracts/_respond'),
      functions: path.join(__dirname, '/src/assets/stylesheets/abstracts/_functions'),
      animations: path.join(__dirname, '/src/assets/stylesheets/base/_animations'),
      containers: path.join(__dirname, '/src/containers'),
      components: path.join(__dirname, '/src/components'),
      reducers: path.join(__dirname, '/src/reducers'),
      services: path.join(__dirname, '/src/services'),
      hocs: path.join(__dirname, '/src/hocs'),
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
    }),
    new FaviconsWebpackPlugin('./src/assets/img/logo.png'),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
