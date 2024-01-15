import React, { Suspense, useEffect, useState } from "react";
import { Canvas,  } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { MeshToonMaterial } from "three";

const MetalGear = ({ isMobile }) => {
  
  const metalGear = useGLTF("./metal_gear/metal_gear.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.75} groundColor="black" castShadow position={[0,10,10]}/>
      <pointLight intensity={5} position={[0, 0,0]} />
      <spotLight
        position={[20, 3, 5]}
        angle={0.12}
        penumbra={0}
        intensity={5}
        
        scale={[3]}
        shadow-mapSize={1024}
      />
      <meshToonMaterial attach="material" color={0xfffff}/>
      <primitive
        object={metalGear.scene}
        
        scale={isMobile ? 0.7 : 0.85}
        position={isMobile ? [0, -20.8, -2] : [0, -25.25, -2.5]}
        rotation={[0, 0.3, 0]}
      />
    </mesh>
  );
};
const MetalGearCanvas = () => {
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
      camera={{ position: [20, 3, 5], fov: 25, rotation:[0,0,0]}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MetalGear isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
    </div>
  );
};

export default MetalGearCanvas;
