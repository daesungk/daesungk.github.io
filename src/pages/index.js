import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"

export default function Home() {
    return (
        <Layout>
        <Section title="About Me">
            <p>
				I'm a visiting assistant professor (postdoc) in the <a href="https://math.gatech.edu" target="_blank" rel="noreferrer">School of Mathematics</a> at <a href="https://www.gatech.edu" target="_blank" rel="noreferrer">Georgia Institute of Technology</a>.
            </p>
            <p>
                I was a J. L. Doob research assistant professor (postdoc) at the <a href="https://illinois.edu/" target="_blank" rel="noreferrer">UIUC</a>, 2019-2022. 
                I obtained my Ph.D degree in Mathematics at <a href="https://www.purdue.edu/" target="_blank" rel="noreferrer">Purdue University</a> in August 2019 under the supervision of <a href="https://www.math.purdue.edu/people/bio?user=banuelos&amp;page=" target="_blank" rel="noreferrer">Rodrigo Bañuelos</a>.  
            </p>
            <p>
                Curriculum Vitae can be found <a href="http://daesungk.github.io/resources/cv-dkim.pdf" target="_blank" rel="noreferrer">here</a>.
            </p>
        </Section>
        <Section title="Contact Information">
            <p>
				Email: <a href="mailto:dkim3009@gatech.edu">dkim3009 (at) gatech.edu</a> <br/> 
                Office: Skiles 023
            </p>
        </Section>
        </Layout>
    ) 
}
