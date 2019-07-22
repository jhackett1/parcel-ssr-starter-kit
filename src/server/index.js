import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import hmr from "./hmr"
import App from "../shared/App"

const server = express()

// Insert hot module replacement middleware in dev only
if(process.env.NODE_ENV !== "production") hmr(server)

server.use(express.static('./dist/public'))

server.get("/api", (req, res)=>{
  res.json({
    message: "a message from the server"
  })
})

server.get("*", (req, res)=>{
  const context = {}
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  )
  res.send(
    `<!doctype html>
    <html lang="en">
      <head>
          <title>My React App</title>
      </head>
      <body>
          <div id="root">${content}</div>
          <script src="/bundle.js" defer></script>
      </body>
    </html>`
  )
})

const port = process.env.PORT || 3000

server.listen(port, ()=>{
    console.log(`👍  Server running on http://localhost:${port}`)
})