import { ThreeElement } from "@react-three/fiber";
import { RippleMaterial } from "@/materials/RippleMaterial";
import { DropMaterial } from "@/materials/dropMaterial";

declare module "@react-three/fiber" {
    interface ThreeElements {
        rippleMaterial: ThreeElement<typeof RippleMaterial>;
    }
}

declare module "@react-three/fiber" {
    interface ThreeElements {
        dropMaterial: ReactThreeFiber.Object3DNode<
            typeof DropMaterial,
            typeof DropMaterial
        >;
    }
}
