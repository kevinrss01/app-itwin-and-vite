import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { join } from "path";
import mkcert from "vite-plugin-mkcert";
import { setDefaultResultOrder } from "dns";

setDefaultResultOrder("verbatim");

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    mkcert({
      hosts: ["localhost"],
    }),
  ],
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: join(process.cwd(), "node_modules/$1"),
      },
    ],
  },
  server: { https: true, port: 4173, host: "localhost" },
});
