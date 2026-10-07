import * as React from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Skeleton, Stack } from "@mantine/core";

const HomePage = React.lazy(() => import("@/pages/home"));

function PageFallback() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <Stack w={400}>
                <Skeleton h={40} />
                <Skeleton h={40} />
                <Skeleton h={40} />
                <Skeleton h={40} />
            </Stack>
        </div>
    );
}

export default function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<PageFallback />}>
                        <HomePage />
                    </Suspense>
                }
            />
        </Routes>
    );
}