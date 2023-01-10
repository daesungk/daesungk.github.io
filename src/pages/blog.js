import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default function Seminar({ data }) {
    return (
        <Layout>
        <h2>
            Blog
        </h2>
        <table>
            <tbody>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                <tr>
                    <td> 
                        <big><b>
                        <Link to={node.fields.slug} >
                            {node.frontmatter.title} 
                        </Link>
                        </b></big>
                        <br/> <small>
                            {node.excerpt}
                        </small>
                    </td>
                    <td width="15%" valign="top" align="right"> 
                        <i>
                            {node.frontmatter.date} 
                        </i>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </Layout>
    ) 
};

export const query = graphql`
    query { 
    allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "blog" }}}, sort: {fields: frontmatter___date, order: DESC}) {
            edges { 
                node { 
                    frontmatter { 
                        title 
                        date(formatString: "MMM DD YYYY") 
                        posttype
                    } 
                    fields {
                        slug
                    }
                    excerpt 
                } 
            }
        } 
    }
`
