export default {
  head: {
    title: 'Disco-OAuth',
    titleTemplate: '%s | Disco-OAuth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Easily integrate discord OAuth2 in your NodeJS webapps using disco-oauth.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Mono&family=K2D:wght@300&display=swap' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js' }
    ]
  },

  css: [
    'vuesax/dist/vuesax.css',
    '@/assets/theme.css'
  ],

  plugins: [
    '@/plugins/vuesax',
    { src: '@/plugins/docs-loader', mode: 'server' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/stylelint-module',
  ],

  modules: [],

  build: {},
}
