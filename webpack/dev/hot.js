const devConfig = require('./index')

module.exports = {
    header: { 'Access-Control-Allow-Origin' : '*'},
    noInfo: true,
    hot: true,
    open: 'Chrome',
    publicPath: devConfig.output.publicPath,
    watchOption: {
        poll: 1000
    },
    stats: {
        all: false,
        modules: true,
        maxModules: 0,
        errors: true,
        warnings: true,
        moduleTrace: true,
        errorDetails: true
    }
}
