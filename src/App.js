import React, { Suspense } from 'react';
import Sphere from './components/Sphere';
import Torus from './components/Torus';
// threejs
import { OrbitControls, Stars } from '@react-three/drei'
import Matcap from './components/Matcap';
import Bricks from './components/Bricks';
import { Canvas } from '@react-three/fiber';
import Camera from './components/Camera';
import Lights from './components/Lights';
import Minecraft from './components/Minecraft';

function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Canvas>
        <Camera/>
        <Lights/>
        <color attach='background' args={["#383838"]} />
        <Suspense fallback={null}>
          {/* <Matcap position={[-3, 0, 0]}/> */}
          {/* <Bricks position={[0, 0, 0]} /> */}
          <Minecraft/>
        </Suspense>
        {/*        <Sphere color={"#FF6363"} position={[3, 0, 0]} />
        <Torus color={"#E9D5DA"} position={[6, 0, 0]} /> */}
        <OrbitControls autoRotate target={[1, 10, 0]} />
        <Stars count={3000} factor={4} />
      </Canvas>

    </div>
  );
}

export default App;
