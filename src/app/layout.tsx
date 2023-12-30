import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import Sidebar from '@/components/Sidebar/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Telegram',
    description:
        'This is the clone website of Telegram. Created By Nguyen Quoc Kha Phi. For the educational purposes.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="/favicon.svg"
                    type="image/svg+xml"
                ></link>
                <meta
                    http-equiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                />
            </head>
            <body
                id="root"
                className={`${inter.className} flex w-[100vw] h-[100vh] overflow-hidden`}
            >
                {children}
            </body>
        </html>
    );
}
