import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Md Eftekharul Alam',
        short_name: 'Eftekhar',
        description: 'A showcase of my projects',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'public/icon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'public/icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
