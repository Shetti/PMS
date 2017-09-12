var gulp = require('gulp');
var runSeq = require('run-sequence');
var requireDir = require('require-dir');
var watch = require('gulp-watch');

requireDir('./PMS.GulpTasks');


gulp.task('default', function(cb){
    runSeq('copyPackageJSON','sassPreProcessor','clientBundle','serverBundle','startServer', cb);
});

gulp.task('build', function(cb){
    runSeq('copyPackageJSON','sassPreProcessor','clientBundle','serverBundle', cb);
});