import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/axios@latest/dist/axios.min.js'
    script.onload = () => {
      const axiosInstance = axios.create({
        baseURL: process.env.NODE_ENV === 'production'
          ? 'https://secret-shore-04461-19d2043c008b.herokuapp.com/https://mcdonaldsz.com/'
          : 'http://localhost:3000/'
      })

      nuxtApp.provide('axios', axiosInstance)
      resolve()
    }
    script.onerror = reject
    document.head.appendChild(script)
  })
})
