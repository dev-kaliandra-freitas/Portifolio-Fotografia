// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-vuefire", [
    '@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
        'Noto+Serif+JP': [400, 700], 
        Montserrat: [400, 700],
      }
    }
  ]
  ],
  vuefire: {
    config: {
      apiKey: "AIzaSyD98xl4pdQeXOmiQXF9vyAmcHr4_BP7vK4",
      authDomain: "portifolio-fotografia.firebaseapp.com",
      projectId: "portifolio-fotografia",
      storageBucket: "portifolio-fotografia.appspot.com",
      messagingSenderId: "248568997454",
      appId: "1:248568997454:web:673c5fef3a6e71becf851f",
      measurementId: "G-WK418RLC4Z"
    }
  },

  css: ['~/styles/global.css'],
})