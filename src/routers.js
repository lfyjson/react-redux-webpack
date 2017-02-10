import React from 'react'
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

import { enterHome, leaveHome } from './actions/home.js'
import { bindActionCreators } from 'redux'

import App from './containers/app.js'
import Home from './containers/Home.js'


export default dispatch => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={Home}
            onEnter={ bindActionCreators(enterHome, dispatch) }
            onLeave={ bindActionCreators(leaveHome, dispatch) }   />            
            <Redirect from="**" to="/"></Redirect>
        </Route>
    </Router>
)