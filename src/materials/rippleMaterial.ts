import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

import vertexShader from "@/shaders/ripples.vert";
import fragmentShader from "@/shaders/ripples.frag";


export const RippleMaterial = shaderMaterial(
    {
        uTime: 0,
        uResolution: new THREE.Vector2(1, 1),

        uImpact: new THREE.Vector2(0.5, 0.5),

        // No ripple until an impact occurs
        uImpactTime: -1,
    },
    vertexShader,
    fragmentShader
);

extend({ RippleMaterial });