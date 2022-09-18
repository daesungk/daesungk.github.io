import React from "react"

export default function Section(props) { 
    return (
        <div style={{"float" : "left", "width" : "100%"}}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}
