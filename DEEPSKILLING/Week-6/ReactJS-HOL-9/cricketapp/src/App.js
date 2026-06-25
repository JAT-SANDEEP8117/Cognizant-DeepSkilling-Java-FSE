import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import ScoreBelow70 from './components/ScoreBelow70';
import OddPlayers from './components/OddPlayers';
import EvenPlayers from './components/EvenPlayers';
import ListofIndianPlayers from './components/ListofIndianPlayers';
import './App.css';

/**
 * Main App Component
 * Demonstrates ES6 Conditional Rendering using a simple if-else statement.
 */
function App() {
  // Flag state to control conditional rendering (defaults to true)
  const [flag, setFlag] = useState(true);

  // Variable to store components based on simple if-else evaluation
  let renderContent;

  // Step 8: Simple if-else conditional rendering logic
  if (flag === true) {
    renderContent = (
      <div className="content-group">
        <ListofPlayers />
        <ScoreBelow70 />
      </div>
    );
  } else {
    renderContent = (
      <div className="content-group">
        <div className="grid-2col">
          <OddPlayers />
          <EvenPlayers />
        </div>
        <ListofIndianPlayers />
      </div>
    );
  }

  return (
    <div className="app">
      {/* Header Banner */}
      <header className="app-header">
        <div className="badge">ReactJS Hands On Lab 9</div>
        <h1 className="main-title">🏏 Cricket App Dashboard</h1>
        <p className="subtitle">
          Demonstrating ES6 Map, Filter, Destructuring, Spread Operator & Conditional Rendering
        </p>

        {/* Interactive Flag Switcher for Testing */}
        <div className="control-panel">
          <span className="control-label">Current Flag State: <strong>{flag ? "true" : "false"}</strong></span>
          <button 
            className={`toggle-btn ${flag ? 'btn-true' : 'btn-false'}`}
            onClick={() => setFlag(!flag)}
          >
            Toggle Flag (Set to {(!flag).toString()})
          </button>
        </div>
      </header>

      {/* Main Content Rendered conditionally */}
      <main className="main-content">
        {renderContent}
      </main>

      <footer className="app-footer">
        <p>Built with functional React components &amp; ES6 features</p>
      </footer>
    </div>
  );
}

export default App;
