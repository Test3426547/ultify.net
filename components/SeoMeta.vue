<!-- components/SeoMeta.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '#app'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ogImage: {
    type: String,
    default: '/default-og-image.jpg'
  },
  ogUrl: {
    type: String,
    required: true
  },
  // Add more props as needed
})

const metaTags = computed(() => [
  { name: 'description', content: props.description },
  { property: 'og:title', content: props.title },
  { property: 'og:description', content: props.description },
  { property: 'og:image', content: props.ogImage },
  { property: 'og:url', content: props.ogUrl },
  // Add more meta tags as needed
])

useHead({
  title: props.title,
  meta: metaTags,
})
</script>