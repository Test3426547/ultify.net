<script setup lang="ts">
import { ref } from 'vue'
import Navigation from '~/components/Navigation.vue'
import Chatbot from '~/components/Chatbot.vue'

const showChatbot = ref(false)

function toggleChatbot() {
  showChatbot.value = !showChatbot.value
}
</script>

<template>
  <main>
    <Navigation />
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
</template>

<style>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: white;
}

.pwa-toast .message {
  margin-bottom: 8px;
}

.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}

.chatbot-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.chatbot-icon img {
  width: 100%;
  height: 100%;
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
</style>