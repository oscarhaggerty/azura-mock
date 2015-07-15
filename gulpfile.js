/**
 * Gulpfile
 *
 * Automated configuration of assets.
 */

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const clean = require('gulp-clean');

gulp.task('babel', function taskBabel() {
  return gulp.src(['**/*.es6'], {
      base: '.'
    })
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function taskWatch() {
  return gulp.src(['**/*.es6'], {
      base: '.'
    })
    .pipe(watch('**/*.es6'))
    .pipe(changed('dist'))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function taskClean() {
  return gulp.src([
      'dist/**/*',
      '**/*.cache',
      '**/*.temp',
      '**/*.log'
    ], {read: false})
    .pipe(clean({
      force: true
    }));
});
