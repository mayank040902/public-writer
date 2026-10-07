export interface NavLink {
    label: string;
    href: string;
    icon?: string;
}

export const NAVBAR_LINKS: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Books", href: "/books" },
    { label: "Authors", href: "/authors" },
    { label: "Register", href: "/register" },
];

export const FOOTER_LINKS: NavLink[] = [
    { label: "About", href: "/about" },
    { label: "Terms", href: "/terms-of-service" },
    { label: "Privacy", href: "/privacy-policy" },
];