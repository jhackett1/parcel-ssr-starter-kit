import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { ServerStyleSheet } from "styled-components"
import document from "./_document"
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

  const sheet = new ServerStyleSheet()

  try {
    const html = renderToString(sheet.collectStyles(
      <StaticRouter location={req.url} context={context}>
        <App/>
      </StaticRouter>
    ))
    const styles = sheet.getStyleTags()
    res.send(document(styles, html))
  } catch(e) {
    console.error(e)
  } finally {
    sheet.seal()
  }
})

const port = process.env.PORT || 3000

server.listen(port, ()=>{
    console.log(`👍  Server running on http://localhost:${port}`)
})