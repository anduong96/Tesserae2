
import React from 'react'
import { browserHistory, IndexRoute, Router, Route, Redirect } from 'react-router/lib'
import App from './App'
import NotFound from './views/404'
import Home from './views/Home'

module.exports = (
    <Router history={browserHistory} >
        <Route path='/' component={App} >
            {/* IndexRoute here will probably not being used because index route will be redirected below
            but we cant remove it because the Router is buggy */}
            <IndexRoute component={Home} />
            <Redirect from='/' to='/home' />

            <Route path='/*home' component={Home} />

            <Route path='*' component={NotFound} />
        </Route>
    </Router>
)
