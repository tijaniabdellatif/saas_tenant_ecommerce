import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    optimizeDeps: {
        include: ["tailwind-config"],
    },
    plugins: [
        laravel({
          input: ['resources/css/public.css', 'resources/css/admin.css', 'resources/css/tenant.css', 'resources/js/app.tsx'],
            ssr: "resources/js/ssr.tsx",
            refresh: true,
        }),
        react(),
    ],
});