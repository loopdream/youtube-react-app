import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import ScrollToTop from './components/ScrollToTop'

ReactDOM.hydrate(
  <Router>
    <ScrollToTop>
      <App videoData={window.__videoData__} />
    </ScrollToTop>
  </Router>,
  document.getElementById('app')
)
