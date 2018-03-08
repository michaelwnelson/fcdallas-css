var gulp = require('gulp'),
  concat = require('gulp-concat'),
  minify = require('gulp-clean-css'),
  gutil = require('gulp-util');

// helps keep the file order
files = ['./css/naut.css', './css/fcdallas.css'];

gulp.task('minify', function() {
  gulp
    .src(files)
    .pipe(concat('minified.css'))
    .pipe(minify())
    .pipe(gulp.dest('./'));

  return gutil.log('minified.css generated!');
});

gulp.task('default', ['minify']);
