var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './components/router.jsx',

    output: {
        filename: 'app.js',
        path: path.join('public/js/')
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // don't show unreachable variables etc
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    ]
};
