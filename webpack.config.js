const path = require('path');
const AutoDllPlugin = require('autodll-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const APP_DIR = path.join(__dirname, 'src');
const BUILD_DIR = path.join(__dirname, 'dist');
const ASSETS_DIR = path.join(__dirname, 'src', 'assets');

module.exports = {
	entry: APP_DIR,
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer: {
		compress: true,
		historyApiFallback: true,
		contentBase: ASSETS_DIR
	},
	module: {
		rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
	},
	//  // When importing a module whose path matches one of the following, just
    // // assume a corresponding global variable exists and use that instead.
    // // This is important because it allows us to avoid bundling all of our
    // // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
	// },
	
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},

	devtool: 'source-map',

	plugins: [
		new HtmlPlugin({
			inject: true,
			template: './src/index.html',
			filename: 'index.html',
		}),

		// Most recommended to optimize your dependencies!
		new AutoDllPlugin({
			filename: '[name].dll.js',
			inject: true,
			path: './dll',
			entry: {
				vendor: ['react', 'react-dom', 'mobx', 'styled-components'],
			},
		}),
	]
};
