'use client';
import { DEFAULT_THEME } from '@/utils/vars';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { FC, ReactNode } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

interface IAppProvider {
    children: ReactNode;
}

const AppProviders: FC<IAppProvider> = ({ children }) => {
    return (
        <NextThemeProvider
            disableTransitionOnChange
            enableColorScheme
            defaultTheme={DEFAULT_THEME}
            enableSystem
            attribute="class"
            themes={['dark', 'light']}
        >
            <ProgressBar height="4px" color="#0084ff" options={{ showSpinner: false }} shallowRouting />
            {children}
        </NextThemeProvider>
    );
};

export default AppProviders;
