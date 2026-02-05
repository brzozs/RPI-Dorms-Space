import React from 'react';
import './DormSelector.css';

// Rough draft data - will be expanded with real dorm info
const DORMS = [
  { 
    id: 'barton', 
    name: 'Barton Hall',
    type: 'Double',
    description: 'Traditional style double room'
  },
  { 
    id: 'quad', 
    name: 'Quadrangle',
    type: 'Single',
    description: 'Single room in historic quad'
  },
  { 
    id: 'warren', 
    name: 'E-Complex (Warren)',
    type: 'Suite',
    description: 'Suite-style living'
  },
  { 
    id: 'bray', 
    name: 'Bray Hall',
    type: 'Double',
    description: 'Modern double room'
  },
  { 
    id: 'cary', 
    name: 'Cary Hall',
    type: 'Triple',
    description: 'Triple occupancy room'
  },
];

function DormSelector({ selectedDorm, onSelectDorm }) {
  return (
    <div className="dorm-selector">
      <h2>Buildings</h2>
      <div className="dorm-grid">
        {DORMS.map((dorm) => (
          <button
            key={dorm.id}
            className={`dorm-card ${selectedDorm === dorm.id ? 'selected' : ''}`}
            onClick={() => onSelectDorm(dorm.id)}
          >
            <h3>{dorm.name}</h3>
            <span className="dorm-type">{dorm.type}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default DormSelector;
