// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-research-js": () => import("./../../../src/pages/research.js" /* webpackChunkName: "component---src-pages-research-js" */),
  "component---src-pages-seminar-f-20-js": () => import("./../../../src/pages/seminar-f20.js" /* webpackChunkName: "component---src-pages-seminar-f-20-js" */),
  "component---src-pages-seminar-js": () => import("./../../../src/pages/seminar.js" /* webpackChunkName: "component---src-pages-seminar-js" */),
  "component---src-pages-seminar-s-21-js": () => import("./../../../src/pages/seminar-s21.js" /* webpackChunkName: "component---src-pages-seminar-s-21-js" */),
  "component---src-pages-teaching-js": () => import("./../../../src/pages/teaching.js" /* webpackChunkName: "component---src-pages-teaching-js" */),
  "component---src-templates-notes-post-js": () => import("./../../../src/templates/notes-post.js" /* webpackChunkName: "component---src-templates-notes-post-js" */),
  "component---src-templates-seminar-post-js": () => import("./../../../src/templates/seminar-post.js" /* webpackChunkName: "component---src-templates-seminar-post-js" */),
  "component---src-templates-teaching-post-js": () => import("./../../../src/templates/teaching-post.js" /* webpackChunkName: "component---src-templates-teaching-post-js" */)
}

