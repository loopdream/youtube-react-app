import Express from 'express'
import React from 'react'
import Path from 'path'
import Axios from 'axios'
import SourceMapSupport from 'source-map-support'
import { StaticRouter as Router, matchPath } from 'react-router'
import { renderToString } from 'react-dom/server'
import Serialize from "serialize-javascript"

import render from './utils/render'
import config from '../config'
import App from '../client/components/App'
import NoMatch from '../client/components/NoMatch'
import Error from '../client/components/Error'
import { formatData } from './utils/data'

SourceMapSupport.install()
const routes = config.routes
const app = Express()

app.disable('x-powered-by') // remove express header
app.use(Express.static('dist')) // set the static asset dir
/* 
Sever side rendering: use a catch all controller 
Every request will get piped through this method where we:
1. Fetch data from api 
2. massage data into something manageble and less verbose
3. set the the static router markup 
4. Pipe markup and video json to template and render
*/
app.use('*', async (req, res) => {

  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null)

  if (!match) {
    res.status(404).send(render(<NoMatch />))
    return
  }

  try {

    let response = await Axios.get(config.apiUrl) 
    let videoData = formatData(response.data)
    let context = {}
  
    res.status(200).send(render(
      (
        <Router context={{}} location={req.url}>
          <App videoData={videoData} />
        </Router>
      ), videoData
    ))

  } catch (err) {
    console.error(err)
    res.status(500).send(render(<Error />))
  }

})

export default app