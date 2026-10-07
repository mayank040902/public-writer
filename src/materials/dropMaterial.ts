import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

import vertexShader from "@/shaders/drop.vert";
import fragmentShader from "@/shaders/drop.frag";

export const DropMaterial = shaderMaterial(
    {
        uTime: 0,
        uStretch: 1.0,
        uColor: new THREE.Color("#dff6ff"),
        uOpacity: 1.0,
    },
    vertexShader,
    fragmentShader
);

extend({ DropMaterial });

export type DropMaterialType = THREE.ShaderMaterial & {
    uTime: number;
    uStretch: number;
    uColor: THREE.Color;
    uOpacity: number;
};