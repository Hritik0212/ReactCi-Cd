import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

// https://vite.dev/config/



export default defineConfig({
  plugins: [react()],
  tests: {
    globals: true,
    environment: 'jsdom',
    setupfiles: './src/setupTests.js',
    exclude: [... configDefaults.exclude, 'e2e/*'],
  },
})