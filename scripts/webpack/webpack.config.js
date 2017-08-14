const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve('./build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		],
	},
	plugins: [new HtmlWebpackPlugin({
		title: 'Converter',
		template: './src/index.html'
	})],
};
