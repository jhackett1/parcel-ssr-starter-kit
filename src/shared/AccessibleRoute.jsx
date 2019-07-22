import React, {useEffect, useRef} from "react"
import { Route } from "react-router-dom"
import styled from "styled-components"

const Div = styled.div`
    outline: 0 !important;
    &:focus{
        outline: 0 !important;
    }
`

const FocusOnMount = ({children}) => {
    const ref = useRef(null)
    useEffect(()=>{ref.current.focus()})
    return(
        <Div ref={ref} tabIndex="-1">
            {children}
        </Div>
    )
}

const AccessibleRoute = (props) =>
    <Route path={props.path} render={() => (
        <FocusOnMount>
            <Route {...props}/>
        </FocusOnMount>
    )}/>


export default AccessibleRoute