import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  logLevel: 'info',
  base: './',
  resolve: {
    alias: [
      { find: '@Components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@styles', replacement: fileURLToPath(new URL('./src/assets/styles', import.meta.url)) },

    ]
  },
  server: {
    port: 4000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: './dist',
    assetsDir: './src/assets',
  }
}
)
