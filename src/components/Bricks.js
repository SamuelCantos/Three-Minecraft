import React from 'react';
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three'

function Bricks({position}) {

    const basecolor = useLoader(TextureLoader,"../bricks/basecolor.jpg") 
    const normalMap = useLoader(TextureLoader,"../bricks/normal.jpg") 
    const aoMap = useLoader(TextureLoader,"../bricks/ao.jpg") 
    const roughnessMap = useLoader(TextureLoader,"../bricks/roughness.jpg") 
    const disMap = useLoader(TextureLoader,"../bricks/displacement.png") 


    //metodos de three para agrandar la png que es pequeñita
        /*  stone.minFilter = THREE.NearestFilter
         stone.magFilter = THREE.NearestFilter */

    return (
        <mesh position={position}>
            <boxBufferGeometry args={[1, 1, 1, 120, 120, 120]} />
            <meshStandardMaterial 
            map={basecolor} 
            normalMap={normalMap}
            aoMap={aoMap}
            roughnessMap={roughnessMap}
            displacementMap={disMap}
            displacementScale={0.01}
             />
        </mesh>
    );
}

export default Bricks;

//