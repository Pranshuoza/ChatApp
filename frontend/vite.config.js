import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import daisyui from 'daisyui'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    {
      // Use Tailwind as a PostCSS plugin
      css: {
        postcss: {
          plugins: [tailwindcss(),daisyui],
        },
      },
    },
  ],
})
