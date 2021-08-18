import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import {TalksList} from "../utils/talkslist.js"
import {PubList} from "../utils/publist.js"


export default function Research() {
    return (
        <Layout>
        <Section title="Research Interest">
            <p>
                My research interests lie at the interface of probability and analysis. I am particularly interested in the study of functional and geometric inequalities, singular integrals, fourier multipliers, nonlocal operators from stochastic analysis, and probability theory.
            </p>
        </Section>
        <Section title="Publications and Preprints">
            <PubList/>
            <ul>
            <li>
                PhD Thesis: Stability for functional and geometric inequalities and a stochastic representation of fractional integrals and nonlocal operators (2019) <small> <a href="https://daesungk.github.io/resources/research/thesis-daesungk.pdf">[pdf]</a></small>
            </li>
            </ul>
        </Section>
        <Section title="Talks">
            <TalksList/>
        </Section>
        </Layout>
    ) 
};


