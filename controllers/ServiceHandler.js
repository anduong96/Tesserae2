
/**
 * Show index page for application
 * @param {*} req
 * @param {*} res
 */
export const showIndexPage = (req, res) => {
    res.render(req.url, { ...global.CONFIG })
}
