import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TP5_PedidoDeEmpanadas/',
  "homepage": "https://tiagoghel.github.io/TP5_PedidoDeEmpanadas.git"
})
