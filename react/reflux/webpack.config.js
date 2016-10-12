var webpack = require('webpack')

module.exports = {
	entry:'./src/index.jsx',
	output:{
		path:'./static',
		publicPath:'/static/',
		filename:'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'jsx-loader'
			}, 
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
}