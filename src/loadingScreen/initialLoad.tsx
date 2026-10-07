import { Canvas } from "@react-three/fiber";

import RipplePlane from "@/components/loadingScreens/intro/Ripples";
import WaterDroplet from "@/components/loadingScreens/intro/WaterDroplet";

import { useIntroAnimation } from "@/animations/loadinScreen/intro";
import { useGSAP } from "@/lib/gsap";

import { useRef } from "react";

export default function IntroLoadingScreen() {
    const rippleRef = useRef<any>(null);
    const dropRef = useRef<any>(null);

    const timeline = useIntroAnimation();

    useGSAP(() => {
        console.log("dropRef:", dropRef.current);
        console.log("rippleRef:", rippleRef.current);

        if (!dropRef.current || !rippleRef.current) return;

        timeline
            .set(dropRef.current.position, {
                y: 3,
            })
            .to(dropRef.current.position, {
                y: 0,
                duration: 1.2,
                ease: "power2.in",
            })
            .call(() => {
                rippleRef.current.trigger();
            });

        timeline.play();
    }, []);
    return (
        <Canvas
            camera={{
                position: [0, 5, 8],
                fov: 35,
            }}
        >
            <RipplePlane ref={rippleRef} />

            <WaterDroplet ref={dropRef} />
        </Canvas>
    );
}