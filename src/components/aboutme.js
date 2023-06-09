import React from "react"
import port from "../pic/port.jpg"

export default function Aboutme(props) { 
    return (
        <div>
            <h5>{props.title}</h5>
        <div style={{"float" : "left", "width" : "70%"}}>
                {props.children}
            </div>
        <div style={{"float" : "right", "width" : "30%", "margin-top": "25px"}}>
                <img src={port} alt="Portrait" width="100%">
                </img>
            </div>
        </div>
    )
}
