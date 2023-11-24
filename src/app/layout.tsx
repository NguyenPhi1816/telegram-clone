import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import Sidebar from '@/components/Sidebar/Sidebar';
import RightSidebar from '@/components/Sidebar/RightSidebar';

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
            </head>
            <body
                className={`${inter.className} flex w-full h-full overflow-hidden`}
            >
                <Sidebar />
                {children}
                <div
                    id="root"
                    // className="fixed top-0 left-0 w-[100vw] h-[100vh]"
                ></div>
            </body>
        </html>
    );
}
