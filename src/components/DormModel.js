import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// This is a PLACEHOLDER component with basic geometry
// Replace this with actual GLB/GLTF models exported from Siemens NX
function DormModel({ dormId }) {
  const groupRef = useRef();
  
  // Gentle rotation for demo purposes
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  // Basic room representation - VERY ROUGH DRAFT
  return (
    <group ref={groupRef}>
      {/* Floor */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#d4c4a8" />
      </mesh>
      
      {/* Walls */}
      <mesh position={[0, 2, -3]} receiveShadow>
        <boxGeometry args={[8, 4, 0.1]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
      
      <mesh position={[-4, 2, 0]} receiveShadow>
        <boxGeometry args={[0.1, 4, 6]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
      
      {/* Bed (placeholder) */}
      <group position={[-2, 0.5, -1]}>
        <mesh castShadow>
          <boxGeometry args={[2, 0.5, 3]} />
          <meshStandardMaterial color="#4a5568" />
        </mesh>
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[2, 0.2, 3]} />
          <meshStandardMaterial color="#667eea" />
        </mesh>
      </group>
      
      {/* Desk (placeholder) */}
      <group position={[2, 0.75, 1]}>
        <mesh castShadow>
          <boxGeometry args={[2, 0.1, 1.5]} />
          <meshStandardMaterial color="#8b7355" />
        </mesh>
        {/* Desk legs */}
        {[[0.9, -0.35, 0.65], [0.9, -0.35, -0.65], [-0.9, -0.35, 0.65], [-0.9, -0.35, -0.65]].map((pos, i) => (
          <mesh key={i} position={pos} castShadow>
            <boxGeometry args={[0.1, 0.7, 0.1]} />
            <meshStandardMaterial color="#6b5744" />
          </mesh>
        ))}
      </group>
      
      {/* Chair (placeholder) */}
      <mesh position={[2, 0.5, 2.5]} castShadow>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#764ba2" />
      </mesh>
      
      {/* Dresser (placeholder) */}
      <mesh position={[3, 0.75, -2]} castShadow>
        <boxGeometry args={[1.5, 1.5, 1]} />
        <meshStandardMaterial color="#8b7355" />
      </mesh>
      
      {/* Window (placeholder) */}
      <mesh position={[3.99, 2.5, 0]}>
        <planeGeometry args={[1.5, 2]} />
        <meshStandardMaterial 
          color="#87ceeb" 
          transparent 
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default DormModel;
