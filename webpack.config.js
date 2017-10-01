'use strict';
/**
 * Webpack config
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.resolve('./src'),
    entry: path.resolve("./src/demo"),
    output: {
        filename: 'demo.min.js'
    },
    externals: {
        vue: "Vue",
        echarts: "echarts"
    },
    devServer: {
        disableHostCheck: true,
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/
              },
              {
                test: /\.vue$/,
                loader: 'vue-loader'
              },
              {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ["es2015"]
                }
              }
        ]
    }
};