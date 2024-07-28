<template>
    <div v-html="content"></div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const content = ref('')
  
  onMounted(async () => {
    try {
      const response = await axios.get('/contact-us.html')
      content.value = response.data
    } catch (error) {
      console.error('Error fetching HTML content:', error)
    }
  })
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>  