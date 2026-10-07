import { gsap } from "@/lib/gsap";

export function interactionsAnimation(actions: HTMLElement[]) {
    if (!actions.length) return;

    actions.forEach((action) => {
        gsap.from(action, {
            opacity: 0,
            y: 12,
            scale: 0.96,
            duration: 0.35,
            ease: "power2.out",
            scrollTrigger: {
                trigger: action,
                start: "top 90%",
                once: true,
            },
        });
    });
}