import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import { ServerLocation } from "@reach/router"
import hmr from "./hmr"
import App from "../shared/App"

const server = express()

// Hot module replacement
if(process.env.NODE_ENV !== "production"){
  hmr(server)
}

server.use(express.static('./dist/public'))

server.get("/api", (req, res)=>{
  res.json({
    message: "a message from the server"
  })
})

server.get("*", (req, res)=>{
  const content = renderToString(
    <ServerLocation url={req.url}>
      <App/>
    </ServerLocation>
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