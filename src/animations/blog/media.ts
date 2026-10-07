import { gsap } from "@/lib/gsap";

export function mediaAnimation(media: HTMLElement[]) {
    if (!media.length) return;

    media.forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            y: 10,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                once: true,
            },
        });
    });
}