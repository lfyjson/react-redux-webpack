import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'

import routers from './routers'

const middleware = [ thunk ];

if(process.env.NODE_ENV === 'dev') {
	middleware.push(createLogger());
}

const store = createStore(
	reducer,
	applyMiddleware(...middleware) 
);

export default () => (
	<Provider store={store}>
		{ routers(store.dispatch) }
	</Provider>
)
