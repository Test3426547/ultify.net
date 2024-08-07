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
/* Base styles */
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
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
 
 In the code above, we have a  showChatbot  ref that is used to toggle the visibility of the chatbot window. The  toggleChatbot  function is used to toggle the value of  showChatbot  when the chatbot icon is clicked. 
 The  chatbot-icon  div contains an image of the chatbot icon. When the icon is clicked, the  toggleChatbot  function is called to toggle the visibility of the chatbot window. 
 The  chatbot-window  div contains the chatbot component. It is only displayed when the  showChatbot  ref is true. 
 The  chatbot-icon  and  chatbot-window  divs are styled using CSS. The  chatbot-icon  div is positioned at the bottom right corner of the screen and contains the chatbot icon image. The  chatbot-window  div is positioned below the chatbot icon and contains the chatbot component. 
 The chatbot icon image is displayed using an  img  tag with the  src  attribute set to  /chatbot-icon.png . The image is styled to have a maximum width and height of 100%. 
 The chatbot window is displayed using the  Chatbot  component. The  Chatbot  component is imported at the top of the file and rendered inside the  chatbot-window  div. 
 The chatbot window is styled using CSS to have a fixed position at the bottom right corner of the screen. It has a width of 300px, a height of 400px, a border, a border radius of 10px, a background color, and a box shadow. 
 The chatbot window is displayed only when the  showChatbot  ref is true. The visibility of the chatbot window is toggled using the  toggleChatbot  function when the chatbot icon is clicked. 
 Conclusion 
 In this tutorial, we have learned how to create a chatbot in a Nuxt.js application using the Vue.js Composition API. We have created a chatbot component that can be displayed in a chatbot window. We have also created a chatbot icon that can be clicked to toggle the visibility of the chatbot window. 
 We have used the Vue.js Composition API to define the chatbot component and the chatbot icon. We have also used the Vue.js Composition API to define the state and behavior of the chatbot window. 
 We have styled the chatbot icon and