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
                tooltipMenu: 'var(--background-color-tooltip-menu)',
            },
            colors: {
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
                messageMetaOwn: 'var(--color-message-meta-own)',
            },
            outlineColor: {
                primary: 'var(--color-text-primary)',
                secondary: 'var(--border-color-default)',
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
                'conversation-height-w-input-bar': 'calc(100vh - 56px - 84px)',
                'conversation-height-no-input-bar': 'calc(100vh - 56px)',
                'setting-overlay-body-height': 'calc(100vh -56px)',
            },
            borderColor: {
                primary: 'var(--background-color-primary)',
                secondary: 'var(--border-color-default)',
            },
            boxShadow: {
                default:
                    '0 0.25rem 0.5rem 0.125rem var(--color-default-shadow)',
            },
            accentColor: {
                primary: 'var(--background-color-primary)',
            },
            ringOffsetColor: {
                background: 'var(--background-color)',
            },
        },
    },
    plugins: [],
};
export default config;
