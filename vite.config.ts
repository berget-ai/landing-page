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
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['@radix-ui/react-icons', '@radix-ui/react-slot'],
          
          // Feature chunks
          'feature-components': [/src\/components\/ui/],
          'feature-common': [/src\/components\/common/],
          'feature-sections': [/src\/components\/sections/],
          
          // Dynamically split chunks for larger modules
          'feature-wizards': [/src\/components\/wizards/],
        },
        // Optimize chunk size
        chunkSizeWarningLimit: 800,
        // Ensure CSS is extracted properly
        assetFileNames: (assetInfo) => {
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
    // Minify output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {},
})
