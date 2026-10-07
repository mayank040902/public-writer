export const API = {
    BASE_URL: import.meta.env.BASE_URL,

    VERSION: "v1",
    TIMEOUT: 30_000,
} as const;

export const QUERY_KEYS = {
    BLOGS: ["blogs"] as const,
    BLOG: (slug: string) => ["blog", slug] as const,
    RELATED_BLOGS: (slug: string) => ["blog", slug, "related"] as const,

    BOOKS: ["books"] as const,
    BOOK: (slug: string) => ["book", slug] as const,
    RELATED_BOOKS: (slug: string) => ["book", slug, "related"] as const,

    AUTHORS: ["authors"] as const,
    AUTHOR: (username: string) => ["author", username] as const,
    AUTHOR_BLOGS: (username: string) =>
        ["author", username, "blogs"] as const,
    AUTHOR_BOOKS: (username: string) =>
        ["author", username, "books"] as const,
    AUTHOR_TIMELINE: (username: string) =>
        ["author", username, "timeline"] as const,
    AUTHOR_AFFILIATES: (username: string) =>
        ["author", username, "affiliates"] as const,

    SEARCH: (query: string) => ["search", query] as const,
    TAG: (slug: string) => ["tag", slug] as const,
} as const;