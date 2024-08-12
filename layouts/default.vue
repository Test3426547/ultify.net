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
  <div>
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
/* Import VAG Rounded Bold font */
@import url('https://fonts.cdnfonts.com/css/vag-rounded');

/* Base styles */
* {
  font-family: 'VAG Rounded Bold', sans-serif !important;
}

html, body {
  background-color: var(--bs-light-bg);
  color: var(--bs-body-color);
}

/* PWA Toast Styles */
.pwa-toast {
  background-color: var(--bs-toast-bg);
  border: 1px solid var(--bs-toast-border);
}

.pwa-toast button {
  border: 1px solid var(--bs-toast-border);
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
  background-color: var(--bs-chatbot-bg);
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
  border: 1px solid var(--bs-chatbot-border);
  border-radius: 10px;
  background-color: var(--bs-chatbot-bg);
  box-shadow: var(--bs-chatbot-shadow);
  z-index: 1000;
}

/* General styles */
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

/* Navbar Styles */
.navbar {
  background-color: var(--bs-navbar-bg) !important;
  box-shadow: var(--bs-navbar-shadow);
  border: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
</style>