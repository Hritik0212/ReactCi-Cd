import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configdefaults } from 'vitest/config'

// https://vite.dev/config/



export default define config({
  plugins: [react()],
  tests: {
    globals: true,
    environment: 'jsdom',
    setupfiles: './src/setupTests.js',
    exclude: [... configdefaults.exclude, 'e2e/*'],
  },
})