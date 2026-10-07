import { gsap } from "@/lib/gsap";

interface RevealFeedPostProps {
    post: HTMLElement;
    header: HTMLElement;
    title?: HTMLElement;
    content?: HTMLElement;
    media?: HTMLElement;
    actions?: HTMLElement;
    comments?: HTMLElement;
}

export function revealPost({
    post,
    header,
    title,
    content,
    media,
    actions,
    comments,
}: RevealFeedPostProps) {
    const tl = gsap.timeline({
        defaults: {
            ease: "power2.out",
        },
    });

    // Entire card appears
    tl.from(post, {
        opacity: 0,
        y: 12,
        duration: 0.3,
    });

    // Header (avatar, username, timestamp)
    tl.from(header, {
        opacity: 0,
        y: 8,
        duration: 0.2,
    },
        "-=0.15"
    );

    // Title (optional)
    if (title) {
        tl.from(title, {
            opacity: 0,
            y: 8,
            duration: 0.2,
        },
            "-=0.1"
        );
    }

    // Text content
    if (content) {
        tl.from(content, {
            opacity: 0,
            y: 8,
            duration: 0.25,
        },
            "-=0.1"
        );
    }

    // Image / Video / Carousel
    if (media) {
        tl.from(media, {
            opacity: 0,
            scale: 0.985,
            duration: 0.35,
        },
            "-=0.1"
        );
    }

    // Like / Comment / Share
    if (actions) {
        tl.from(actions, {
            opacity: 0,
            y: 6,
            duration: 0.2,
        },
            "-=0.15"
        );
    }

    // Comment preview
    if (comments) {
        tl.from(comments, {
            opacity: 0,
            y: 6,
            duration: 0.2,
        },
            "-=0.1"
        );
    }

    return tl;
}