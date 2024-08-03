<template>
  <div :class="darkModeClass">
    <HeaderContact />
    <Contact />
    <Consultation />
    <FAQ />
    <CTA />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import HeaderContact from '~/components/HeaderContact.vue';
import Contact from '~/components/Contact.vue';
import Consultation from '~/components/Consultation.vue';
import FAQ from '~/components/FAQ.vue';
import CTA from '~/components/CTA.vue';

// Local state for dark mode
const isDarkMode = ref(false);

// Method to toggle dark mode (if needed)
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

// Computed property to determine the class for dark mode
const darkModeClass = computed(() => (isDarkMode.value ? 'dark-mode' : ''));
</script>

<style scoped>
/* Styles for the dark mode and other customizations */

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