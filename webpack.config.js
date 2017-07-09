// webpack.config.js
const webpack = require('webpack');
var path = require("path");
module.exports = {
    entry: './src/index.js',
    entry: {
        bundle: './src/index.js',
    },
    output: {
        path: path.join(__dirname, 'out'),
        filename: '[name].js',
        publicPath: "./",
        chunkFilename: 'asyncChunk/[name].js'
    },
    externals: {
        'jquery': 'jQuery',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ['$', 'exports', 'require']
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({ 
            name: 'vendor'
        })
    ],
};

if (process.env.NODE_ENV === 'dev') {
    module.exports.plugins = [];
    module.exports.devtool = 'eval-source-map';
}