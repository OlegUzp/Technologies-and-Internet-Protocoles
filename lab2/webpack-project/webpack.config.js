// webpack.config.js
const path = require('path')
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
module.exports = {
 mode: "development",
 entry: {
  main: path.resolve(__dirname, './src/pages'),
 },
 output: {
  path: path.resolve(__dirname, './dist'),
  filename: '[name].bundle.js',
 },
  plugins: [
	new CleanWebpackPlugin(),
	]
} 
