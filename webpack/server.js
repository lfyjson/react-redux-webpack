const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.dev');

new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    hot: true,
    inline: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    historyApiFallback: true,
    stats: {colors: true},
    colors: true,
    progress: true,
    profile: true
}).listen(8080, '127.0.0.1', function(error) {
    if (error) {
        console.log(error);
    }
    console.log('Listening at http://127.0.0.1:8080');
});
