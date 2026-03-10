import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rodericnavarro/',
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    dirStyle: 'nested', // generates /about/index.html instead of /about.html
  }
})
