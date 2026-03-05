import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { plugin, Mode } from 'vite-plugin-markdown'
import { imagetools } from 'vite-imagetools'
import vike from 'vike/plugin'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    imagetools({
      defaultDirectives: new URLSearchParams([
        ['format', 'webp'],
        ['quality', '80'],
        ['progressive', 'true'],
      ]),
    }),
    plugin({
      mode: [Mode.HTML],
      markdownIt: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }),
    vike(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  ssr: {
    noExternal: ['@berget-ai/ui'],
  },
  build: {
    sourcemap: true,
  },
  optimizeDeps: {
    include: ['vite-imagetools'],
    exclude: ['lightningcss', 'fsevents'],
  },
})
