import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import Aboutme from "../components/aboutme"

export default function Home() {
    return (
        <Layout>
        <Aboutme title="About Me">
            <p>
				I'm a visiting assistant professor (postdoc) in the <a href="https://math.gatech.edu" target="_blank" rel="noreferrer">School of Mathematics</a> at <a href="https://www.gatech.edu" target="_blank" rel="noreferrer">Georgia Institute of Technology</a>.
            </p>
            <p>
                I was a J. L. Doob research assistant professor (postdoc) at the <a href="https://illinois.edu/" target="_blank" rel="noreferrer">UIUC</a>, 2019-2022. 
                I obtained my Ph.D degree in Mathematics at <a href="https://www.purdue.edu/" target="_blank" rel="noreferrer">Purdue University</a> in August 2019 under the supervision of <a href="https://www.math.purdue.edu/people/bio?user=banuelos&amp;page=" target="_blank" rel="noreferrer">Rodrigo Bañuelos</a>.  
            </p>
            <p>
            My research interest lies at the interface between probability and analysis.
            </p>
            <p>
             I am on the job market for tenure-track positions starting at Fall 2024. 
            </p>
        </Aboutme>
        <br style={{"clear" : "both"}}/>
        <Section title="Contact Information">
            <p>
				Email: <a href="mailto:dkim3009@gatech.edu">dkim3009 (at) gatech.edu</a> <br/> 
                Office: Skiles 023
            </p>
        </Section>
        </Layout>
    ) 
}
