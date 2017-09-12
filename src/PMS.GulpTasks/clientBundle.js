var gulp = require('gulp');
var gutil = require('gulp-util');
var webpackStream = require('webpack-stream');
var webpack2 = require('webpack');
var config = require('./pathConfig.js');
const WEBPACK_DEV_CONFIG = '../webpack.client.config.js';

gulp.task('clientBundle', function(done){
    
    var WEBPACK_CONFIG = require('../webpack.client.config.js');


    if (gutil.env.NODE_ENV == 'development') {
        WEBPACK_CONFIG = require('../webpack.client.dev.config.js');
        console.log("webpack.client.dev.config.js");
    }
    else{
        console.log("webpack.client.config.js");
    }

    return gulp.src('../PMS.Web/client.js')
    .pipe(webpackStream(WEBPACK_CONFIG,webpack2))
    .pipe(gulp.dest(config.paths.dist + '/PMSWeb/Scripts'))     //todo: have the scripts location be read from a config file.
});
