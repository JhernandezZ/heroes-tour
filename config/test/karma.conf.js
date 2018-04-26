var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    config.set({
        basePath: '',
        files: [
            {
                pattern: 'test_index.js',
                watched: false
            }
        ],
        preprocessors: {
            'test_index.js': ['webpack', 'sourcemap']
        },
        frameworks: ['jasmine'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-webpack'),
            require('karma-sourcemap-loader')
        ],
        client: {
            clearContext: false,
            args: ['--coverage', config.coverage]
        },
        webpack: webpackConfig,
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true,
            remapOptions: {
                exclude: /\*.spec.ts/
            },
            dir: 'build/coverage'
        },
        reporters: config.coverage ? ['progress', 'coverage-istanbul'] : ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: config.coverage
    });
};