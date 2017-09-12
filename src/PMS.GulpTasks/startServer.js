var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var config = require('./pathConfig.js');

gulp.task('startServer', function () {
  nodemon({
    script: '../PMS.Deployment/server.js',
    watch: config.paths.js
  })
  .on('start', function() {
      if (!called) {
        cb();
      }
      called = true;
  });
});