<template>
  <div class="container">
    <div v-html="content"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const content = ref('')

onMounted(async () => {
  try {
    const response = await axios.get('/home.html')
    content.value = response.data
  } catch (error) {
    console.error('Error fetching HTML content:', error)
  }
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>