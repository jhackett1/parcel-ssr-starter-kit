import React from "react"
import { Router, Link } from "@reach/router"

import Home from "./Home"
import Second from "./Second"

const App = () =>
    <>
        <h1>My broken app</h1>
        <Link to="/">Home</Link>
        <Link to="/second">Second</Link>
        <Router>
            <Home path="/"/>
            <Second path="/second"/>
        </Router>
    </>

export default App