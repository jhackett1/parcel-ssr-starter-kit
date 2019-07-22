import React from "react"
import { hot } from 'react-hot-loader/root'
import { render, hydrate } from "react-dom"
import App from "../shared/App"
import { BrowserRouter} from "react-router-dom"

// Wrap in client router
const WrappedApp = () => <BrowserRouter><App/></BrowserRouter>

// Wrap app for hot module replacement
const HotApp = hot(WrappedApp)

hydrate(<HotApp/>, document.getElementById("root"))