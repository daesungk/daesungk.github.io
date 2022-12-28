// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-blank-js": () => import("./../../../src/templates/blank.js" /* webpackChunkName: "component---src-templates-blank-js" */),
  "component---src-templates-research-post-js": () => import("./../../../src/templates/research-post.js" /* webpackChunkName: "component---src-templates-research-post-js" */),
  "component---src-templates-seminar-post-js": () => import("./../../../src/templates/seminar-post.js" /* webpackChunkName: "component---src-templates-seminar-post-js" */),
  "component---src-templates-teaching-post-js": () => import("./../../../src/templates/teaching-post.js" /* webpackChunkName: "component---src-templates-teaching-post-js" */)
}

