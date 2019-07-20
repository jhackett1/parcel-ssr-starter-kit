import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import App from "../shared/App"
import fs from "fs"
import path from "path"
import dotenv from "dotenv"

dotenv.config()

const server = express()

server.use(express.static("dist/client"))

server.get("/api", (req, res)=>{
    res.json({
        status: "no"
    })
})

server.get("*", (req, res)=>{
    const context = {}
    const content = renderToString(<App/>)
    fs.readFileSync(path.join(__dirname, '..', 'client', 'index.html'), (err, html)=>{
        if(err) return console.error(error)
        res.send(html.replace(
            `<div id="root"></div>`,
            `<div id="root">${content}</div>`
        ))
    })
})

const port = process.env.PORT || 1234

server.listen(port, ()=>{
    console.log(`👍  Server running on http://localhost:${port}`)
})