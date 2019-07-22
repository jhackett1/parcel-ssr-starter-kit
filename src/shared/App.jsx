import React from "react"
import { Route, Link } from "react-router-dom"

import Home from "./Home"
import Second from "./Second"

const App = () =>
    <>
        <h1>My broken app</h1>
        <Link to="/">Home</Link>
        <Link to="/second">Second</Link>

        <Route component={Home} path="/"/>
        <Route component={Second} path="/second"/>
        
    </>

export default App