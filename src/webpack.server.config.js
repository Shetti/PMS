var webpack = require('webpack');

process.noDeprecation = true;

module.exports = {

    entry: './PMS.Server/server.js',

    output:{
        path: '/PMS.Deployment',
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
        externals: {
        "express": "express"
    },

target: 'node',  

node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
    },
        
        devtool: 'source-map',

plugins: [
        new webpack.BannerPlugin({
            raw: true,
            banner: 'require("source-map-support").install();',
        }),    
        new webpack.IgnorePlugin(/vertx/)  
    ],  

    resolve: {
        extensions: ['.js'],
        unsafeCache: true,
    },

module: {
        rules: [
            {
                test: /\.js$/,
                   use: [
                    {
                        loader: 'babel-loader',
                        options:{
                            babelrc: false,
                            cacheDirectory: true,
                            compact: false,
                            presets: [ ['es2015', { modules: false }], 'react', 'stage-0', 'stage-3']                            
                    }}],
                exclude: [/node_modules/],           
            },
        ],
    }
}