import type { StorybookConfig } from '@storybook/vue3-vite';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { mergeConfig } = require('vite');

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/vue3-vite',
        options: {},
    },

    async viteFinal(config) {
        return mergeConfig(config, {
            css: {
                postcss: null,
                preprocessorOptions: {
                    scss: {
                        additionalData: `
                            @import "${path.resolve(__dirname, '../src/assets/scss/global')}";
                        `,
                    },
                },
            },
        });
    },
};
export default config;
