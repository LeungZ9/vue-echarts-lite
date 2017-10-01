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
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        },
        echarts: 'echarts'
    },
    devServer: {
        disableHostCheck: true,
    },
    devtool: false,
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],
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