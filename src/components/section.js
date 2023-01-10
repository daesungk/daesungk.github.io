import React from "react"

export default function Section(props) { 
    return (
        <div style={{"float" : "left", "width" : "100%"}}>
            <h5>{props.title}</h5>
            {props.children}
        </div>
    )
}
