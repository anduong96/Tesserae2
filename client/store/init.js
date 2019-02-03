import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './RootReducer';

export default () => {
    const middleware = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger({
            timestamp: true,
            duration: true,
            diff: true,
            collapsed: true,
        }));
    }

    const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

    // Enable Webpack hot module replacement for reducers
    // Starting from Redux version 2.0.0, the reducers are not hot reloaded
    // implicitly because the implicit hot reloading causes some problems.
    // This will enable the store to remain for hmr
    if (module.hot) {
        /*eslint-disable global-require */
        module.hot.accept('./RootReducer', () => store.replaceReducer(require('./RootReducer').default));
        /*eslint-enable global-require */
    }

    return store;
};
