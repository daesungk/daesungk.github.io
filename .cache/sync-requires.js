const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/daesungk/Documents/daesungk.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/daesungk/Documents/daesungk.github.io/src/pages/index.js"))),
  "component---src-pages-research-js": hot(preferDefault(require("/Users/daesungk/Documents/daesungk.github.io/src/pages/research.js"))),
  "component---src-pages-seminar-f-20-js": hot(preferDefault(require("/Users/daesungk/Documents/daesungk.github.io/src/pages/seminar-f20.js"))),
  "component---src-pages-seminar-js": hot(preferDefault(require("/Users/daesungk/Documents/daesungk.github.io/src/pages/seminar.js"))),
  "component---src-pages-teaching-js": hot(preferDefault(require("/Users/daesungk/Documents/daesungk.github.io/src/pages/teaching.js"))),
  "component---src-templates-notes-post-js": hot(preferDefault(require("/Users/daesungk/Documents/daesungk.github.io/src/templates/notes-post.js"))),
  "component---src-templates-seminar-post-js": hot(preferDefault(require("/Users/daesungk/Documents/daesungk.github.io/src/templates/seminar-post.js"))),
  "component---src-templates-teaching-post-js": hot(preferDefault(require("/Users/daesungk/Documents/daesungk.github.io/src/templates/teaching-post.js")))
}

