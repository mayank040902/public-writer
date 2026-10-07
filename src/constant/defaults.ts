// import type { Theme } from "@/types/theme";

export const DEFAULTS = {
    //   THEME: "system" as Theme,

    LANGUAGE: "en",
    LOCALE: "en-US",
    TIMEZONE: "UTC",

    DATE_FORMAT: "dd MMM yyyy",
    TIME_FORMAT: "HH:mm",
    DATE_TIME_FORMAT: "dd MMM yyyy HH:mm",

    SEARCH_DEBOUNCE: 300,

    REQUEST_TIMEOUT: 30_000,

    CACHE_TIME: 5 * 60 * 1000,
    STALE_TIME: 60 * 1000,
} as const;