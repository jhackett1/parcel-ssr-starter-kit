import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import { ServerLocation } from "@reach/router"
import App from "../shared/App"

const server = express()

server.use(express.static("dist/public"))

server.get("*", (req, res)=>{
  res.send(
    `
      <html>
        <head>
            <title>My React App</title>
        </head>
        <body>
            <div id="root">${renderToString(<ServerLocation url={req.url}><App/></ServerLocation>)}</div>
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