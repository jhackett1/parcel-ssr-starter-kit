import React from "react"
import { Switch, Link } from "react-router-dom"
import AccessibleRoute from "./AccessibleRoute"

import Home from "./Home"
import Second from "./Second"

const App = () =>
    <>
        <h1>My broken app</h1>
        <Link to="/">Home</Link>
        <Link to="/second">Second</Link>
        <Switch>
            <AccessibleRoute component={Second} path="/second"/>
            <AccessibleRoute component={Home} path="/"/>
        </Switch>
    </>

export default App