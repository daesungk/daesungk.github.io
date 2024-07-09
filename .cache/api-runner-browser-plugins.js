module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["G-F9Q6XRHQPQ"],"pluginConfig":{"head":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"],"origin":"https://www.googletagmanager.com","delayOnRouteUpdate":0},"gtagConfig":{}},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-123277960-1","head":true,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0,"enableWebVitalsTracking":false},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
