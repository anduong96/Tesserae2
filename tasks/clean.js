const gulp = require('gulp')
const del = require('del')
const vinylPaths = require('vinyl-paths')

gulp.task('clean', () => gulp.src('dist/*', { read: false })
    .pipe(vinylPaths(del))
    .pipe(gulp.dest('dist')))
