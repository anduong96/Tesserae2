import kraken from 'kraken-js'
import express from 'express'
import highlight from './lib/Highlight'
import reactErrorHandler from './lib/middleware/ReactError'
import devMiddleware from './lib/middleware/Dev'
import handleGzip from './lib/middleware/Gzip'
import startup from './lib/middleware/StartUp'

const app = express()
const port = process.env.PORT || 8000
const onConfig = (config, next) => startup(app, config).then(() => next(null, config))

devMiddleware(app)
handleGzip(app)

app.use(kraken({ onConfig }))
app.use(reactErrorHandler)

const servingInfo = `
=======================================================
ENV: ${highlight.boldUnderline(process.env.NODE_ENV.toUpperCase())}
APP: ${highlight.boldUnderline(`http://localhost:${port}/Tesserae2`)}
=======================================================
`

app.listen(port, () => console.log(servingInfo))
