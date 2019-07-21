import React from "react"
import { Router, Link } from "@reach/router"

const Home = () =>
    <h2>Home page</h2>

const Second = () =>
    <h2>Second pages</h2>

const App = () =>
<>
    <h1>My app</h1>
    <Link to="/">Home</Link>
    <Link to="/second">Second</Link>
    <Router>
        <Home path="/"/>
        <Second path="/second"/>
    </Router>
</>

export default App