//this file should be in charge of bootstrapping everything that lives elsewhere
import React from 'react'
import ReactDOM from 'react-dom'
import RootApp from './components/RootApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'


ReactDOM.render(<RootApp />, document.getElementById('app'))