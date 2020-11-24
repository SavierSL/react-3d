import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Model = () => {
  const Controls = () => {
    const controls = useRef();
    const { camera, gl } = useThree();
    useFrame(() => {
      controls.current.update();
    });
    return (
      <orbitControls
        ref={controls}
        autoRotate
        args={[camera, gl.domElement]}
      ></orbitControls>
    );
  };

  return (
    <>
      <Canvas>
        <mesh>
          <Controls />
          <boxBufferGeometry
            attach="geometry"
            args={(1, 1, 1)}
          ></boxBufferGeometry>
          <meshBasicMaterial
            wireframe
            attach="material"
            color="white"
          ></meshBasicMaterial>
        </mesh>
      </Canvas>
    </>
  );
};

export default Model;
