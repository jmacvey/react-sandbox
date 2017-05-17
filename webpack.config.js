const webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

    devtool: 'cheap-module-eval-source-map',
    /**
     * Entry point for the app
     */
    entry: {
        // note the app entry has multiple entry points
        app: [
            'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
            'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
            'babel-polyfill',
            'react-hot-loader/patch',
            `${__dirname}/app/app.js`
        ]
    },


    /**
     * Output path
     */
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/static/',
        filename: 'app.js'
    },

    module: {
        /**
         * Specific loaders to use
         */
        loaders: [{

            /**
             * Specifies any tests to run
             */
            test: /\.js?$/,

            /**
             * Exclude node_modules from transpilation processes
             */
            exclude: /node_modules/,

            /**
             * Use babel to transpile ES2015, React code (see .babelrc config file)
             */
            loaders: 'babel-loader',

            /**
             * Any import statements that 
             * aren't relative will be 
             * relative to the app folder
               */
            include: path.join(__dirname, 'app')
        },
        {
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader']
  }]
    },

    context: __dirname,

    resolve: {
        // options for resolving module requests
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ]
    },
    plugins: [
        // hot module plugin
        new webpack.HotModuleReplacementPlugin()
    ]
}