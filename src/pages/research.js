import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import {TalksList} from "../utils/talkslist.js"
import {PubList} from "../utils/publist.js"
import { Link, graphql } from "gatsby"
import "katex/dist/katex.min.css"


export default function Research({ data }) {
    return (
        <Layout>
        <Section title="Research Interest">
            <p>
                My research interest lies at the interface between probability and analysis.
            <br/>
                The goal is to understand and answer several quantitative questions from probability theory, harmonic analysis, and the study of functional and geometric inequalities. 
            <br/>
                In particular, I am interested in the following topics:
            </p>
            <ul>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                <li>
                    <Link to={node.fields.slug} >
                        {node.frontmatter.title}                
                    </Link>
                </li>
                ))}
            </ul>
        </Section>
        <Section title="Publications and Preprints">
            <PubList/>
            <ul>
            <li>
                PhD Thesis: Stability for functional and geometric inequalities and a stochastic representation of fractional integrals and nonlocal operators (2019) <small> <a href="https://daesungk.github.io/resources/research/thesis-daesungk.pdf">[pdf]</a></small>
            </li>
            <li>My papers on arXiv can be found <a href="https://arxiv.org/a/kim_d_6.html">here</a>.</li>
            </ul>
        </Section>
        <Section title="Talks">
            <TalksList/>
        </Section>
        </Layout>
    ) 
};


export const query = graphql`
    query {
allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}, filter: {frontmatter: {posttype: {eq: "research"}}}) {
    edges {
      node {
        frontmatter {
          date
          title
          posttype
        }
        fields {
          slug
        }
      }
    }
  }
    }
`
