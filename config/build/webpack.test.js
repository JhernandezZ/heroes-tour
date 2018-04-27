var webpack = require('webpack');
var helpers = require('../helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['istanbul-instrumenter-loader', 'awesome-typescript-loader?configFileName=config/tsconfig.json', 'angular2-template-loader'],
                exclude: /\.spec\.ts$/
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['to-string-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|otf|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /\@angular(\\|\/)core(\\|\/)esm5/,
            helpers.root('src'),
            {
                '@ngrx/store': '../node_modules/@ngrx/store'
            }
        )
    ]
};
