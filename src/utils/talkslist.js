import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "katex/dist/katex.min.css"

function TalklistFunction(data) {
    const ItemArray = [];
    data.allTalksJson.edges.forEach(item =>
        ItemArray.push(
            <li>
                {item.node.seminar}, &nbsp;
                {item.node.place}, &nbsp;
                {item.node.date}.&nbsp;
                <small>
                <a href={item.node.link1}>{item.node.link1name}</a>&nbsp;
                <a href={item.node.link2}>{item.node.link2name}</a>&nbsp;
                </small>
            </li>
        )
    );
    return ItemArray;
}

export const TalksList = ({ children }) => (
    <StaticQuery
    query={graphql`
        query TalkListQuery {
            allTalksJson { 
                edges { 
                    node { 
                        seminar 
                        place 
                        date 
                        type
                        link1name
                        link1
                        link2name
                        link2
                    } 
                } 
            } 
        }
    `}
    render={data => (
        <ol>
        {TalklistFunction(data)}
        </ol>
    )}
    />
)

