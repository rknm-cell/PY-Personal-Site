import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import {
  DataTexture,
  RGBAFormat,
  MeshToonMaterial,
  NearestFilter,
  Vector3,
} from "three";
import { TextureLoader } from "three";

const PayPhone = ({ isMobile }) => {
  const payphone = useGLTF("./payphone_obj/payphone.gltf");
  const [colorMap, displacementMap, normalMap, ] = useLoader(TextureLoader, [
    './payphone_obj/payphone_diffuse.png',
    './payphone_obj/payphone_ao.tga',
    './payphone_obj/payphone_normal.tga',

  ])
  // const texture = useLoader(TextureLoader, payphone_gloss);
  
    
  return (
    <mesh>
      <hemisphereLight
        intensity={0.75}
        groundColor="black"
        position={[0, 10, 10]}
      />
      <pointLight intensity={5} position={[0, 0, 0]} />
      <spotLight
        position={[20, 3, 5]}
        angle={0.12}
        penumbra={0}
        intensity={5}
        castShadow
        scale={[3]}
        shadow-mapSize={1024}
      />
      <primitive
        object={payphone.scene}
        scale={isMobile ? 0.7 : 0.8}
        position={isMobile ? [0, 0, -2] : [0, -2.7, -1]}
        rotation={[0, 0.3, 0]}
      />
      <meshStandardMaterial attach="material" map={colorMap} normalMap={normalMap} />
    </mesh>
  );
};
const PayPhoneCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 508px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div id="canvas-container" className="w-full h-screen">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25, rotation: [0, 0, 0] }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <PayPhone isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default PayPhoneCanvas;
