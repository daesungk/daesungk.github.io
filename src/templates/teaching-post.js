import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "katex/dist/katex.min.css"


export default function TeachingPost({data}) {
    const post = data.markdownRemark
    return (
    <Layout>
        <h5>
            {post.frontmatter.coursenumber}: {post.frontmatter.coursename} &nbsp;
            <small>({post.frontmatter.semester})</small>        
        </h5>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter { 
                coursename
                coursenumber
                university
                semester
                date
                posttype
            } 
        } 
    } 
`
