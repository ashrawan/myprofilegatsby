import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, MeshDistortMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';
import ErrorBoundary from './ErrorBoundary';

const CodeSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2}>
      <MeshDistortMaterial
        color="#4299e1"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const FloatingText = ({ text, position, rotation }: { text: string, position: [number, number, number], rotation?: [number, number, number] }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Text
        fontSize={0.4}
        position={position}
        rotation={rotation}
        color="#60A5FA"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </Float>
  );
};

const Scene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <ErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            <Float
              speed={2}
              rotationIntensity={0.5}
              floatIntensity={1}
            >
              <CodeSphere />
            </Float>

            <FloatingText text="React" position={[-3, 2, 0]} />
            <FloatingText text="Node.js" position={[3, -2, 0]} />
            <FloatingText text="Spring" position={[-2, -1, 1]} />
            <FloatingText text="TypeScript" position={[2, 1, -1]} />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.5}
            />
            
            <fog attach="fog" args={['#000', 5, 15]} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default Scene;