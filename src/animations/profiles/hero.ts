import { gsap } from "@/lib/gsap";

interface HeroProps {
    container?: HTMLElement;
    heading: HTMLElement;
    description: HTMLElement;
    searchSection: HTMLElement;
    filters: HTMLElement;
}

export function animateHero({
    container,
    heading,
    description,
    searchSection,
    filters,
}: HeroProps) {
    const tl = gsap.timeline({
        defaults: {
            ease: "power3.out",
        },
    });

    if (container) {
        tl.from(container, {
            opacity: 0,
            duration: 0.3,
        });
    }

    tl.from(heading, {
        opacity: 0,
        y: 32,
        duration: 0.7,
    }, container ? "-=0.1" : 0
    );

    tl.from(description, {
        opacity: 0,
        y: 24,
        duration: 0.55,
    }, "-=0.45"
    );

    tl.from(searchSection, {
        opacity: 0,
        y: 20,
        scale: 0.98,
        duration: 0.45,
    }, "-=0.35"
    );

    tl.from(filters, {
        opacity: 0,
        y: 16,
        duration: 0.4,
    }, "-=0.25"
    );

    return tl;
}