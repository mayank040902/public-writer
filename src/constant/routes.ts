export const ROUTES = {
    HOME: "/",

    BLOG: {
        ROOT: "/blog",
        DETAILS: "/blog/:slug",

        bySlug: (slug: string) => `/blog/${slug}`,
    },

    BOOKS: {
        ROOT: "/books",
        DETAILS: "/books/:slug",

        bySlug: (slug: string) => `/books/${slug}`,
    },

    AUTHORS: {
        ROOT: "/authors",

        PROFILE: "/authors/:username",
        TIMELINE: "/authors/:username/timeline",

        BLOGS: "/authors/:username/blogs",
        BLOG_DETAILS: "/authors/:username/blogs/:slug",

        BOOKS: "/authors/:username/books",
        BOOK_DETAILS: "/authors/:username/books/:slug",

        profile: (username: string) => `/authors/${username}`,
        timeline: (username: string) => `/authors/${username}/timeline`,

        blogs: (username: string) => `/authors/${username}/blogs`,
        blog: (username: string, slug: string) =>
            `/authors/${username}/blogs/${slug}`,

        books: (username: string) => `/authors/${username}/books`,
        book: (username: string, slug: string) =>
            `/authors/${username}/books/${slug}`,
    },

    REGISTER: "/register",

    SEARCH: "/search",
    TAGS: "/tags",
    TAG: "/tags/:slug",

    ABOUT: "/about",
    CONTACT: "/contact",

    TERMS: "/terms-of-service",
    PRIVACY: "/privacy-policy",

    NOT_FOUND: "*",
} as const;