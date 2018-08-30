const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

// const htmlPlugin = new HtmlWebPackPlugin({
//   template: './src/index.html',
//   filename: './index.html',
// });

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].[chunkhash].js',
    publicPath: '/',
  },
  devServer: {
    port: 4000,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    compress: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css',
    }),
    new CleanWebpackPlugin('build', {}),
  ],
};
