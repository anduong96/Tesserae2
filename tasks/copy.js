const gulp = require('gulp')

gulp.task('copy', () => gulp.src('./client/assets/*')
    .pipe(gulp.dest('./dist'))
)
