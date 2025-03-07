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
            // React och relaterade bibliotek
            if (id.includes('react-dom')) {
              return 'vendor-react-dom';
            }
            if (id.includes('react-router')) {
              return 'vendor-react-router';
            }
            if (id.includes('react')) {
              return 'vendor-react-core';
            }
            
            // UI-bibliotek
            if (id.includes('@radix-ui')) {
              return 'vendor-radix';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            
            // Animationsbibliotek
            if (id.includes('framer-motion')) {
              return 'vendor-animations';
            }
            
            // Formulärbibliotek
            if (id.includes('react-hook-form') || id.includes('zod')) {
              return 'vendor-forms';
            }
            
            // Övriga stora bibliotek
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'vendor-i18n';
            }
            if (id.includes('recharts') || id.includes('d3')) {
              return 'vendor-charts';
            }
            
            // Övriga mindre bibliotek
            return 'vendor-misc';
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
