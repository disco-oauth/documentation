import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: '%s - Disco-OAuth',
    title: 'Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A node.js library for all your Discord OAuth2 needs!' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://disco-oauth.now.sh/' },
      { property: 'og:title', content: 'Disco-OAuth' },
      { property: 'og:description', content: 'A library to make oauth requests to discord. It is easy to use and implement in your app.' },
      { property: 'og:image', content: '/icon.png' },

      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://disco-oauth.now.sh/' },
      { property: 'twitter:title', content: 'Disco-OAuth' },
      { property: 'twitter:description', content: 'A library to make oauth requests to discord. It is easy to use and implement in your app.' },
      { property: 'twitter:image', content: '/icon.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: colors.blue.base,
    failedColor: colors.deepOrange.accent4,
    height: '2px',

  },

  css: [
    '~/assets/common.css'
  ],
  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/pwa'
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        light: {
          primary: colors.blue.base,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          blurple: '#7289DA'
        },
        dark: {
          primary: colors.blue.base,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.darken2,
          blurple: '#7289DA'
        }
      }
    }
  },

  build: {
    analyze: true
  }
}
