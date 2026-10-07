import { gsap } from "@/lib/gsap";

export function avatarAnimate(avatar: HTMLElement) {
    if (!avatar) return;

    gsap.from(avatar, {
        opacity: 0,
        y: -4,
        scale: 0.85,
        rotate: 12,
        duration: 0.6,
        ease: "power2.out",
    });
}
