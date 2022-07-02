import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'

const path = require('path')
require('dotenv').config({
  path: path.resolve(__dirname, './env', '.env'),
})

const isProd = () => (process.env.APP_ENV == 'production' ? true : false)
const isForProd = isProd()
const buildConfig = {
  sourcemap: !isForProd,
  minify: isForProd,
}

export default defineConfig({
  plugins: [react(), eslintPlugin(), splitVendorChunkPlugin()],
  server: {
    host: true,
    port: process.env.PORT,
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.js',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/e2e/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
  envDir: 'env',
  build: {
    ...buildConfig,
  },
})
