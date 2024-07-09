module.exports = {
    siteMetadata: {
        title: `Daesung Kim`, 
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
            trackingIds: [
                "G-F9Q6XRHQPQ",
                ],
            pluginConfig: {
                head: true,
                respectDNT: true,
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                },
            },
        },
        {   
            resolve: `gatsby-plugin-google-analytics`, 
            options: { 
                trackingId: "UA-123277960-1", 
                head: true, 
            }, 
        }, 
        {
              resolve: `gatsby-plugin-google-fonts`,
              options: {
                fonts: [
                  `Roboto`,
                  `Amatic SC`,
                  `limelight`,
                  `Cabin Sketch`,
                  `source sans pro\:300,400,400i,700`, 
                  `Fredericka the Great`,
                  `Montserrat`,
                  `Lato`
                ],
                display: 'swap'
              }
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `post`,
                path: `${__dirname}/src/posts`,
            }, 
        },
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-katex`,
                        options: {
                            strict: `ignore`
                        }
                    },
                    {
                        resolve: "gatsby-remark-copy-linked-files",
                    }
                ],
            },
        },
    ], 
}
