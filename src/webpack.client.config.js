var path = require('path');
var webpack = require('webpack');

module.exports = {
  
  devtool: 'inline-source-map',

   node: {
       fs: "empty"
   },
   entry: {
           app: './PMS.Web/client.js',
           vendor: ['react', 'babel-polyfill', 'react-dom', 'react-router','axios']
   },

   output: {
          path: '/PMS.Deployment/PMSWeb/Scripts',
          publicPath: '/Scripts/',
          filename: 'bundle.js',
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
                    }
                    ],
                    exclude: [/node_modules/],
                    include: [
                        path.resolve(__dirname, './PMS.Content'),
                        path.resolve(__dirname, './PMS.Utility'),
                        path.resolve(__dirname, './PMS.Web'),
                    ],
                },

            ]
        },


plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
             minChunks: Infinity,
        }),
        new webpack.IgnorePlugin(/vertx/),
        new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ]

}