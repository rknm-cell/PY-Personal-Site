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

const MetalGear = ({ isMobile }) => {
  const metalGear = useGLTF("./metal_gear/metal_gear.gltf");

  useEffect(() => {
    const gradient = new Uint8Array([
      0,
      0,
      0, // Black
      0,
      255,
      0, // Green
      255,
      255,
      255, // White
    ]);
    const texture = new DataTexture(gradient, 3, 5, RGBAFormat);
    texture.magFilter = NearestFilter;
    texture.needsUpdate = true;
    if (metalGear) {
      metalGear.scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new MeshToonMaterial({ gradientMap: texture });
        }
      });
    }
  }, [metalGear]);

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
        object={metalGear.scene}
        scale={isMobile ? 0.7 : 0.5}
        position={isMobile ? [0, -20.8, -2] : [0, -14.25, -2.5]}
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
        camera={{ position: [20, 3, 5], fov: 25, rotation: [0, 0, 0] }}
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
