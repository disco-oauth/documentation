export default {
  head: {
    title: 'Disco-OAuth',
    titleTemplate: '%s | Disco-OAuth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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

  build: {}
}
