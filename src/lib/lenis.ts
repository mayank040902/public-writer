import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";

let lenis: Lenis | null = null;

const update = (time: number) => {
    lenis?.raf(time * 1000);
};

export function initLenis() {
    if (lenis) return lenis;

    lenis = new Lenis({
        autoRaf: false,
        smoothWheel: true,
        syncTouch: true,
        // lerp: 0.15, using default lerp value (0.1) gives more snappier feeling
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return lenis;
}

export function getLenis() {
    return lenis;
}

export function destroyLenis() {
    if (!lenis) return;

    gsap.ticker.remove(update);

    lenis.destroy();
    lenis = null;
}