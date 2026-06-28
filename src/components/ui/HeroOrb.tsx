'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
      
      // Slow sine wave float
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      
      // Parallax effect based on mouse (5% speed)
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 0.25, 0.05);
      meshRef.current.position.y += THREE.MathUtils.lerp(0, mouse.y * 0.25, 0.05);
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[2, 64]} scale={1.8}>
      <MeshDistortMaterial
        color="#FF4D00"
        distort={0.5}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
      />
    </Icosahedron>
  );
}

export default function HeroOrb() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable on small screens
    const checkSize = () => setIsVisible(window.innerWidth >= 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  if (!isVisible) {
    // Static fallback for mobile
    return (
      <div 
        className="absolute top-1/4 right-0 w-[80vw] h-[80vw] bg-primary rounded-full opacity-20 z-0 pointer-events-none" 
      />
    );
  }

  return (
    <div className="absolute -top-10 -right-20 w-[600px] h-[600px] z-10 pointer-events-none hidden md:block">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        {/* Warm point light */}
        <pointLight position={[10, 10, 10]} color="#FFD600" intensity={2} />
        {/* Cool fill light */}
        <pointLight position={[-10, -10, -10]} color="#FF2D78" intensity={1.5} />
        <Orb />
      </Canvas>
    </div>
  );
}
