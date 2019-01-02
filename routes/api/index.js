
/**
 * API routing
 * @param {*} app express
 */
export default function router(app) {
    app.get('/test', (req, res) => res.json({ test: 'ok'}))
}
