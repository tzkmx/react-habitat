var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        // Our main app
        app: ['./src/App.ts'],


        vendor: [
            'babel-polyfill', // React Habitat requires Object.assign pollyfill for old IE support
            'mutationobserver-shim',
            'react',
            'react-dom',
            'react-habitat'
        ]
    },
    output: {
        filename: 'dist/app.bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js'],
    },
    module: {
        loaders: [
	        {
	            test: /\.ts(x?)$/,
                exclude:/node_modules/,
                loader: 'ts-loader',
            }
        ]
    },
    plugins: [

        // Split our app code and libraries. See "Entry" config above
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"dist/vendor.bundle.js"),

        // Auto open the demo
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};