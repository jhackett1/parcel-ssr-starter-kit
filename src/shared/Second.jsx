import React, {useState, useEffect} from "react"
import fetch from "isomorphic-unfetch"

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

export default Second