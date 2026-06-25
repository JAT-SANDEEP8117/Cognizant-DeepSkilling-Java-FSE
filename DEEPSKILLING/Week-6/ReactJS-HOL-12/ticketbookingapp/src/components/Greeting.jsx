import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

/**
 * Greeting Component
 * Demonstrates Conditional Rendering in React using:
 * 1. Props (isLoggedIn)
 * 2. if...else statements
 * 3. Element variables (greetingElement)
 */
function Greeting({ isLoggedIn, onLogin, onLogout }) {
  // Element Variable to store the rendered component based on condition
  let greetingElement;

  // Conditional Rendering using if...else statement
  if (isLoggedIn) {
    greetingElement = <UserGreeting onLogout={onLogout} />;
  } else {
    greetingElement = <GuestGreeting onLogin={onLogin} />;
  }

  // Return the element variable
  return greetingElement;
}

export default Greeting;
