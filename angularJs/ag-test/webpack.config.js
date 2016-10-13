var webpack = require('webpack')

module.exports = {
	entry:'./src/main.js',
	output:{
		path:'./static',
		publicPath:'/static/',
		filename:'bundle.js'
	},
	resolve: {
		extensions: ['', '.js'],
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
}