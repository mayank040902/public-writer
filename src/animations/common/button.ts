import { gsap } from "@/lib/gsap";

export function buttonAnimate(button: HTMLElement) {
    if (!button) return;

    gsap.from(button, {
        opacity: 0,
        scale: 0.95,
        y: 8,
        duration: 0.4,
        ease: "power2.out",
    });
}