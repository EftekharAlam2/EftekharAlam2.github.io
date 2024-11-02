import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/eftekharalam2.github.io/',
  plugins: [
    react(),
    VitePWA({
      manifest: 'manifest.json',
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Md Eftekharul Alam',
        short_name: 'Eftekhar',
        description: 'A showcase of my projects',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        start_url: '/eftekharalam2.github.io/',
        scope: '/eftekharalam2.github.io/', 
        icons: [
          {
            src: '/eftekharalam2.github.io/icon.png',
            sizes: '511x511',
            type: 'image/png'
          },
          {
            src: '/eftekharalam2.github.io/icon.png',
            sizes: '511x511',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
