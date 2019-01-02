/* eslint-disable no-path-concat, eslint-disable-line, import/no-dynamic-require, global-require */
const gulp = require('gulp')
const fs = require('fs')
const isProd = process.env.NODE_ENV === 'production'

//import gulp tasks
fs.readdirSync(__dirname + '/tasks').forEach((task) => require(`./tasks/${task}`))

gulp.task('lint', ['lint:js'])

gulp.task('build:dev', ['webpack:dev'])

gulp.task('build:prod', ['webpack:prod', 'webpack:prod:server'])

gulp.task('build', isProd ? ['build:prod'] : ['build:dev'])

gulp.task('dev', ['clean', 'build:dev'], () => gulp.start(['dev:server']))

gulp.task('prod', ['clean', 'build:prod'], () => gulp.start(['prod:server']))
