import React, { useState } from 'react';
import './App.css';
import DormSelector from './components/DormSelector';
import DormViewer from './components/DormViewer';

function App() {
  const [selectedDorm, setSelectedDorm] = useState(null);

  return (
    <div className="App">
      <header className="header">
        <h1>RPI Dorms Space</h1>
        <p>Explore your future dorm room in 3D</p>
      </header>
      
      <main className="main-content">
        <DormSelector 
          selectedDorm={selectedDorm} 
          onSelectDorm={setSelectedDorm} 
        />
        
        <DormViewer dormId={selectedDorm} />
      </main>
      
      <footer className="footer">
        <p>3D Models created with Siemens NX | RPI Student Project</p>
      </footer>
    </div>
  );
}

export default App;
