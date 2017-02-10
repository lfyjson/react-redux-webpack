const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');

const alias = require('./alias');

const config = {
    entry: {
        main: './src/main.js',
        vendors: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:16].js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        //只要配置dev server map这个参数就可以了
        proxy: {
            '/api/*': {
                target: 'localhost:80',
                secure: false
            }
        }
    },
    module: {
        preLoaders: [
            // eslint代码检测
            // {
            //   test: /\.js$/,
            //   exclude: /node_modules/,
            //   include: [
            //       path.join(__dirname, '../src/')
            //   ],
            //   loader: 'eslint-loader'
            // },
        ],
        loaders: [
            {
                test: /\.(?:js|jsx)$/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
                include: [
                    path.join(__dirname, '../src'),
                    path.join(__dirname, '../node_modules/antd-mobile/')
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    limit: 8192,
                    name: './images/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    postcss: [
        autoprefixer(),
        pxtorem({
            rootValue: 75,
            propWhiteList: []
        })
    ],
    eslint: {
      configFile: './.eslintrc'
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: [
            ["import", {
                style: true,
                libraryName: 'antd-mobile'
            }]
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'My first react app',
            template: './index.html',
            filename: 'index.html',
            chunks: ['main', 'vendors'],
            hash: false,
            inject: true
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'js/[name].[hash:8].js'),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(), //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.NoErrorsPlugin() //报错但不退出webpack进程
    ],
    resolve: {
        // modulesDirectories: ['node_modules', path.join(__dirname, '../../node_modules')],
        // extensions: ['', '.web.js', '.js', '.json'],
        alias: alias
    }
};

module.exports = config;
