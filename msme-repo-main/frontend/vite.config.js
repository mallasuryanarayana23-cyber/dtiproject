import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/static/',
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://dtiproject-2.onrender.com',
        changeOrigin: true,
      },
      '/media': {
        target: 'https://dtiproject-2.onrender.com',
        changeOrigin: true,
      },
    },
  },
})