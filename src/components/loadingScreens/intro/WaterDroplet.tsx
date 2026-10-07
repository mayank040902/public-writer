import { useRef } from "react";
import * as THREE from "three";

import { useFrame } from "@react-three/fiber";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";

import "@/materials/dropMaterial";
import type { DropMaterialType } from "@/materials/dropMaterial";

export default function WaterDroplet() {
    const mesh = useRef<THREE.Mesh>(null!);
    const material = useRef<DropMaterialType>(null!);

    useFrame(({ clock }) => {
        material.current.uTime = clock.elapsedTime;
    });

    useGSAP(() => {
        gsap.fromTo(
            mesh.current.position,
            {
                y: 3,
            },
            {
                y: 0,
                duration: 1.2,
                ease: "power2.in",
            }
        );

        gsap.to(material.current, {
            uStretch: 1.35,
            duration: 0.4,
            repeat: 1,
            yoyo: true,
            ease: "power2.out",
        });
    });

    return (
        <mesh ref={mesh}>
            <icosahedronGeometry args={[0.15, 6]} />

            <dropMaterial ref={material} />
        </mesh>
    );
}