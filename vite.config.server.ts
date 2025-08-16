import { defineConfig } from "vite";
import path from "path";

// Server build configuration for Node SSR
export default defineConfig({
  build: {
    ssr: path.resolve(__dirname, "server/node-build.ts"), // entry for SSR
    outDir: "dist/server", // output directory
    target: "node22",
    rollupOptions: {
      external: [
        // Node.js built-ins
        "fs",
        "path",
        "url",
        "http",
        "https",
        "os",
        "crypto",
        "stream",
        "util",
        "events",
        "buffer",
        "querystring",
        "child_process",
        // external dependencies not to bundle
        "express",
        "cors",
      ],
      output: {
        format: "esm", // output as ES module
        entryFileNames: "server.mjs", // generated server file
      },
    },
    minify: false,
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
