import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundColor: {
                theme: 'var(--theme-background-color)',
                background: 'var(--background-color)',
                hover: 'var(--background-color-hover)',
                primary: 'var(--background-color-primary)',
            },
            colors: {
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
                messageMetaOwn: 'var(--color-message-meta-own)',
            },
            outlineColor: {
                primary: 'var(--color-text-primary)',
            },
            caretColor: {
                primary: 'var(--color-text-primary)',
            },
            backgroundImage: {
                'background-pattern': "url('/telegram_background.png')",
            },
            width: {
                'chat-item-info-width': 'calc(100% - 54px - 8px)',
            },
            height: {
                'conversation-max-height': 'calc(100vh - 56px - 84px)',
            },
            borderColor: {
                secondary: 'var(--background-color-hover)',
            },
        },
    },
    plugins: [],
};
export default config;
