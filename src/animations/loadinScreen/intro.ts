import { useMemo } from "react";
import { gsap } from "@/lib/gsap";

export function useIntroAnimation(): GSAPTimeline {
    return useMemo(
        () =>
            gsap.timeline({
                paused: true,
                defaults: {
                    duration: 1,
                    ease: "power3.inOut",
                },
            }),
        []
    );
}