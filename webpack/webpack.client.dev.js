const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '../src/client'),
  devtool: 'inline-source-map',
  entry: './client.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: './bundle.js'
  },
  devServer: {
    hot: true,
    publicPath: '/',
    historyApiFallback: true
  },
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
                targets: { browsers: ['last 2 versions'] } 
              }]
            ],
          },
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: '../../static',
      to: './static',
    }]),
  ]
};