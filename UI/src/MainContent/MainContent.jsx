// src/components/MainContent.jsx
import React from 'react';
import './mainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <h2>Main Content</h2>
      <p>This is the main content area.</p>
      <div className="cubes">
        <div className="cube">Cube 1</div>
        <div className="cube">Cube 2</div>
        <div className="cube">Cube 3</div>
      </div>
    </main>
  );
}

export default MainContent;
