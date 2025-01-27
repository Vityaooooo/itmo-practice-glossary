import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/itmo-practice-glossary/' // Add this line if and rename it to your repository name if you run your app on GitHub Pages
})
