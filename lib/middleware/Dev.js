import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack/dev'
import webpackHotServerConfig from '../../webpack/dev/hot'

export default (app) => {
    const env = app.settings.env.toUpperCase()
    if (env === 'PRODUCTION') return

    // START DEV SERVER AND HOT RELOAD
    const compiler = webpack(webpackConfig)
    app.use(webpackDevMiddleware(compiler, webpackHotServerConfig))
    app.use(webpackHotMiddleware(compiler))
}
