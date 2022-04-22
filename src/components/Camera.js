import React from 'react';
import { PerspectiveCamera } from '@react-three/drei';

function Camera() {
    return (
        <PerspectiveCamera 
        makeDefault position={[-20, 20, 20]}
        fov={55}
        />
    );
}

export default Camera;