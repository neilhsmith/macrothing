import path from "path"
import react from "@vitejs/plugin-react-swc"
import mkcert from "vite-plugin-mkcert"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    port: 3060,
    // https: {

    // }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
