const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const libraries = require('./libraries').all;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
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
        }),
        new ExtractTextPlugin('content/site-bundle.css')
    ])
}