// webpack.config.js
const path = require('path')
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin') 
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
 		filename: 'index.html' // ім'я вихідного файлу
 	}),
	new HtmlWebpackPlugin({
		title: 'Хобі та інтереси Олега Удода',
		template: path.resolve(__dirname,'./src/pages/about.html'),
		filename: 'about.html' //ім`я вихідного файлу
	}),
	new CleanWebpackPlugin(),
	]
} 
