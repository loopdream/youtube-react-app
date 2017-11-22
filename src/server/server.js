// libraries
import 'babel-polyfill'; 
import Express from 'express'
import Path from 'path'
import Axios from 'axios' 
import React from 'react'
import { StaticRouter as Router, matchPath } from 'react-router'
import { renderToString } from 'react-dom/server'
import Serialize from 'serialize-javascript'
import Compression from 'compression'
import Minify from 'harp-minify' 
import { ServerStyleSheet } from 'styled-components'
// custom
import render from './utils/render'
import { formatData } from './utils/data'
import config, { api, routes, server } from '../config'

// React components 
import App from '../client/components/App'
import NoMatch from '../client/components/NoMatch'
import Error from '../client/components/Error'

// setup
const app = Express()
app.disable('x-powered-by')
app.use(Compression());
app.use(Express.static('dist')) 

/* 
Sever side rendering: use a catch all controller 
Every request will get piped through this method where we:
1. Fetch data from api 
2. massage data into something manageble and less verbose
3. set the the static router markup 
4. Pipe markup and video json to template and render
*/
app.use('*', async (req, res) => {

  // Match the request path pattern to our config routes 
  const match = routes.reduce((acc, route) => matchPath(req.baseUrl, route, { exact: true }) || acc, null)
  
  // if there is no match render our error page 
  if (!match.isExact) {
    const errPageStr = renderToString(<NoMatch />)
    return res.status(404).send(render(errPageStr))  
  }

  try { // async try / catch
    
    // fetch data from api
    const response = await Axios.get(api.url) 

    // format the and sanitize the response data for our front end
    const videoData = formatData(response.data)

    // context obj for react router
    const context = {}

    // server side style components instance
    const sheet = new ServerStyleSheet()

    // Render the Router / App string based on the above variables
    // sheet.collectStyles will collect the styles for the requested components
    const htmlStr = renderToString(sheet.collectStyles((
      <Router context={context} location={req.baseUrl}>
        <App videoData={videoData} />
      </Router>
    )))

    // Minify the Styled components css
    const styleTags = Minify.css(sheet.getStyleTags())
    
    // Put everything together as markup we can send to the browser
    const markup = render(htmlStr, videoData, styleTags)

    res.status(200).send(markup);

  } catch (err) {
    console.error(err) // OMG
    res.status(500).send(renderToString(<Error />)) 
  }

})


// Set port and start server
const PORT = process.env.PORT || server.port
app.listen(PORT, (err) => err ? console.log(err) : console.log(`server started port: ${PORT}`))
