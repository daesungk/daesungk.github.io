module.exports = {
    siteMetadata: {
        title: `Daesung Kim`, 
    },
    plugins: [
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
                  `limelight`,
                  `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
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
