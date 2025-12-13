import Aura from "@primeuix/themes/aura";
import { locales } from "./i18n";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    modules: [
        "@primevue/nuxt-module", 
        "@nuxtjs/tailwindcss", 
        "@nuxtjs/i18n", 
        "@nuxt/fonts", 
        "@pinia/nuxt"
    ],

    css: ["@/assets/styles/globals.css"],

    primevue: {
        options: {
            ripple: true,
            theme: {
                preset: Aura,
            },
        },

        importTheme: { from: "@/theme/theme.ts" },
    },

    fonts: {
        defaults: {
            weights: [400, 500, 600],
            styles: ["normal"],
        },
    },

    i18n: {
        locales,
        strategy: "prefix",
        langDir: "",
    },

    pinia: {
        storesDirs: ['@/stores/**']
    },

    vite: {
        plugins: [svgLoader()],
        server: {
            proxy: {
                "/api": {
                    target: process.env.API_BASE_URL || "http://localhost:5555",
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
    },

    ssr: false,
    devtools: { enabled: true },
});