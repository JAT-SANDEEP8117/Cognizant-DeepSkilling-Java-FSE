import React from 'react';

/**
 * LogoutButton Component
 * Renders a Logout button that calls the onClick handler passed via props to log the user out.
 */
function LogoutButton({ onClick }) {
  return (
    <button className="btn btn-logout" onClick={onClick}>
      🔒 Logout
    </button>
  );
}

export default LogoutButton;
