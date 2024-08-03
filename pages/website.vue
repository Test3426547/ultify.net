<template>
  <div :class="darkModeClass">
    <HeaderWebsite />
    <WebsiteContent />
    <WebsiteTechnology />
    <WebsiteDetails />
    <Consultation />
    <FAQ />
    <CTA />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import HeaderWebsite from '@/components/HeaderWebsite.vue';
import WebsiteContent from '@/components/WebsiteContent.vue';
import WebsiteTechnology from '@/components/WebsiteTechnology.vue';
import WebsiteDetails from '@/components/WebsiteDetails.vue';
import Consultation from '@/components/Consultation.vue';
import FAQ from '@/components/FAQ.vue';
import CTA from '@/components/CTA.vue';

// Local state for dark mode
const isDarkMode = ref(false);

// Method to toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

// Computed property to determine the class for dark mode
const darkModeClass = computed(() => (isDarkMode.value ? 'dark-mode' : ''));
</script>

<style scoped>
/* Base styles */
body {
  background-color: var(--bs-light, #f8f9fa);
  color: var(--bs-body-color, #343a40);
}

.dark-mode body {
  background-color: var(--bs-dark-bg, #121212);
  color: var(--bs-light-text, #e1e1e1);
}

/* Component specific styles */
.dark-mode .text-primary,
.text-primary {
  color: var(--bs-primary) !important;
}

.dark-mode .bg-light,
.bg-light {
  background-color: var(--bs-light, #f8f9fa) !important;
}

.dark-mode .bg-dark,
.bg-dark {
  background-color: var(--bs-dark-bg, #121212) !important;
}

/* Additional dark mode styles for other elements */
.dark-mode h4,
.dark-mode p,
.dark-mode a {
  color: var(--bs-light-text, #e1e1e1) !important;
}

a,
.text-primary {
  color: var(--bs-primary) !important;
}

.dark-mode a,
.dark-mode .text-primary {
  color: var(--bs-primary-dark, #bb86fc) !important;
}

/* Adjustments for cards and containers */
.dark-mode .card,
.card {
  background-color: rgba(255, 255, 255, 0.9);
}

.dark-mode .card,
.card {
  backdrop-filter: blur(10px);
  background-color: rgba(18, 18, 18, 0.8); /* Semi-transparent dark background */
}

.dark-mode .border-radius-xl,
.border-radius-xl {
  border-radius: 0.75rem;
}

/* Add additional component-specific dark mode adjustments here */
</style>