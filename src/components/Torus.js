import React from 'react';

function Torus({color, position}) {
    return (
        <mesh position={position}>
            <torusKnotBufferGeometry args={[0.7, 0.1, 100, 100]}/>
            <meshMatcapMaterial color={color} />
        </mesh>
    );
}

export default Torus;