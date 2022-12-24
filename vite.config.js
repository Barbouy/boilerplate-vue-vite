import { defineConfig, loadEnv } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"

export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""))

  return defineConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "core-api": path.resolve(__dirname, "./src/providers/core-api")
      },
    },
    define: { "process.env": process.env },
    server: {
      host: true,
      port: 8079
    },
    plugins: [vue()]
  })
}
