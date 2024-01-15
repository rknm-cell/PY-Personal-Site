import React, { useRef } from 'react';
import { Canvas, useThree, extend, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FogExp2, PointLight, PerspectiveCamera, MeshStandardMaterial, Group } from 'three';

extend({ OrbitControls });

const Scene = () => {
  const { scene, camera, gl } = useThree();
  const controls = useRef();
  const group = useRef();
  

  scene.fog = new FogExp2(0x11151c, 0.15);

  const pointlight = new PointLight(0x85ccb8, 7.5, 20);
  pointlight.position.set(0, 3, 2);
  group.current.add(pointlight);

  const pointlight2 = new PointLight(0x9f85cc, 7.5, 20);
  pointlight2.position.set(0, 3, 2);
  group.current.add(pointlight2);

  camera.position.z = 10;
  group.current.add(camera);

  const material1 = new MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0,
  });

  useFrame(() => controls.current.update());

  return (
    <group ref={group}>
      <orbitControls ref={controls} args={[camera, gl.domElement]} />
      {/* Add your 3D objects here */}
    </group>
  );
};

const LandingPage = () => (
  <Canvas>
    <Scene />
  </Canvas>
);

export default LandingPage;