import * as Services from '../controllers/ServiceHandler'

/**
 * Client side routing
 * @param {*} app express
 */
export default function router(app) {
    app.get('*', (req, res) => Services.showIndexPage(req, res))
}
