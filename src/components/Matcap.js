import React from 'react';
import {Canvas, useLoader} from "@react-three/fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader';

function Matcap({position}) {

    const matcap = useLoader(TextureLoader,"../matcaps/matcap2.png")

    return (
        <mesh position={position}>
            <torusKnotGeometry args={[0.7, 0.1, 100, 100]} />
            <meshMatcapMaterial matcap={matcap}/>
        </mesh>
    );
}

export default Matcap;