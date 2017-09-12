var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat'); 
var config = require('./pathConfig.js');
var replace = require('gulp-replace');
var gutil = require('gulp-util');

gulp.task('sassPreProcessor',function () {

	var sassPath 		= config.paths.sassEntry;
    var destinationPath = '../PMS.Deployment/PMSWeb/CSS/';	//ToDo: Add to Config file.

	console.log("CSS Entry point : ", sassPath);
    console.log("CSS Destination path : ", destinationPath);
    
	return gulp.src(sassPath)
		.pipe(sass())
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(destinationPath))
});
