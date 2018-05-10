const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '../src/server'),
  devtool: 'source-map',
  entry: './server.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: './server.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'react',
              ['env', {
                'targets': 'current',
              }]
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new CopyWebpackPlugin([{
      from: '../../static',
      to: './static',
    }]),
  ]
};
