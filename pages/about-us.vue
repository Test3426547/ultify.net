<template>
  <div :class="darkModeClass">
    <HeaderAboutUs />
    <AboutUs />
    <HistoricalTimeline />
    <Consultation />
    <FAQ />
    <CTA />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderAboutUs from '~/components/HeaderAboutUs.vue';
import AboutUs from '~/components/AboutUs.vue';
import HistoricalTimeline from '~/components/HistoricalTimeline.vue';
import Consultation from '~/components/Consultation.vue';
import FAQ from '~/components/FAQ.vue';
import CTA from '~/components/CTA.vue';

const isDarkMode = ref(false);

// If you have a way to toggle dark mode, you can add a method to change `isDarkMode`.
// For example, based on user preference or a button click event.
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

const darkModeClass = computed(() => (isDarkMode.value ? 'dark-mode' : ''));
</script>

<style scoped>
/* Additional styling specific to the About Us page */

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