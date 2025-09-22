import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 5713,
    host: "172.16.56.11", // hoặc host phù hợp của bạn
    allowedHosts: ["pre-thuthapdiachi.vnpost.vn"],
  },
});

