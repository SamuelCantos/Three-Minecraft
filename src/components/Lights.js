import { Environment } from '@react-three/drei';
import React from 'react';

function Lights() {
    return (
        <>
            {/*  <pointLight position={[0, 3, 0]} 
       color={"#ff0000"}
       intensity={2.5}
       /> */}
            <directionalLight 
            position={[10, 10, 10]}
            color={"#ffffff"}
            intensity={1.4}
            />

            <Environment files={"./hdr/decor_shop_1k.hdr"}/>
            <ambientLight color={"#ffffff"} intensity={0.2} />
        </>
    );
}

export default Lights;