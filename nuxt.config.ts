export default defineNuxtConfig({
  // Server-Side Rendering mode
  ssr: true,

  // Global CSS files
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/css/main.css',
    '~/assets/css/theme.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Import plugins
  plugins: [
    '~/plugins/analytics.client',
    '~/plugins/fontawesome.js',
  ],

  // Application head settings
  app: {
    head: {
      titleTemplate: '%s - Ultify Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Ultify Solutions - Digital Marketing Made Easy' },
        { name: 'theme-color', content: '#ffffff' }, // Light mode color
        { name: 'theme-color', content: '#121212', media: '(prefers-color-scheme: dark)' } // Dark mode color
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', crossorigin: 'anonymous' },
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', crossorigin: 'anonymous' },
      ]
    }
  },

  // Nuxt modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    '@builder.io/sdk-vue/nuxt',
    '@nuxtjs/strapi',
    // Remove 'axios' from here
  ],

  strapi: {
    url: process.env.STRAPI_URL || 'https://mcdonaldsz.com',
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },

  // PostCSS configuration for TailwindCSS and Autoprefixer
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // Vite-specific configurations
  vite: {
    css: {
      devSourcemap: false, // Disable CSS source maps in development
    },
    build: {
      sourcemap: false, // Disable source maps in production
    },
  },

  // PWA configuration
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

  // Runtime configuration
  runtimeConfig: {
    public: {
      strapiURL: process.env.STRAPI_URL || 'https://mcdonaldsz.com',
    },
  },

  // Nitro configuration
  nitro: {
    prerender: {
      routes: ['/', '/about-us', '/consultation', '/contact-us', '/website']
    },
    serveStatic: true
  },

  // Devtools settings
  devtools: { enabled: true },
  compatibilityDate: '2024-08-03',

});