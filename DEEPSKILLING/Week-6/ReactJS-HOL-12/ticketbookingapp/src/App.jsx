import React, { useState } from 'react';
import Greeting from './components/Greeting';
import './App.css';

/**
 * Main App Component
 * Demonstrates React state management using useState hook to track user login status
 * and passes state & event handlers to child components.
 */
function App() {
  // Step 3: Login State initialized to false (Logged out initially)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Event handlers to update login state
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app-container">
      {/* Header Banner */}
      <header className="app-header">
        <div className="header-brand">
          <span className="brand-logo">🛫</span>
          <h1>Ticket Booking Portal</h1>
        </div>
        <div className="user-status-badge">
          Status:{' '}
          <span className={isLoggedIn ? 'status-online' : 'status-guest'}>
            {isLoggedIn ? 'Logged In User' : 'Guest Mode'}
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="app-main">
        {/* Step 6 & 10: Render Greeting component with conditional rendering */}
        <Greeting
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2026 Ticket Booking App | React Conditional Rendering Demo</p>
      </footer>
    </div>
  );
}

export default App;
