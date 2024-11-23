import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import VueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/components/index.ts'),
            name: 'belythonui',
            fileName: format => `belythonui.${format}.ts`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [
        // eslint-disable-next-line new-cap
        VueDevTools(),
        vue(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, 'src'),
            },
        ],
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern',
                additionalData: `
                @use '@/styles/shared/_variables.scss' as *;
                @use '@/styles/shared/_mixins.scss' as *;
                @use '@/styles/common/_reset.scss' as *;
                `,
            },
        },
    },
});
