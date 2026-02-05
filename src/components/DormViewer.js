import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import './DormViewer.css';
import DormModel from './DormModel';

function DormViewer({ dormId }) {
  if (!dormId) {
    return (
      <div className="dorm-viewer empty">
        <div className="placeholder">
          <h3>👆 Select a dorm to view its 3D model</h3>
          <p>Models created with Siemens NX</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dorm-viewer">
      <div className="viewer-header">
        <h3>3D Room Preview</h3>
        <p className="controls-hint">🖱️ Drag to rotate • Scroll to zoom</p>
      </div>
      
      <div className="canvas-container">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[5, 5, 5]} />
          <OrbitControls 
            enableDamping 
            dampingFactor={0.05}
            minDistance={3}
            maxDistance={15}
          />
          
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow 
          />
          <pointLight position={[-10, 10, -5]} intensity={0.5} />
          
          {/* Environment for reflections */}
          <Environment preset="apartment" />
          
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
        <p>📏 Room dimensions and furniture placement based on actual dorm specifications</p>
        <p>⚠️ Note: This is a rough draft. Actual 3D models from Siemens NX will be integrated</p>
      </div>
    </div>
  );
}

export default DormViewer;
