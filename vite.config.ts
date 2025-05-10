/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  test: {
    environment: 'jsdom',
    globals: true
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // 你的组件入口文件
      name: 'YourComponentLib',
      fileName: (format) => `your-lib.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
