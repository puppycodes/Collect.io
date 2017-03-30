const gulp = require('gulp')
const $ = require('gulp-load-plugins')()

gulp.task('svg', function () {
  return gulp.src('static/icons/*.svg')
    .pipe($.plumber())
    .pipe($.svgmin())
    .pipe($.svgSprite({
      mode: {
        symbol: {
          spacing: {
            padding: 5
          },
          layout: 'diagonal',
          dest: './',
          sprite: 'icons.svg',
          bust: false
        }
      }
    }))
    .pipe(gulp.dest('./static/'))
    .pipe($.size())
})
