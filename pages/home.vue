<template>
  <div :class="darkModeClass">
    <HeaderHome />
    <Services />
    <Consultation />
    <OurServices />
    <FAQ />
    <CTA />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import HeaderHome from '@/components/HeaderHome.vue';
import Services from '@/components/Services.vue';
import Consultation from '@/components/Consultation.vue';
import OurServices from '@/components/OurServices.vue';
import FAQ from '@/components/FAQ.vue';
import CTA from '@/components/CTA.vue';

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
/* General page styling */
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

/* Ensure links and primary text color compatibility */
a,
.text-primary {
  color: var(--bs-primary) !important;
}

.dark-mode a,
.dark-mode .text-primary {
  color: var(--bs-primary-dark, #bb86fc) !important;
}

/* Add additional styles for components if necessary */
</style>