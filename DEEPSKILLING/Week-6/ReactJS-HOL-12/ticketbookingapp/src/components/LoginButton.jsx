import React from 'react';

/**
 * LoginButton Component
 * Renders a Login button that calls the onClick handler passed via props to log the user in.
 */
function LoginButton({ onClick }) {
  return (
    <button className="btn btn-login" onClick={onClick}>
      🔑 Login
    </button>
  );
}

export default LoginButton;
