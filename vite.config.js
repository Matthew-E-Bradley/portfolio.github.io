

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  // 1. Base goes here (outside of plugins)
  // Use '/' for your custom domain (matthew-bradley.com)
  base: '/', 

  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      // This allows you to use '@' to refer to your 'src' folder
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
