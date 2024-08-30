<script setup lang="ts">
import { useHead } from '#app'

// Default metadata
const defaultMeta = {
  title: 'Ultify Solutions',
  description: 'Ultify Solutions - Digital Marketing Made Easy. Boost your online presence with our expert services.',
  image: 'https://www.ultifysolutions.com/og-image.jpg',
  url: 'https://www.ultifysolutions.com',
}

// SEO metadata
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${defaultMeta.title}` : defaultMeta.title
  },
  meta: [
    { name: 'description', content: defaultMeta.description },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    
    // Open Graph
    { property: 'og:title', content: defaultMeta.title },
    { property: 'og:description', content: defaultMeta.description },
    { property: 'og:image', content: defaultMeta.image },
    { property: 'og:url', content: defaultMeta.url },
    { property: 'og:type', content: 'website' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@ultifysolutions' },
    { name: 'twitter:title', content: defaultMeta.title },
    { name: 'twitter:description', content: defaultMeta.description },
    { name: 'twitter:image', content: defaultMeta.image },
    
    // Theme color
    { name: 'theme-color', content: '#ffffff' },
    { name: 'theme-color', content: '#121212', media: '(prefers-color-scheme: dark)' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
})
</script>

<template>
  <div>
    <NuxtPwaAssets />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
