var gulp = require('gulp');
var config = require('./pathConfig.js');

gulp.task('copyPackageJSON',function(){
	return gulp.src('./package.json')
	.pipe(gulp.dest(config.paths.dist));
});