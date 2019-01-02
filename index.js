/**
 * Entry Script
 */
process.env.BABEL_DISABLE_CACHE=1

if (process.env.NODE_ENV === 'production') {
    // In production, serve the webpacked server file.
    require('./dist/server.bundle.js')

} else {
    // Babel polyfill to convert ES6 code in runtime
    require('babel-register')({
        plugins: [
            [
                'babel-plugin-webpack-loaders',
                {
                    config: './webpack/babel.js',
                    verbose: false
                }
            ]
        ]
    })

    require('babel-polyfill')
    require('./server')
}
