const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/noelthomas/Desktop/SSYv1 editable/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/noelthomas/Desktop/SSYv1 editable/src/pages/404.js"))),
  "component---src-templates-about-page-js": hot(preferDefault(require("/Users/noelthomas/Desktop/SSYv1 editable/src/templates/AboutPage.js"))),
  "component---src-templates-blog-index-js": hot(preferDefault(require("/Users/noelthomas/Desktop/SSYv1 editable/src/templates/BlogIndex.js"))),
  "component---src-templates-components-page-js": hot(preferDefault(require("/Users/noelthomas/Desktop/SSYv1 editable/src/templates/ComponentsPage.js"))),
  "component---src-templates-contact-page-js": hot(preferDefault(require("/Users/noelthomas/Desktop/SSYv1 editable/src/templates/ContactPage.js"))),
  "component---src-templates-default-page-js": hot(preferDefault(require("/Users/noelthomas/Desktop/SSYv1 editable/src/templates/DefaultPage.js"))),
  "component---src-templates-get-page-js": hot(preferDefault(require("/Users/noelthomas/Desktop/SSYv1 editable/src/templates/GetPage.js"))),
  "component---src-templates-home-page-js": hot(preferDefault(require("/Users/noelthomas/Desktop/SSYv1 editable/src/templates/HomePage.js"))),
  "component---src-templates-partners-page-js": hot(preferDefault(require("/Users/noelthomas/Desktop/SSYv1 editable/src/templates/PartnersPage.js"))),
  "component---src-templates-program-page-js": hot(preferDefault(require("/Users/noelthomas/Desktop/SSYv1 editable/src/templates/ProgramPage.js"))),
  "component---src-templates-single-post-js": hot(preferDefault(require("/Users/noelthomas/Desktop/SSYv1 editable/src/templates/SinglePost.js")))
}

