var plugins = [{
      plugin: require('/Users/noelthomas/Desktop/SSYv1 editable/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/noelthomas/Desktop/SSYv1 editable/node_modules/gatsby-plugin-google-tagmanager/gatsby-ssr'),
      options: {"plugins":[],"id":"GTM-P4RNF8D","includeInDevelopment":false},
    },{
      plugin: require('/Users/noelthomas/Desktop/SSYv1 editable/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[],"runtimeCaching":[{"urlPattern":{},"handler":"cacheFirst"},{"urlPattern":{},"handler":"staleWhileRevalidate"},{"urlPattern":{},"handler":"staleWhileRevalidate"}],"skipWaiting":true,"clientsClaim":true},
    },{
      plugin: require('/Users/noelthomas/Desktop/SSYv1 editable/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Stars for Sheltered Youth","short_name":"SSY","start_url":"/","background_color":"#3D7650","theme_color":"#ffffda","display":"standalone","icon":"/Users/noelthomas/Desktop/SSYv1 editable/static/favicon.ico","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"83586badfc65ed4f944c583e72c01634"},
    },{
      plugin: require('/Users/noelthomas/Desktop/SSYv1 editable/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
