var webpack = require("webpack")
var path = require("path")

process.noDeprecation = true

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, 'dist', 'assets'),
		filename: "bundle.js",
		sourceMapFilename: 'bundle.map'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: {
					"presets": ["@babel/preset-env", "@babel/preset-react"]
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader', {
				loader: 'postcss-loader',
				options: {
					postcssOptions: { plugins: () => [require('autoprefixer')] }
				}}]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]	
}
