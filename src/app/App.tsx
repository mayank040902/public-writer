import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";
import AppProvider from "@/provider/AppProvider";

import { destroyLenis, initLenis } from "@/lib/lenis";


export default function App() {
    useEffect(() => {
        initLenis();

        return () => {
            destroyLenis();
        };
    }, []);
    return (
        <>
            <BrowserRouter>
                <AppProvider>
                    <AppRoutes />
                </AppProvider>
            </BrowserRouter>
        </>
    )
}