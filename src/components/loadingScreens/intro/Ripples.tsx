import { useRef, forwardRef, useImperativeHandle } from "react";
import { useFrame, useThree } from "@react-three/fiber";

import "@/materials/rippleMaterial";

import type { RippleMaterialType } from "@/materials/rippleMaterial";

const RipplePlane = forwardRef((_, ref) => {
    const material = useRef<RippleMaterialType>(null!);

    const { size } = useThree();

    useFrame(({ clock }) => {
        if (!material.current) return;

        material.current.uTime = clock.elapsedTime;

        material.current.uResolution.set(
            size.width,
            size.height
        );
    });

    useImperativeHandle(ref, () => ({
        impact(x: number, y: number) {
            material.current.uImpact.set(x, y);
            material.current.uImpactTime = material.current.uTime;
        },
    }));

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[20, 20, 256, 256]} />

            <rippleMaterial ref={material} />
        </mesh>
    );
});

RipplePlane.displayName = "RipplePlane";

export default RipplePlane;