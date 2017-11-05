const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: path.join(__dirname, '../src'),
  devtool: 'source-map',
  entry: './index.js',
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
              ['env']
            ],
          },
        },
      },
    ],
  },
  plugins: [
  ]
};
