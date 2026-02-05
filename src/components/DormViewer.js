import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import './DormViewer.css';
import DormModel from './DormModel';

function CameraController() {
  const vec = useRef([0, 0, 0]);
  useFrame(({ camera, mouse }) => {
    camera.position.x = 5 + mouse.x * 2;
    camera.position.y = 5 + mouse.y * 2;
    camera.lookAt(...vec.current);
  });
  return null;
}

function DormViewer({ dormId }) {
  if (!dormId) {
    return (
      <div className="dorm-viewer empty">
        <div className="placeholder">
          <h3>Select a building to view</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="dorm-viewer">
      <div className="viewer-header">
        <h3>3D Preview</h3>
        <p className="controls-hint">Drag to rotate • Scroll to zoom</p>
      </div>
      
      <div className="canvas-container">
        <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
          <CameraController />
          
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, 10, -5]} intensity={0.5} />
          
          {/* 3D Model */}
          <Suspense fallback={null}>
            <DormModel dormId={dormId} />
          </Suspense>
        </Canvas>
        
        {/* Loading indicator */}
        <div className="loading-indicator">
          Loading 3D model...
        </div>
      </div>
      
      <div className="viewer-info">
        <p>Placeholder model - Replace with Siemens NX exports</p>
      </div>
    </div>
  );
}

export default DormViewer;
