import { gsap } from "@/lib/gsap";

export function revealProfiles(profiles: HTMLElement[]) {
    if (!profiles.length) return;

    profiles.forEach((profile) => {
        gsap.from(profile, {
            opacity: 0,
            y: 32,
            scale: 0.985,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
                trigger: profile,
                start: "top 88%",
                once: true,
            },
        });
    });
}