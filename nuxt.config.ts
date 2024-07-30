export default defineNuxtConfig({
  ssr: false, // Enable SPA mode
  target: 'static', // Enable SSG mode
  head: {
    titleTemplate: '%s - Ultify Solutions',
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
      { rel: 'stylesheet', href: '/assets/css/loopple/loopple.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' } // Bootstrap CSS
    ],
    script: [
      { src: 'https://kit.fontawesome.com/42d5adcbca.js', crossorigin: 'anonymous' },
      { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/core/bootstrap.min.js', type: 'text/javascript' },
      { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/soft-design-system.js', type: 'text/javascript' },
      { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/plugins/countup.min.js', type: 'text/javascript' },
      { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/plugins/flatpickr.min.js' },
      { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/plugins/typedjs.js' },
      { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', integrity: 'sha384-oBqDVmMz4fnFO9gyb4LrW3r7nEQHmxM19M5Dix5R8fA3fn0ZlO8ABo6Nu6vfqI5y', crossorigin: 'anonymous' }, // Popper.js
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+3mgPxhIUANmELJtvkXWZh58N9jpG', crossorigin: 'anonymous' } // Bootstrap JS
    ]
  },
  devtools: { enabled: true },

  nitro: {
    prerender: {
      routes: ['/'],
      dynamicRoutes: ['/dynamic/**'], // Enable dynamic routes for SSG
    },
    serveStatic: true,
    isg: {
      enabled: false, // Enable Incremental Static Generation
    },
  },

  modules: ['@vite-pwa/nuxt'],

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  css: ['~/assets/css/main.css'], // Ensure the correct path to main.css

  pwa: {
    registerType: 'autoUpdate',
    injectRegister: 'script',
    manifest: {
      name: 'ultify.net',
      short_name: 'ultify.net',
      description: 'A Modern Digital Marketing Agency Progressive Web App Single Page Application',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
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
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.destination === 'image',
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
            },
          },
        },
        {
          urlPattern: ({ request }) => request.destination === 'script' || request.destination === 'style',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-resources',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
            },
          },
        },
        {
          urlPattern: ({ url }) => url.pathname.startsWith('/api'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-calls',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
            },
          },
        },
      ],
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
      apiBaseURL: 'https://secret-shore-04461-19d2043c008b.herokuapp.com/https://api.mcdonaldsz.com',
    },
    openaiApiKey: process.env.OPENAI_API_KEY,
  },

  compatibilityDate: '2024-07-29',
});