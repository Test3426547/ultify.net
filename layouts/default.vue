<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import Chatbot from '~/components/Chatbot.vue';

const showChatbot = ref(false);

function toggleChatbot() {
  showChatbot.value = !showChatbot.value;
}
</script>

<template>
  <div :class="darkModeClass">
    <Navbar />
    <main>
      <slot />
      <ClientOnly>
        <div v-if="$pwa?.needRefresh" class="pwa-toast" role="alert" aria-labelledby="toast-message">
          <div class="message">
            <span id="toast-message">New content available, click on reload button to update</span>
          </div>
          <div class="buttons">
            <button @click="$pwa.updateServiceWorker()">Reload</button>
            <button @click="$pwa.cancelPrompt()">Close</button>
          </div>
        </div>
      </ClientOnly>
      <ClientOnly>
        <div class="chatbot-icon" @click="toggleChatbot">
          <img src="/chatbot-icon.png" alt="Chatbot Icon" />
        </div>
        <div v-if="showChatbot" class="chatbot-window">
          <Chatbot @close="toggleChatbot" />
        </div>
      </ClientOnly>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
/* Base styles */
html, body {
  background-color: var(--bs-light, #f8f9fa);
  color: var(--bs-body-color, #343a40);
}

.dark-mode html, .dark-mode body {
  background-color: var(--bs-dark-bg, #121212);
  color: var(--bs-light-text, #e1e1e1);
}

/* PWA Toast Styles */
.pwa-toast {
  background-color: var(--bs-toast-bg, white);
  border: 1px solid #8885;
}

.dark-mode .pwa-toast {
  background-color: var(--bs-toast-dark-bg, #333);
  border-color: #6665;
}

.pwa-toast button {
  border: 1px solid #8885;
}

.dark-mode .pwa-toast button {
  border-color: #6665;
}

/* Chatbot Styles */
.chatbot-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--bs-light, #f8f9fa);
}

.dark-mode .chatbot-icon {
  background-color: var(--bs-dark-bg, #121212);
}

.chatbot-icon img {
  max-width: 100%;
  max-height: 100%;
}

.chatbot-window {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.dark-mode .chatbot-window {
  background-color: var(--bs-dark-bg, #121212);
  border-color: #444;
}

.dark-mode .chatbot-window img {
  filter: invert(1);
}

.dark-mode .message {
  color: var(--bs-light-text, #e1e1e1);
}

.dark-mode .buttons button {
  color: var(--bs-light-text, #e1e1e1);
}

/* General styles */
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>