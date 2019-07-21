import React, {useState, useEffect} from "react"
import { Router, Link } from "@reach/router"
import fetch from "isomorphic-unfetch"

const Home = () =>
    <h2>Home page</h2>

const Second = () => {
    const [data, setData] = useState(false)
    useEffect(()=>{
        fetch("/api")
            .then(res=>res.json())
            .then(data=>setData(data.message))
    })
    return(
        <>
            <h2>Second page</h2>
            {data && <p>{data}</p>}
        </>
    )
}


const App = () =>
    <>
        <h1>My brok app</h1>
        <Link to="/">Home</Link>
        <Link to="/second">Second</Link>
        <Router>
            <Home path="/"/>
            <Second path="/second"/>
        </Router>
    </>

export default App