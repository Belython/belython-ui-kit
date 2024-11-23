// / <reference types="vitest" />

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    // eslint-disable-next-line new-cap
    plugins: [Vue()],
    test: {
        globals: true,
        environment: 'jsdom',
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, 'src'),
            },
        ],
    },
});
