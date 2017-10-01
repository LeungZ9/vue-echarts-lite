'use strict';
/**
 * Webpack config
 */
const webpack = require('webpack');
const path = require('path');

const IS_DEV = process.env.npm_lifecycle_event === "dev";
const IS_PRO = !!~process.env.npm_lifecycle_event.indexOf('build')
const IS_PRO_MIN = process.env.npm_lifecycle_event === "build:min";

module.exports = {
    context: path.resolve('./src'),
    entry: path.resolve("./src/index"),
    output: {
        path: path.resolve('./dist'),
        filename: 'vue-echarts-lite' + (IS_PRO_MIN ? '.min.js' : '.js'),
        libraryTarget: "umd"
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        },
        echarts: "echarts"
    },
    devServer: {
        disableHostCheck: true,
    },
    devtool: IS_DEV ? 'source-map' : false,
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
    },
    plugins: IS_PRO ? [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ] : [],
    devServer: {
        contentBase: path.resolve("./demo")
    }
};