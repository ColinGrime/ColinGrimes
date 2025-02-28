import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    root: "./",
    plugins: [react(), tailwindcss()],
    build: {
        outDir: "dist/client",
        assetsDir: "assets",
        emptyOutDir: true,
    },
});
