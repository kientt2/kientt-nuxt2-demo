export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt 2 API Demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/normalize.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/api.js',
    '~/plugins/gtm.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // /'@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
  ],

    gtm: {
        id: process.env.GOOGLE_TAG_MANAGER_ID || 'G-15N2JMDRZV',
        scriptDefer: true,
        pageTracking: true,
        // layer: 'test',
        variables: {
            test: '1'
        }
    },

    publicRuntimeConfig: {
    gtm: {
      id: 'G-15N2JMDRZV&runtime'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    fbApiKey: 'AIzaSyD2o8EXECjdJFK2BRb8RQzgxNqDEnCCeIw',
    GOOGLE_TAG_MANAGER_ID: 'G-15N2JMDRZV',
  },
}
