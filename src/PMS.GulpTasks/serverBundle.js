var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpack2 = require('webpack');
var config = require('./pathConfig.js');

gulp.task('serverBundle',function(){
	return gulp.src('./PMS.Server/server.js')
    .pipe(webpack(require('../webpack.server.config.js'),webpack2))
    .on('error', function(err) {
        console.error(err); this.emit('end'); 
    })
    .pipe(gulp.dest(config.paths.dist))
});