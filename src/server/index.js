import express from "express"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { ServerLocation, isRedirect } from "@reach/router"
import App from "../shared/App"
import fs from "fs"
import path from "path"
import dotenv from "dotenv"

dotenv.config()

const server = express()

server.use(express.static("dist/client"))

console.log

server.get("/", (req, res)=>{
    let content
    try {
      content = renderToStaticMarkup(
        <ServerLocation url={req.url}>
          <App/>
        </ServerLocation>
      )
    } catch (e) {
      if (isRedirect(e))res.redirect(e.uri)
    }

    res.send("ok")

    // fs.readFileSync(path.join(__dirname, '..', 'client', 'index.html'), (err, html)=>{
    //     if(err) return console.error(error)
        
    //     // console.log(html)
        
    //     res.send(
    //         // `<div id="root"></div>`,
    //         // `<div id="root">${content}</div>`
    //     )
    // })
})

const port = process.env.PORT || 3000

server.listen(port, ()=>{
    console.log(`👍  Server running on http://localhost:${port}`)
})