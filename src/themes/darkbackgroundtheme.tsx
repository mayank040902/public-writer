import * as React from "react";
import { motion } from "motion/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useControls } from "lamina";
import { } from "simplex-noise";
import { MeshDistortMaterial } from "three-custom-shader-material";




const DarkBackgroundTheme = () => {
    return (
        <main>
            <Canvas>
                <motion.mesh>
                    <boxGeometry />
                    <meshBasicMaterial color="hotpink" />
                </motion.mesh>
            </Canvas>
        </main>
    );
};