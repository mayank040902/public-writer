import { gsap, ScrollTrigger } from "@/lib/gsap";

export function revealComments(comments: HTMLElement[]) {
    if (!comments.length) return;

    ScrollTrigger.batch(comments, {
        start: "top 90%",
        once: true,
        onEnter: (elements) => {
            gsap.from(elements, {
                opacity: 0,
                y: 16,
                scale: 0.98,
                duration: 0.45,
                stagger: 0.08,
                ease: "power2.out",
            });
        },
    });
}