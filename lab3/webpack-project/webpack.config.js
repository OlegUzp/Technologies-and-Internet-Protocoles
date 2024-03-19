const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, './src/index.js'), 
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Про Олега Удода',
      template: path.resolve(__dirname, './src/pages/index.html'),
      filename: 'index.html', // Ім'я вихідного файлу
    }),
    new HtmlWebpackPlugin({
      title: 'Про Олега Удода',
      template: path.resolve(__dirname, './src/pages/about.html'),
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Новини',
      template: path.resolve(__dirname, './src/pages/news.html'),
      filename: 'news.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Фотографії',
      template: path.resolve(__dirname, './src/pages/photo.html'),
      filename: 'photo.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Розклад Олега Удода',
      template: path.resolve(__dirname, './src/pages/rozklad.html'),
      filename: 'rozklad.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/images', to: './' } 
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
