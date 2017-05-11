const webpack = require('webpack');
const path = require('path');

module.exports = {
    /**
     * Entry point for the app
     */
    entry: {
        // note the app entry has multiple entry points
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            `${__dirname}/app/app.js`
        ]
    },


    /**
     * Output path
     */
    output: {
        path: `${__dirname}/dist`,
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
            loader: 'babel-loader',
        }],
    },

    context: __dirname,

    resolve: {
        // options for resolving module requests
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ]
    }
}