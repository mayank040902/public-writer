// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//     Environment,
//     MeshDistortMaterial,
// } from "@react-three/drei";
// import {
//     Bloom,
//     EffectComposer,
// } from "@react-three/postprocessing";
// import { useRef } from "react";
// import * as THREE from "three";

// function Blob() {
//     const meshRef = useRef<THREE.Mesh>(null);

//     useFrame((_, delta) => {
//         if (!meshRef.current) return;

//         meshRef.current.rotation.x += delta * 0.25;
//         meshRef.current.rotation.y += delta * 0.4;

//         meshRef.current.position.y =
//             Math.sin(performance.now() * 0.001) * 0.15;
//     });

//     return (
//         <mesh ref={meshRef}>
//             <icosahedronGeometry args={[1.4, 64]} />

//             <MeshDistortMaterial
//                 color="#7c3aed"
//                 speed={2}
//                 distort={0.35}
//                 roughness={0}
//                 metalness={0.8}
//             />
//         </mesh>
//     );
// }

// export default function DarkBackgroundTheme() {
//     return (
//         <div
//             style={{
//                 position: "fixed",
//                 inset: 0,
//                 width: "100vw",
//                 height: "100vh",
//                 overflow: "hidden",
//                 background: "#050505",
//             }}
//         >
//             <Canvas
//                 shadows
//                 dpr={[1, 2]}
//                 camera={{
//                     position: [0, 0, 5],
//                     fov: 50,
//                 }}
//                 gl={{
//                     antialias: true,
//                     alpha: false,
//                 }}
//             >
//                 <color attach="background" args={["#050505"]} />

//                 <ambientLight intensity={0.5} />

//                 <directionalLight
//                     position={[5, 5, 5]}
//                     intensity={2}
//                     color="#ffffff"
//                 />

//                 <pointLight
//                     position={[-4, 2, 4]}
//                     color="#7c3aed"
//                     intensity={25}
//                 />

//                 <pointLight
//                     position={[4, -2, -4]}
//                     color="#00d4ff"
//                     intensity={15}
//                 />

//                 <Blob />

//                 <Environment preset="studio" />

//                 <EffectComposer>
//                     <Bloom
//                         mipmapBlur
//                         intensity={1}
//                         luminanceThreshold={0.2}
//                     />
//                 </EffectComposer>
//             </Canvas>
//         </div>
//     );
// }

import IntroLoadingScreen from "@/loadingScreen/initialLoad";

export default function Home() {
    return (
        <main
            style={{
                width: "100vw",
                height: "100vh",
            }}
        >
            <IntroLoadingScreen />
        </main>
    );
}