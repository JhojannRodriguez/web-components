const gulp = require('gulp'),
      sass = require('gulp-sass'),
      pug = require('gulp-pug'),
      browserSync = require('browser-sync').create();

gulp.task('compile-sass', function(){
  gulp.src('./SASS/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./CSS'))
})

gulp.task('compile-pug', function buildHTML() {
  return gulp.src('./PUG/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./HTML'));
});

gulp.task('reload', function() {
  browserSync.init({ server: { baseDir: "./", directory: true, index: "./HTML/index.html" } })
})


gulp.task('watch', function() {
  gulp.watch('./SASS/*.sass', ['compile-sass']);
  gulp.watch('./PUG/*.pug', ['compile-pug']);
})
