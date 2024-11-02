import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"Md Eftekharul Alam",
    short_name:"Eftekhar",
    description:"A showcase of my projects",
    icons:[{
      src: '/icon.png',
      sizes:'511x511',
      type:'image/png',
      purpose: 'any'
    }
  ],
  theme_color: '#ffffff',
  background_color: '#ffffff',
  display:"standalone",
  scope: ".",
  start_url:".",
  orientation:'portrait'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA(manifestForPlugIn)
  ],
})
