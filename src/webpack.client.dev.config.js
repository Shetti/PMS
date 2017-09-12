var path = require('path');
var webpack = require('webpack');
process.traceDeprecation = true;
module.exports = {
    devtool: 'source-map',

    node: {
        fs: "empty"
    },

    entry: {
        app: './PMS.Web/client.js',
        vendor: ['babel-polyfill', 'react', 'react-dom', 'react-router', 'axios']
    },

//typically this is bundle.js;  that was throwin an error saying multiple emits to same file.  This resolved client scripts.
//this was later fixed by adding plugins:CommonsChunkPlugin to the webpack config.
    output: {
        path: '/PMS.Deployment/PMSWeb/Scripts',
        filename: 'bundle.js',
        publicPath: '/Scripts/',
    },

    resolveLoader: {
        modules: [path.join(__dirname, 'node_modules')],
        moduleExtensions: ["-loader"],
    },

    resolve: {
        modules: [
            path.resolve(__dirname, './PMS.Content'),
            path.resolve(__dirname, './PMS.Utility'),
            path.resolve(__dirname, './PMS.Web'),
            "node_modules"
            ],
        moduleExtensions: ["-loader"],
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        }],
                exclude: [/node_modules/],
                include: [
                    path.resolve(__dirname, './PMS.Content'),
                    path.resolve(__dirname, './PMS.Utility'),
                    path.resolve(__dirname, './PMS.Web'),
                ],
            },
        ]
    },

    target: 'web',

    plugins: [
         new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            minChunks: Infinity,
        }),
        new webpack.IgnorePlugin(/vertx/),
        new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('development')
        }
        }),
    ]
}
