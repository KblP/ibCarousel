  'use strict';

// Include gulp
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var less = require('gulp-less');
var browserSync = require('browser-sync');

//scripts
gulp.task('build', function () {
  return gulp.src(['./src/*.js'])
    .pipe(gulp.dest('./dest'))
    .pipe(rename({
      suffix: '.min',
      extname: '.js'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dest'));
});

gulp.task('styles', function() {
  return gulp.src('src/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dest'))
});

gulp.task('lint', function () {
  return gulp.src(['./src/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

//watch Files For Changes
gulp.task('watch', ['build', 'styles'], function () {
  browserSync({
    server: {
      baseDir: "./",
      index: 'demo.html'
    }
  });

  gulp.watch('src/ibcarousel.js', ['build', browserSync.reload])
  gulp.watch('src/*.less', ['styles', browserSync.reload])
  gulp.watch('./demo.html', [browserSync.reload])
});


//tasks aliases
gulp.task('default', ['build', 'styles']);
