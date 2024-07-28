export default defineNuxtConfig({
  head: {
    titleTemplate: '%s - Unify Net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Ultify Solutions - Digital Marketing Made Easy' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/css/nucleo-icons.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/css/nucleo-svg.css' },
      { rel: 'stylesheet', href: '/assets/css/theme.css' },
      { rel: 'stylesheet', href: '/assets/css/loopple/loopple.css' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/42d5adcbca.js', crossorigin: 'anonymous' },
      { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/core/bootstrap.min.js', type: 'text/javascript' },
      { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/soft-design-system.js', type: 'text/javascript' },
      { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/plugins/countup.min.js', type: 'text/javascript' },
      { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/plugins/flatpickr.min.js' },
      { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/plugins/typedjs.js' },
      { src: '/assets/js/custom.js', type: 'text/javascript' }
    ]
  },
  devtools: { enabled: true },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  modules: ['@vite-pwa/nuxt'],

  pwa: {
    registerType: 'prompt',
    injectRegister: false,
    manifest: {
      name: 'ultify.net',
      short_name: 'ultify.net',
      description: 'A Modern Digital Marketing Agency Progressive Web App Single Page Application',
      theme_color: '#ffffff',
    },
    icons: [
      {
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },
    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
    registerWebManifestInRouteRules: true,
    client: {
      periodicSyncForUpdates: 3600,
      installPrompt: true,
    },
  },

  plugins: ['~/plugins/axios.js'],

  runtimeConfig: {
    public: {
      edgeConfig: process.env.EDGE_CONFIG,
      useEdgeConfig: process.env.USE_EDGE_CONFIG === 'true',
    },
    openaiApiKey: process.env.OPENAI_API_KEY,
  },

  compatibilityDate: '2024-07-29',
});