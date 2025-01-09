import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import markdown from 'vite-plugin-markdown'

export default defineConfig({
  plugins: [
    react(),
    markdown()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {},
})
