import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STORAGE_KEYS } from "@/constant";
import type { ThemeType } from "@/type";

export function getSystemTheme(): "light" | "dark" {
    if (typeof window === "undefined") return "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export function resolveTheme(theme: ThemeType): "light" | "dark" {
    return theme === "system" ? getSystemTheme() : theme;
}

const order: ThemeType[] = ["system", "light", "dark"];

interface ThemeState {
    mode: ThemeType;
    setMode: (mode: ThemeType) => void;
    cycleMode: () => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set, get) => ({
            mode: "system",

            setMode: (mode) => set({ mode }),

            cycleMode: () => {
                const current = get().mode;
                const next = order[(order.indexOf(current) + 1) % order.length];

                set({ mode: next });
            },
        }),
        {
            name: STORAGE_KEYS.THEME,
        }
    )
);