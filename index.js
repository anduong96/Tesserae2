process.env.BABEL_DISABLE_CACHE=1
require('ignore-styles')
require('babel-register')({
    cache: false,
    presets: [
        'env',
        'react',
        'es2017',
        'stage-0'
    ]
})

require('babel-polyfill')
require('./server')
