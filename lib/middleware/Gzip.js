export default (app) => {
    app.get('*.js.gz', (req, res, next) => {
        res.set('Content-Encoding', 'gzip')
        res.set('Content-Type', 'application/javascript')
        next()
    })

    app.get('*.css.gz', (req, res, next) => {
        res.set('Content-Encoding', 'gzip')
        res.set('Content-Type', 'text/css')
        next()
    })
}
