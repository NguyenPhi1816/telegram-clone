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
            },
            colors: {
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
            },
            outlineColor: {
                primary: 'var(--color-text-primary)',
            },
            caretColor: {
                primary: 'var(--color-text-primary)',
            },
        },
    },
    plugins: [],
};
export default config;
