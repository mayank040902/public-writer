import * as React from "react";
import { HelmetProvider } from "react-helmet-async";
import ToasterProvider from "./toaster";
import QueryProvider from "./queryProvider";
import { ThemeProvider } from "./themeProvider";

interface AppProviderProps {
    children: React.ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
    return (
        <HelmetProvider>
            <ThemeProvider>
                <QueryProvider>
                    <ToasterProvider />
                    {children}
                </QueryProvider>
            </ThemeProvider>
        </HelmetProvider>
    );
}