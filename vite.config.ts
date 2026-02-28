import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";
import { VitePluginRadar } from "vite-plugin-radar";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    cloudflare(), 
    VitePluginRadar({
      analytics: {
        id: "G-ZB7EHL8EEM",
      },
    })
  ],
})