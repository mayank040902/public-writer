import { gsap } from "@/lib/gsap";

export function revealFeeds(feeds: HTMLElement[]) {
    if (!feeds.length) return;

    feeds.forEach((feed) => {
        gsap.from(feed, {
            opacity: 0,
            y: 8,
            scale: 0.995,
            duration: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: feed,
                start: "top 92%",
                once: true,
            },
        });
    });
}