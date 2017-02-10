const config = require('./webpack.config.base.js');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');
const theme = require('./antd-mobile-theme.js');

config.devtool = 'eval-source-map';
config.output.publicPath = 'http://localhost:8080/';

config.module.loaders = (config.module.loaders || []).concat([
    {
        test: /\.css$/,
        loader: 'style!css?sourceMap'
    },
    {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!postcss!sass?sourceMap'
    },
    {
        test: /\.less$/,
        loader: 'style!css?sourceMap!postcss!less?{"sourceMap":true,"modifyVars":' + JSON.stringify(theme) + '}'
    }
]);

config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('dev')
        }
    }),
    new OpenBrowserPlugin({
        url: 'http://fy.yinyuetai.com:8080' + '?jump'
    })
]);

module.exports = config;
