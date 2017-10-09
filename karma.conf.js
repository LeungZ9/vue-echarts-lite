// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

const webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai', 'phantomjs-shim'],
    reporters: ['spec'],
    files: ['test/unit/index.js'],
    preprocessors: {
      'test/unit/index.js': ['webpack', 'sourcemap']
    },
    webpack: Object.assign({}, webpackConfig, {
      devtool: '#inline-source-map',
      externals: ''
    }),
    webpackMiddleware: {
      noInfo: true
    }
  })
}
