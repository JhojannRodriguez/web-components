'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch('sass/*.sass', ['sass']);
});

var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('html/index.hml')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      fallback: 'index.html'
    }));
});
