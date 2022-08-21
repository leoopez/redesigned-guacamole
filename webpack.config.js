/** @format */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV;

module.exports = {
  mode: mode || 'development',
  entry: {
    main: path.resolve(__dirname, 'src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3001,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /.s?css$/,
        exclude: /node_modules/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /\.svg$/i,
        exclude: /node_modules/,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  plugins: [
    new miniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
};
