import React from "react"
import fetch from "isomorphic-unfetch"

const Second = () => 
    <>
        <h2>Second page content</h2>
        <p>test content in here</p>
        <button>Test button here</button>
        <a href="#">test thing here</a>
        <a href="#">test thing here</a>
    </>

    // fetch("/api")
    //     .then(res=>res.json())
    //     .then(data=>setData(data.message))

export default Second