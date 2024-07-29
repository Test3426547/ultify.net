<template>
    <div class="chatbot-container">
      <div class="chatbot-header">
        <h3>Chat with us!</h3>
        <button @click="$emit('close')" class="close-btn">x</button>
      </div>
      <div class="chatbot-messages" ref="chatMessages">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender]">
          <p>{{ message.text }}</p>
        </div>
      </div>
      <div class="chatbot-input">
        <input v-model="userMessage" @keypress.enter="sendMessage" placeholder="Type a message..." />
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useNuxtApp } from '#app'
  
  const userMessage = ref('')
  const messages = ref([{ sender: 'bot', text: 'Hi there! How can I help you?' }])
  const chatMessages = ref(null)
  const { $axios } = useNuxtApp()
  
  onMounted(() => {
    scrollToBottom()
  })
  
  function scrollToBottom() {
    chatMessages.value.scrollTop = chatMessages.value.scrollHeight
  }
  
  async function sendMessage() {
    if (userMessage.value.trim() === '') return
  
    messages.value.push({ sender: 'user', text: userMessage.value })
    const userMessageCopy = userMessage.value
    userMessage.value = ''
  
    try {
      const response = await $axios.post('https://secret-shore-04461-19d2043c008b.herokuapp.com/https://api.mcdonaldsz.com/chat', { message: userMessageCopy })
      messages.value.push({ sender: 'bot', text: response.data.reply })
    } catch (error) {
      console.error('Error sending message:', error)
      messages.value.push({ sender: 'bot', text: 'Oops! Something went wrong.' })
    }
  
    scrollToBottom()
  }
  </script>
  
  <style scoped>
  .chatbot-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .chatbot-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
  
  .chatbot-messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  .message {
    padding: 10px;
    margin: 5px 0;
    border-radius: 10px;
    max-width: 80%;
  }
  
  .message.user {
    background-color: #007bff;
    color: white;
    align-self: flex-end;
  }
  
  .message.bot {
    background-color: #e9ecef;
    color: black;
    align-self: flex-start;
  }
  
  .chatbot-input {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ccc;
  }
  
  .chatbot-input input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .chatbot-input button {
    padding: 10px;
    margin-left: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  