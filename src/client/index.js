import React from "react"
import { hot } from 'react-hot-loader/root'
import { render, hydrate } from "react-dom"
import App from "../shared/App"

// Wrap app fopr hot module replacement
const HotApp = hot(App)

hydrate(<HotApp/>, document.getElementById("root"))