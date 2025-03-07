import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { plugin, Mode } from 'vite-plugin-markdown'

export default defineConfig({
  plugins: [
    react(),
    plugin({
      mode: [Mode.HTML],
      markdownIt: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('@radix-ui/react-icons') || id.includes('@radix-ui/react-slot')) {
              return 'vendor-ui';
            }
            return 'vendor';
          }
          
          // Feature chunks
          if (id.includes('src/components/ui')) {
            return 'feature-components';
          }
          if (id.includes('src/components/common')) {
            return 'feature-common';
          }
          if (id.includes('src/components/sections')) {
            return 'feature-sections';
          }
          if (id.includes('src/components/wizards')) {
            return 'feature-wizards';
          }
        },
        // Ensure CSS is extracted properly
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (ext === 'css') {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        // Optimize JS output
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    // Enable source maps for production (optional, remove if not needed)
    sourcemap: true,
    // Minify output with terser
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
  },
  optimizeDeps: {},
})
