import Aura from '@primeuix/themes/aura'
import { locales } from './i18n';

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    modules: [
        "@primevue/nuxt-module",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/i18n",
        "@nuxt/fonts"
    ],

    css: ['@/assets/styles/globals.css'],

    primevue: {
        options: {
            ripple: true,
            theme: {
                preset: Aura,
            }
        },

        importTheme: { from: '@/theme/theme.ts' },
    },

    fonts: {
        defaults: {
            weights: [400, 500],
            styles: ['normal'],
        },
    },

    i18n: {
        locales,
        strategy: 'prefix'
    },

    devtools: { enabled: true },
});
