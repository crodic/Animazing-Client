import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import AppProviders from '@/components/AppProviders';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: 'Animazing Artwork | Home',
    description: 'The website by Crodic Crystal',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
                <AppProviders>
                    <div className='mb-20 md:mb-8'>
                        {children}
                    </div>
                </AppProviders>
            </body>
        </html>
    );
}
