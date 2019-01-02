/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

gulp.task('dev:server', () => nodemon({
    script: 'index.js',
    ext: 'js',
    watch: [
        'index.js',
        'server.js',
        'routes/*.js',
        'lib/*.js',
        'controllers/*.js'
    ],
    ignore: [
        ".git",
        "node_modules/**/node_modules"
    ],
    verbose: true,
    legacyWatch: true,
    restartable: 'rs'
}))

// Technically you can just start it with node index.js
// but Altus won't be using this task
// so this task will only be used to start the production build
gulp.task('prod:server', () => nodemon({
    script: 'index.js',
    ext: 'js',
    watch: [],
    ignore: '*'
}))
