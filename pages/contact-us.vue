<template>
    <div v-html="content"></div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const content = ref('');
  
  onMounted(async () => {
    try {
      const { $axios } = useNuxtApp();
      const response = await $axios.get('/contact-us.html');
      content.value = response.data;
    } catch (error) {
      console.error(error);
    }
  });
  </script>  