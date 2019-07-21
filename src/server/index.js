import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import { ServerLocation } from "@reach/router"
import App from "../shared/App"

const server = express()

// -------

const webpack = require("webpack")
const webpackConfig = require("../../webpack/client.config.js")
const compiler = webpack(webpackConfig)

server.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, 
    publicPath: webpackConfig.output.publicPath
}));
server.use(require("webpack-hot-middleware")(compiler));



// Serve any static files from the public folder
server.use('/', express.static('/dist/public'))



// -------

server.get("/api", (req, res)=>{
  res.json({
    message: "fuckity"
  })
})

server.get("*", (req, res)=>{
  const content = renderToString(
    <ServerLocation url={req.url}>
      <App/>
    </ServerLocation>
  )
  res.send(
    `
      <html>
        <head>
            <title>My React App</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="/bundle.js" defer></script>
        </body>
      </html>
    `
  )
})

const port = process.env.PORT || 3000

server.listen(port, ()=>{
    console.log(`👍  Server running on http://localhost:${port}`)
})