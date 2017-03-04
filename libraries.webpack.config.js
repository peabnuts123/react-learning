const webpack = require('webpack');
const entryPoints = require('./libraries').entryPoints;
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: entryPoints,
    output: {
        filename: '[name]-bundle.min.js',
        path: 'dist/scripts/lib',
        library: '[name]_lib',
    },
    module: {
        loaders: [
            {
                test: /\.(eot|svg|ttf|woff2?)$/,
                loader: 'file-loader',
                query: {
                    name: '../../content/fonts/[name].[ext]'
                }
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
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_lib',
            path: 'build/[name]-manifest.json',
        }),
        new ExtractTextPlugin({
            filename: '../../content/lib/[name]-bundle.min.css'
        })
    ]
}
