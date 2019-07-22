import React, {useEffect, useRef} from "react"
import { Route } from "react-router-dom"

// const FocusOnMount = ({children}) => {
//     const ref = useRef(null)
//     useEffect(()=>{ref.current.focus()},[])
//     return(
//         <div ref={ref} tabIndex="-1" style={{
//             outline: "0 !important"
//         }}>
//             {children}
//         </div>
//     )
// }

class FocusOnMount extends React.Component {
    componentDidUpdate() {
        this.node.focus()
    }
    render() {
        return (
            <div ref={n => this.node = n} tabIndex="-1">
                {this.props.children}
            </div>
        )
    }
}

const AccessibleRoute = (props) =>
    <Route path={props.path} render={() => (
        <FocusOnMount>
            <Route {...props}/>
        </FocusOnMount>
    )}/>


export default AccessibleRoute