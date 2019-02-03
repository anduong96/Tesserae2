import chalk from 'chalk'
import { reactRouterServerErrors } from 'react-engine'

// React Error Handler for redirects, not found, etc
export default () => (err, req, res, next) => {
    console.error(chalk.red('React error'), err)

    // http://expressjs.com/en/guide/error-handling.html
    if (res.headersSent) {
        return next(err)
    }

    /* eslint-disable no-underscore-dangle */
    const isRedirect = err._type && err._type === reactRouterServerErrors.MATCH_REDIRECT
    const isNoRouteDef = err._type && err._type === reactRouterServerErrors.MATCH_NOT_FOUND

    if (isRedirect) {
        return res.redirect(302, err.redirectLocation)
    } else if (isNoRouteDef) {
        return res.status(404).send('Route Not Found!')
    }
    /* eslint-enable no-underscore-dangle */

    // for ReactEngine.reactRouterServerErrors.MATCH_INTERNAL_ERROR or
    // any other error we just send the error message back
    return res.status(500).send(err.message)
}
