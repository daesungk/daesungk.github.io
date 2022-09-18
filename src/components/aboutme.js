import React from "react"
import port from "../pic/port.jpg"
import { css } from "@emotion/react"

export default function Aboutme(props) { 
    return (
        <div>
            <h2>{props.title}</h2>
            <div  
            css={css`
                display: inline-block;
                vertical-align: top;
                width: 70%;
                @media only screen and (max-width: 600px) {
                    display: block;
                    vertical-align: top;
                    width: 100%;
                }
                `}
            >
                {props.children}
            </div>
            <div 
            css={css`
                display: inline-block;
                vertical-align: top;
                width: 30%;
                @media only screen and (max-width: 600px) {
                    display: block;
                    vertical-align: top;
                    width: 50%;
                }
                `}
            >
                <img src={port} alt="Portrait" width="100%">
                </img>
            </div>
        </div>
    )
}
