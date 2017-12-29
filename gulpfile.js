const gulp = require('gulp'),
      sass = require('gulp-sass'),
      pug = require('gulp-pug'),
      js = require('gulp-babel'),
      browserSync = require('browser-sync').create(),
      rename = require('gulp-rename');

gulp.task('compile-sass',  function(){
  gulp.src('./SASS/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./CSS'))
})

gulp.task('compile-pug', function buildHTML() {
  return gulp.src('./PUG/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./HTML'));
});

// gulp.task('reload', function() {
//   browserSync.init({ server: { baseDir: "./", directory: true, index: "./HTML/index.html" } })
// })


gulp.task('compile-js', function() {
  gulp.src('./ECS6/*-demo.js')
  .pipe(js( { "compact": true } ))
  .pipe(rename( function(path){ path.basename = path.basename.replace('-demo', '') }))
  .pipe(gulp.dest('./JS/'));
})

gulp.task('watch', function() {
  browserSync.init({ server: "./", index: "./HTML/index.html", directory: true});

  gulp.watch('./SASS/*.sass', ['compile-sass']);
  gulp.watch('./PUG/*.pug', ['compile-pug']);
  gulp.watch('./ECS6/*-demo.js', ['compile-js']);
  gulp.watch(['./HTML/*.html', './CSS/*.css']).on('change', browserSync.reload)
})
