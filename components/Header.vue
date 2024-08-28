// components/Header.vue
<template>
  <div v-html="headerHtml"></div>
</template>

<script>
import { ref, onMounted } from 'vue'
import nunjucks from 'nunjucks'

export default {
  props: {
    headerData: Object
  },
  setup(props) {
    const headerHtml = ref('')

    onMounted(async () => {
      try {
        // Fetch the Nunjucks template as a string from the public directory
        const response = await fetch('/Header.nunjucks')
        const template = await response.text()

        // Render the template with Nunjucks
        headerHtml.value = nunjucks.renderString(template, props.headerData)
      } catch (error) {
        console.error('Error loading or rendering template:', error)
      }
    })

    return {
      headerHtml
    }
  }
}
</script>