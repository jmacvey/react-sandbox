const webpack = require('webpack');
const config = require('./webpack.config');
const WebpackDevServer = require('webpack-dev-server');

/**
 * Webpack Dev Server Docs:
 * https://webpack.github.io/docs/webpack-dev-server.html
 */
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});