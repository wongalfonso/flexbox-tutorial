const gulp = require('gulp');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');
const cleanCSS = require('gulp-clean-css');

const buildCSS = () => {
  return gulp.src('./src/css/*.css')
  .pipe(cleanCSS())
  .pipe(concat('style.css'))
  .pipe(gulp.dest('dist'))
}

const serve = () => {
  return nodemon({
    script: 'index.js',
    env: {
      NODE_ENV: 'development'
    }
  })
};
gulp.watch('./src/css/*.css', buildCSS);

exports.build = gulp.series(buildCSS, serve);