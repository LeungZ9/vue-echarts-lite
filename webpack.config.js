'use strict';
/**
 * Webpack config
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.resolve('./src'),
    entry: path.resolve('./src/demo'),
    output: {
        filename: 'demo.min.js'
    },
    externals: {
        echarts: 'echarts'
    },
    devServer: {
        disableHostCheck: true,
    },
    devtool: false,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.vue$/,
                loader: ['vue-loader', 'eslint-loader']
            }
        ]
    }
};