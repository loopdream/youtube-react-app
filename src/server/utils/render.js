import React from 'react'
import { renderToString } from 'react-dom/server'
import Serialize from "serialize-javascript"

export default (markup, videoData) => `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Youtube App</title><link rel="shortcut icon" href="https://d3fj8d3h19iopa.cloudfront.net/wp-content/themes/beyond/assets/1503571639/images/favicon/favicon.ico"></head><body><div id="app">${renderToString(markup)}</div>${videoData ? `<script>window.__videoData__ = ${Serialize(videoData)}</script><script src="/bundle.js"></script>` : ''}</body></html>`
 