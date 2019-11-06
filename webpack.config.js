module.exports = {
	mode: 'development',

	devtool: 'cheap-module-sourcemap',

	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
			}
		]
	}
}
