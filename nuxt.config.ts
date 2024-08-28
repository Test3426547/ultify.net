import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Server-Side Rendering mode
  ssr: true,

  // Global CSS files
  css: [
    // Remove or comment out the SCSS file if it exists
    // '@/assets/scss/theme.scss',
    
    // Add the CSS file
    '@/assets/css/theme.css',
    
    // ... other CSS files ...
  ],

  // Import plugins
  plugins: [
    '~/plugins/analytics.client',
    '~/plugins/fontawesome.js',
    '~/plugins/bootstrap.client.ts',
  ],

  // Application head settings
  app: {
    head: {
      titleTemplate: '%s | Ultify Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Ultify Solutions offers cutting-edge digital marketing services to boost your online presence and drive growth.' },
        { hid: 'og:title', property: 'og:title', content: 'Ultify Solutions - Digital Marketing Experts' },
        { hid: 'og:description', property: 'og:description', content: 'Boost your online presence with Ultify Solutions. We offer tailored digital marketing strategies for businesses of all sizes.' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.ultifysolutions.com/og-image.jpg' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.ultifysolutions.com' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ultifysolutions' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'theme-color', content: '#121212', media: '(prefers-color-scheme: dark)' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap' },
      ],
      script: [
        // Remove or comment out these lines:
        // { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', crossorigin: 'anonymous' },
        // { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', crossorigin: 'anonymous' },
      ]
    }
  },

  // Nuxt modules
  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/strapi',
    '@nuxtjs/sitemap', // Added sitemap module
  ],

  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    token: process.env.STRAPI_TOKEN,
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },

  // Sitemap configuration
  sitemap: {
    hostname: 'https://www.ultifysolutions.com',
    gzip: true,
    exclude: [
      '/admin/**'
    ],
    routes: async () => {
      const { $strapi } = useNuxtApp()
      
      // Fetch dynamic routes from Strapi
      const fetchRoutes = async (contentType) => {
        const { data } = await $strapi.find(contentType, {
          fields: ['slug'],
          pagination: { limit: -1 }
        })
        return data.map(item => `/${contentType}/${item.attributes.slug}`)
      }

      // Fetch blog posts
      const blogRoutes = await fetchRoutes('posts')

      // Fetch case studies
      const caseStudyRoutes = await fetchRoutes('case-studies')

      // Fetch service pages
      const serviceRoutes = await fetchRoutes('services')

      // Combine all dynamic routes
      const dynamicRoutes = [
        ...blogRoutes,
        ...caseStudyRoutes,
        ...serviceRoutes
      ]

      // Add any additional static routes
      const staticRoutes = [
        '/',
        '/about-us',
        '/consultation',
        '/contact-us',
        '/website'
      ]

      return [...staticRoutes, ...dynamicRoutes]
    }
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
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables.scss" as *;'
        }
      },
      devSourcemap: false,
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
      strapiURL: process.env.STRAPI_URL || 'http://localhost:1337',
      siteUrl: process.env.SITE_URL || 'https://www.mcdonaldsz.com', // Add siteUrl
      strapiBaseUrl: process.env.STRAPI_BASE_URL || 'http://localhost:1337',
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
})

// Remove the useStrapi composable from this file