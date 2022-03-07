import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import { Link, graphql } from "gatsby"

export default function Seminar({ data }) {
    return (
        <Layout>
        <Section title= "UIUC Probability Seminar Fall 2021">
        <p>
            Usually on Tuesday  at 2 pm (central time), 347 Altgeld Hall.
            Please email me (daesungk (at) illinois.edu) for information.
            UIUC Seminar Calendar is <a href="https://calendars.illinois.edu/list/7079">here</a>.
        </p>
        <table>
            <thead>
                <tr>
                    <th width="15%"> Date </th>
                    <th width="20%"> Speaker </th>
                    <th width="65%"> Title </th>
                </tr>
            </thead>
            <tbody>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                <tr>
                    <td> {node.frontmatter.date} </td>
                    <td> {node.frontmatter.speaker}
                        <br/> <small>
                            ({node.frontmatter.affiliation})
                        </small> 
                    </td>
                    <td> 
                        {node.frontmatter.title} 
                        <br/> <small>
                            {node.excerpt}
                            <Link
                                to={node.fields.slug}
                            >
                            [more]
                            </Link>
                        </small>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </Section>
        <Section title="Previous Seminars">
            <ul>
                <li><Link to="/seminar-f20/">Fall 2020</Link></li>
                <li><Link to="/seminar-s21/">Spring 2021</Link></li>
            </ul>
        </Section>
        </Layout>
    ) 
};

export const query = graphql`
    query { 
    allMarkdownRemark(filter: {frontmatter: {seminar: {eq: "UIUC Probability Seminar Fall 2021" }}}, sort: {fields: frontmatter___date, order: ASC}) {
            edges { 
                node { 
                    frontmatter { 
                        affiliation 
                        date 
                        speaker 
                        title 
                        seminar
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
