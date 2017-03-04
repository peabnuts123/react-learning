var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var libraries = require('./libraries').all;

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: 'dist/',
        filename: 'scripts/application-bundle.min.js'
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader"
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: libraries.map(libName => {
        return new webpack.DllReferencePlugin({
            manifest: require(`./build/${libName}-manifest.json`)
        })
    })
    .concat([
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ])
}