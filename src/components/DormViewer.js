import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import './DormViewer.css';
import DormModel from './DormModel';

function OrbitControls() {
  const { camera, gl } = useThree();
  const [isDragging, setIsDragging] = useState(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const distance = useRef(8);

  React.useEffect(() => {
    const handleMouseDown = (e) => {
      setIsDragging(true);
      lastMouse.current = { x: e.clientX, y: e.clientY };
      gl.domElement.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      gl.domElement.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - lastMouse.current.x;
      const deltaY = e.clientY - lastMouse.current.y;

      targetRotation.current.y += deltaX * 0.005;
      targetRotation.current.x += deltaY * 0.005;
      
      targetRotation.current.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotation.current.x));

      lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleWheel = (e) => {
      e.preventDefault();
      distance.current += e.deltaY * 0.01;
      distance.current = Math.max(4, Math.min(15, distance.current));
    };

    const canvas = gl.domElement;
    canvas.style.cursor = 'grab';

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('wheel', handleWheel);
    };
  }, [isDragging, gl]);

  useFrame(() => {
    const x = Math.sin(targetRotation.current.y) * Math.cos(targetRotation.current.x) * distance.current;
    const y = Math.sin(targetRotation.current.x) * distance.current;
    const z = Math.cos(targetRotation.current.y) * Math.cos(targetRotation.current.x) * distance.current;

    camera.position.set(x, y + 3, z);
    camera.lookAt(0, 2, 0);
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
        <h3>Room Preview</h3>
        <p className="controls-hint">Drag to rotate • Scroll to zoom</p>
      </div>
      
      <div className="canvas-container">
        <Canvas camera={{ position: [8, 5, 8], fov: 50 }}>
          <OrbitControls />
          
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, 10, -5]} intensity={0.5} />
          
          <Suspense fallback={null}>
            <DormModel dormId={dormId} />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="viewer-info">
        <p>Placeholder geometry • Awaiting Siemens NX models</p>
      </div>
    </div>
  );
}

export default DormViewer;
