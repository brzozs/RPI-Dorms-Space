import React, { useState } from 'react';
import './DormSelector.css';

// Complete RPI housing list organized by class year
const DORMS_BY_CLASS = {
  freshman: [
    { id: 'barton', name: 'Barton Hall', type: 'Traditional' },
    { id: 'bray', name: 'Bray Hall', type: 'Traditional' },
    { id: 'barh', name: 'Burdett Avenue (BARH)', type: 'Suite-Style' },
    { id: 'cary', name: 'Cary Hall', type: 'Traditional' },
    { id: 'crockett', name: 'Crockett Hall', type: 'Traditional' },
    { id: 'davison-nugent', name: 'Davison/Nugent Hall', type: 'Traditional' },
    { id: 'hall', name: 'Hall Hall', type: 'Traditional' },
    { id: 'nason', name: 'Nason Hall', type: 'Traditional' },
    { id: 'sharp', name: 'Sharp Hall', type: 'Traditional' },
    { id: 'warren', name: 'Warren Hall', type: 'Traditional' },
  ],
  sophomore: [
    { id: 'blitman', name: 'Blitman Commons', type: 'Suite-Style' },
    { id: 'rahp-a', name: 'Colvin & Albright (RAHP A)', type: 'Apartment' },
    { id: 'rahp-b', name: 'Beman & Brinsmade (RAHP B)', type: 'Apartment' },
    { id: 'e-complex', name: 'E-Complex', type: 'Suite-Style' },
    { id: 'north', name: 'North Hall', type: 'Traditional' },
    { id: 'quad', name: 'Quadrangle (Quad)', type: 'Traditional' },
  ],
  upperclass: [
    { id: 'rahp-b-upper', name: 'Beman & Brinsmade (RAHP B)', type: 'Apartment' },
    { id: 'polytechnic', name: 'Polytechnic Apartments', type: 'Apartment' },
    { id: 'stacwyck', name: 'Stacwyck Apartments', type: 'Apartment' },
  ],
};

function DormSelector({ selectedDorm, onSelectDorm }) {
  const [activeTab, setActiveTab] = useState('freshman');

  const tabs = [
    { id: 'freshman', label: 'Freshman', count: DORMS_BY_CLASS.freshman.length },
    { id: 'sophomore', label: 'Sophomore', count: DORMS_BY_CLASS.sophomore.length },
    { id: 'upperclass', label: 'Upperclass', count: DORMS_BY_CLASS.upperclass.length },
  ];

  return (
    <div className="dorm-selector">
      <div className="selector-header">
        <h2>Browse Halls</h2>
        <p>Select a building to explore</p>
      </div>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="dorm-grid">
        {DORMS_BY_CLASS[activeTab].map((dorm) => (
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
