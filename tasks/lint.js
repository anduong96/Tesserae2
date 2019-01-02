/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp')
const eslint = require('gulp-eslint')
const gulpIf = require('gulp-if')
const scsslint = require('gulp-sass-lint')
const jsConfigFile = '.eslintrc.js'
const scssConfigFile = '.sass-lint.yml'
const JS_SOURCES = [
    'server.js',
    'controllers/*.js',
    'components/*.js',
    'public/**/*.js',
    'routes/**/*.js',
    'lib/**/*.js',
    '!node_modules/**',
    '!dist/**',
    '!.fixtures/**',
    '!.reports/**'
]

const SCSS_SOURCES = [
    'public/**/*.scss',
    '!node_modules/**',
    '!dist/**'
]


const isFixed = (file) => file.eslint != null && file.eslint.fixed

gulp.task('lint:js', () => gulp.src(JS_SOURCES)
    .pipe(eslint({ configFile: jsConfigFile }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
)

gulp.task('lint:js:fix', () => gulp.src(JS_SOURCES)
    .pipe(eslint({ configFile: jsConfigFile, fix: true }))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest('.fixtures')))
    .pipe(eslint.failAfterError())
)

gulp.task('lint:scss', () => gulp.src(SCSS_SOURCES)
    .pipe(scsslint({ configFile: scssConfigFile }))
    .pipe(scsslint.format())
    .pipe(scsslint.failOnError())
)
