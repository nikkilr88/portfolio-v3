const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('styles', () => {
  gulp
    .src('src/style.css')
    .pipe(
      autoprefixer({
        browsers: ['last 4 versions']
      })
    )
    .pipe(gulp.dest('css'))
})

gulp.task('watchstyles', () => {
  gulp.watch('src/style.css', ['styles'])
})
