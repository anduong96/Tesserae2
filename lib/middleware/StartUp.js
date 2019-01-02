
export default (app, config) => new Promise(resolve => {
    global.APP_CONFIG = config.get('application')
    resolve()
});

