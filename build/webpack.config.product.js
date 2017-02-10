const config = require('./webpack.config.base.js');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const theme = require('./antd-mobile-theme.js');

config.module.loaders = (config.module.loaders || []).concat([
    // 编译css并自动添加css前缀
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
    },
    //.scss 文件想要编译，scss就需要这些东西！来编译处理
    {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style','css?sourceMap!postcss!sass')
    },
    {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!less?{"modifyVars":' + JSON.stringify(theme) + '}')
    }
]);

config.plugins = (config.plugins || []).concat([
    new ExtractTextPlugin('[name].[contenthash:9].css', {
        allChunks: true
    }),
    //清理
    new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname, '../'), //绝对路径
        verbose: true, //写日志到console
        dry: false //不删除任何东西，好进行测试
    }),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
]);

module.exports = config;
