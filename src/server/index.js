import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import { ServerLocation } from "@reach/router"
import App from "../shared/App"

const server = express()

const webpack = require("webpack")
const config = require("../../webpack/server.config")
const compiler = webpack(config)
const webpackDevMiddleware = require("webpack-dev-middleware")(compiler)

const webpackHotMiddleware = require("webpack-hot-middleware")(compiler)

server.use(webpackDevMiddleware)
server.use(webpackHotMiddleware)

server.use(express.static("dist/public"))

server.get("/api", (req, res)=>{
  res.json({message: "a messsage from the server"})
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