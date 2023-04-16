import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath } from 'url'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const proxyTarget = process.env.VITE_PROXY_TARGET

  return {
    plugins: [vue()],
    logLevel: 'info',
    base: './',
    resolve: {
      alias: [
        { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        { find: '@Components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
        { find: '@Views', replacement: fileURLToPath(new URL('./src/views', import.meta.url)) },
        { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
      ]
    },
    server: {
      port: 4000,
      open: true,
      cors: true,
      strictPort: true,
      proxy: {
        '/api': {
          target: proxyTarget,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
      build: {
        outDir: './dist',
        assetsDir: './src',
      }
    }
  }
})

