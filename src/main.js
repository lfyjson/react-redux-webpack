import './assets/scripts/flexible'
import 'antd-mobile/node_modules/normalize.css'
import './assets/styles/main.scss'
import "lie/polyfill"
import "./assets/scripts/cnzz"

import fastclick from 'fastclick'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './redux'

fastclick.attach(document.body);

ReactDOM.render(
	<App></App>,
	document.getElementById('root')
)