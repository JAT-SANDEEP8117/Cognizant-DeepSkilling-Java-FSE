import React from 'react';
import LoginButton from './LoginButton';
import FlightDetails from './FlightDetails';

/**
 * GuestGreeting Component
 * Rendered when user is logged out (isLoggedIn = false).
 * Displays a guest greeting message, Login button, and flight details.
 */
function GuestGreeting({ onLogin }) {
  return (
    <div className="greeting-container guest-greeting">
      <div className="greeting-header">
        <h2>Please sign up.</h2>
        <p className="subtitle">Browse current flight availability and schedule below.</p>
        <LoginButton onClick={onLogin} />
      </div>

      <FlightDetails />
    </div>
  );
}

export default GuestGreeting;
