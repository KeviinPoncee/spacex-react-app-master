import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://keviinponcee.github.io/spacex-react-app-master/",
  plugins: [react()]
})
