import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin, type ViteDevServer } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

/** Keep /license for the SPA alias; macOS would otherwise serve the root LICENSE file. */
function spaLicenseAlias(): Plugin {
  const rewrite = (server: { middlewares: ViteDevServer['middlewares'] }) => {
    server.middlewares.use((req, _res, next) => {
      const url = (req.url || '').split('?')[0];
      if (url.toLowerCase() === '/license') {
        req.url = '/index.html';
      }
      next();
    });
  };
  return {
    name: 'spa-license-alias',
    configureServer: rewrite,
    configurePreviewServer: rewrite,
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [spaLicenseAlias(), inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    watch: {
      // macOS file-descriptor limits often break native FSEvents watchers in this
      // environment; polling keeps HMR reliable without raising ulimit.
      usePolling: true,
      interval: 300,
    },
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/admin": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/uploads": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
