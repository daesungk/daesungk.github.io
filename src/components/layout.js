import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"

const ListLink = props => ( 
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link> 
    </li>
)

export default function Layout({ children }) {
    const data = useStaticQuery( 
        graphql` 
            query { 
                site { 
                    siteMetadata { 
                        title 
                    } 
                } 
            } 
        `
    )
    return (
        <div 
            css={css` 
                margin: 0 auto; 
                max-width: 700px; 
                padding: 50px; 
                padding-top: 50px; 
                `} 
        >
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}> 
                    <h3
                        css={css` 
                            margin-bottom: 50px; 
                            display: inline; 
                            font-style: normal; 
                        `}
                    >
                        {data.site.siteMetadata.title}
                    </h3> 
                </Link> 
                <ul style={{ listStyle: `none`, float: `right` }}> 
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/research/">Research</ListLink>
                    <ListLink to="/teaching/">Teaching</ListLink> 
                    <ListLink to="/curriculumvitae/">CV</ListLink> 
                </ul>
            {children} 
        <div id="footer" style={{"padding-top": "40px"}}>
            &copy;  2022 Daesung Kim
        </div>
        </div>
    )
}

