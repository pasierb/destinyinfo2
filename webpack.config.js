const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	externals: {
		jquery: 'jQuery',
	},
	plugins: [new Dotenv()],
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				loader: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
};
