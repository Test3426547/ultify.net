// plugins/axios.js
import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
  const baseURL = process.env.NODE_ENV === 'production'
    ? 'https://secret-shore-04461-19d2043c008b.herokuapp.com/https://mcdonaldsz.com/'
    : 'http://localhost:3000/'

  const axiosInstance = axios.create({
    baseURL: 'https://secret-shore-04461-19d2043c008b.herokuapp.com/https://api.mcdonaldsz.com',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  // Inject axios to the context as $axios
  nuxtApp.provide('axios', axiosInstance)
})