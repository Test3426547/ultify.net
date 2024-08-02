export default defineNuxtConfig({
  // Single Page Application mode
  ssr: false,

  // Static Site Generation
  target: 'static',

  app: {
    head: {
      titleTemplate: '%s - Ultify Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Ultify Solutions - Digital Marketing Made Easy' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/css/nucleo-icons.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/css/nucleo-svg.css' },
        { rel: 'stylesheet', href: '/assets/css/theme.css' },
        { rel: 'stylesheet', href: '/assets/css/loopple/loopple.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' }
      ],
      script: [
        { src: 'https://kit.fontawesome.com/42d5adcbca.js', crossorigin: 'anonymous' },
        { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/core/bootstrap.min.js', type: 'text/javascript' },
        { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/soft-design-system.js', type: 'text/javascript' },
        { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/plugins/countup.min.js', type: 'text/javascript' },
        { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/plugins/flatpickr.min.js' },
        { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/plugins/typedjs.js' },
        { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', crossorigin: 'anonymous' },
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', crossorigin: 'anonymous' }
      ]
    }
  },

  // Global CSS files
  css: [
    '~/assets/css/main.css', // Existing project styles
    '~/assets/css/nucleo-icons.css', // Nucleo Icons
    '~/assets/css/nucleo-svg.css', // Nucleo SVG
    '~/assets/css/soft-design-system-pro.css', // Soft Design System Pro
    '~/assets/css/soft-design-system-pro.min.css', // Soft Design System Pro Minified
    '~/assets/css/theme.css' // Additional theme-specific styles
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  vite: {
    css: {
      // Disable CSS source maps
      devSourcemap: false,
    },
    // Remove any source map references in production builds
    build: {
      sourcemap: false,
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Ultify Solutions',
      short_name: 'Ultify',
      description: 'A Modern Digital Marketing Agency Progressive Web App Single Page Application',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        { src: '/pwa-64x64.png', sizes: '64x64', type: 'image/png' },
        { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
        { src: '/maskable-icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
      ]
    },
    workbox: {
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.destination === 'image',
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
            }
          }
        },
        {
          urlPattern: ({ request }) => request.destination === 'script' || request.destination === 'style',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-resources',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
            }
          }
        },
        {
          urlPattern: ({ url }) => url.pathname.startsWith('/api'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-calls',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
            }
          }
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBaseURL: 'https://secret-shore-04461-19d2043c008b.herokuapp.com/https://api.mcdonaldsz.com',
    },
    openaiApiKey: process.env.OPENAI_API_KEY
  },

  nitro: {
    prerender: {
      routes: ['/']
    },
    serveStatic: true
  },

  devtools: { enabled: true },
  compatibility: { compatibilityDate: '2024-07-29' },
  compatibilityDate: '2024-07-31'
});