import React, { useState } from 'react';

/**
 * Counter Component
 * Demonstrates React Event Handling concepts:
 * 1. useState Hook for state management
 * 2. Calling Multiple Functions from a single event handler
 * 3. Passing Arguments to event handlers
 * 4. React Synthetic Events (event object parameter)
 */
const Counter = () => {
  // Step 3: Initialize counter state with 0 using useState hook
  const [count, setCount] = useState(0);

  // Function 1: Increase counter value by 1
  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Function 2: Display alert message
  const sayHello = () => {
    alert('Hello! Member');
  };

  // Step 4: Combined handler to invoke multiple functions on Increment button click
  const handleIncrement = () => {
    incrementCounter();
    sayHello();
  };

  // Step 5: Decrement function to decrease counter value by 1
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Step 6: Function that accepts an argument and displays an alert
  const sayWelcome = (message) => {
    alert(message);
  };

  // Step 7: Synthetic Event Handler accepting event object 'e'
  const handleSyntheticEvent = (e) => {
    // Demonstrating SyntheticEvent properties
    console.log('Synthetic Event Type:', e.type);
    console.log('Target Element:', e.target);
    alert('I was clicked');
  };

  return (
    <div className="card counter-card">
      <h2 className="component-title">React Event Handling Counter</h2>
      
      {/* Counter Value Display */}
      <div className="counter-display">
        <span className="counter-label">Current Count:</span>
        <span className="counter-value">{count}</span>
      </div>

      {/* Action Buttons arranged vertically as required */}
      <div className="button-group-vertical">
        {/* Step 4: Increment Button - Invokes multiple functions */}
        <button 
          id="btn-increment"
          className="btn btn-increment" 
          onClick={handleIncrement}
        >
          Increment (Multiple Functions)
        </button>

        {/* Step 5: Decrement Button */}
        <button 
          id="btn-decrement"
          className="btn btn-decrement" 
          onClick={handleDecrement}
        >
          Decrement
        </button>

        {/* Step 6: Say Welcome Button - Passes argument "Welcome" */}
        <button 
          id="btn-welcome"
          className="btn btn-welcome" 
          onClick={() => sayWelcome('Welcome')}
        >
          Say Welcome
        </button>

        {/* Step 7: Synthetic Event Button */}
        <button 
          id="btn-synthetic"
          className="btn btn-synthetic" 
          onClick={handleSyntheticEvent}
        >
          Click on me
        </button>
      </div>
    </div>
  );
};

export default Counter;
