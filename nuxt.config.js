const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    vendor: ['axios','exif-js','jquery'],
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'EXIF': 'exif-js'
      })
    ]
  },
  plugins: [
    // ssr: false to only include it on client-side
    // { src: '~assets/js/jquery.min.js', ssr: false },
  ],
  modules: [
    // '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    ['/api', {
      // target: 'http://192.168.2.108:3001/api',
      target: 'http://10.146.66.46:3001/api',
      pathRewrite: { '^/api': '' } }]
  ]
}
