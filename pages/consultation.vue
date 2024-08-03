<template>
  <div :class="darkModeClass">
    <HeaderConsultation />
    <ConsultationContact />
    <Directive />
    <FAQ />
    <CTA />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import HeaderConsultation from '@/components/HeaderConsultation.vue';
import ConsultationContact from '@/components/ConsultationContact.vue';
import Directive from '@/components/Directive.vue';
import FAQ from '@/components/FAQ.vue';
import CTA from '@/components/CTA.vue';

// Local state management for dark mode
const isDarkMode = ref(false);

// Method to toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

// Computed property to apply dark mode class
const darkModeClass = computed(() => (isDarkMode.value ? 'dark-mode' : ''));
</script>

<style scoped>
/* Scoped styles for dark mode and other custom styles */

.dark-mode {
  background-color: var(--bs-dark-bg, #121212);
  color: var(--bs-light-text, #e1e1e1);
}

body {
  background-color: var(--bs-light, #f8f9fa);
  color: var(--bs-body-color, #343a40);
}

.dark-mode body {
  background-color: var(--bs-dark-bg, #121212);
  color: var(--bs-light-text, #e1e1e1);
}

.dark-mode a {
  color: var(--bs-primary-dark, #bb86fc);
}
</style>