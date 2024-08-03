export default defineNuxtConfig({
  ssr: false, // Single Page Application mode
  target: 'static', // Static Site Generation

  // Global CSS files
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/css/main.css',
    '~/assets/css/nucleo-icons.css',
    '~/assets/css/nucleo-svg.css',
    '~/assets/css/soft-design-system-pro.css',
    '~/assets/css/soft-design-system-pro.min.css',
    '~/assets/css/theme.css'
  ],

  // Import plugins
  plugins: [
    { src: '~/plugins/bootstrap.client.js', mode: 'client' }
  ],

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
      ],
      script: [
        { src: 'https://kit.fontawesome.com/42d5adcbca.js', crossorigin: 'anonymous' },
        { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', crossorigin: 'anonymous' },
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', crossorigin: 'anonymous' },
        { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/plugins/countup.min.js', type: 'text/javascript' },
        { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/plugins/flatpickr.min.js', type: 'text/javascript' },
        { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/plugins/typedjs.js', type: 'text/javascript' },
        { src: 'https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/soft-ui-design-system-builder/v1.0.7/assets/js/soft-design-system.js', type: 'text/javascript' }
      ]
    }
  },

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
      devSourcemap: false, // Disable CSS source maps
    },
    build: {
      sourcemap: false, // Remove any source map references in production builds
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

  devtools: { enabled: true }
});