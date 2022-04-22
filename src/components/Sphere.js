import React from 'react';




const Sphere = ({color, position}) => {

    return (
        <mesh position={position}>
            <sphereGeometry args={[1]} />
            <meshMatcapMaterial color={color} wireframe  />
        </mesh>
    )
}

export default Sphere;

//mesh representa una forma, en three todos los objetos representan una forma 

// <sphereGeometry /> ahi indicamos la forma que queremos, en este caso es una esfera

//<meshStandardMaterial /> aqui indicamos el material de la forma, en este caso standard