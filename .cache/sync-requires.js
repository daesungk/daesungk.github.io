const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/daesungkim/Documents/daesungk.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/daesungkim/Documents/daesungk.github.io/src/pages/index.js"))),
  "component---src-templates-blank-js": hot(preferDefault(require("/Users/daesungkim/Documents/daesungk.github.io/src/templates/blank.js"))),
  "component---src-templates-research-post-js": hot(preferDefault(require("/Users/daesungkim/Documents/daesungk.github.io/src/templates/research-post.js"))),
  "component---src-templates-seminar-post-js": hot(preferDefault(require("/Users/daesungkim/Documents/daesungk.github.io/src/templates/seminar-post.js"))),
  "component---src-templates-teaching-post-js": hot(preferDefault(require("/Users/daesungkim/Documents/daesungk.github.io/src/templates/teaching-post.js")))
}

