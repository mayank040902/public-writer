import * as React from 'react';
import { resolveTheme, useThemeStore } from '@/store/themeStore';
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const mode = useThemeStore((state) => state.mode);

    React.useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const apply = () => {
            const resolved = mode === 'system' ? (media.matches ? 'dark' : 'light') : mode;
            document.documentElement.classList.toggle('dark', resolved === 'dark');
            const meta = document.querySelector('meta[name="theme-color"]');
            meta?.setAttribute('content', resolved === 'dark' ? '#161618' : '#ffffff');
        };
        apply();
        media.addEventListener('change', apply);
        return () => media.removeEventListener('change', apply);
    }, [mode]);

    return <>
        <MantineProvider forceColorScheme={resolveTheme(mode)}>
            {children}
        </MantineProvider></>;
}
