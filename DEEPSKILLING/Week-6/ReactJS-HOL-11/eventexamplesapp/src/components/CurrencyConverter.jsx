import React, { useState } from 'react';

/**
 * CurrencyConverter Component
 * Demonstrates Form Handling, Synthetic Event e.preventDefault(),
 * controlled input components with useState, and mathematical conversion logic.
 */
const CurrencyConverter = () => {
  // State for user input amount in Indian Rupees
  const [rupees, setRupees] = useState('');
  
  // State for target currency (defaulted to 'Euro')
  const [currency, setCurrency] = useState('Euro');
  
  // State to store conversion result message for display below form
  const [result, setResult] = useState('');

  /**
   * Step 10 & 11: Form submission handler
   * Uses React Synthetic Event parameter 'e'
   * Calculates INR to Euro conversion and triggers alert + UI output
   */
  const handleSubmit = (e) => {
    // Prevent standard form page reload synthetic event
    e.preventDefault();

    const numericRupees = parseFloat(rupees);

    // Input validation
    if (isNaN(numericRupees) || numericRupees <= 0) {
      const errorMsg = 'Please enter a valid positive number for Indian Rupees.';
      alert(errorMsg);
      setResult(errorMsg);
      return;
    }

    // Conversion Formula: Euro = Rupees / 90 (1 Euro = 90 Rupees)
    const convertedEuro = numericRupees / 90;
    
    // Format output string to match example: "Converted Amount = X Euro"
    // Handles whole numbers without unnecessary decimal places (e.g. 1 instead of 1.00 when exact)
    const formattedAmount = Number.isInteger(convertedEuro) 
      ? convertedEuro 
      : parseFloat(convertedEuro.toFixed(2));
      
    const message = `Converted Amount = ${formattedAmount} Euro`;

    // Step 11: Display converted value using alert
    alert(message);

    // Also display result below the form for clear UI feedback
    setResult(message);
  };

  return (
    <div className="card converter-card">
      {/* Step 8: Component Heading */}
      <h2 className="component-title green-heading">Currency Convertor!!!</h2>
      
      {/* Form submit handled via Synthetic Event handleSubmit */}
      <form onSubmit={handleSubmit} className="converter-form">
        
        {/* Step 9: Input field for Amount in Rupees */}
        <div className="form-group">
          <label htmlFor="inr-amount" className="form-label">
            Amount (Indian Rupees ₹):
          </label>
          <input
            id="inr-amount"
            type="number"
            className="form-input"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            placeholder="Enter amount in Rupees (e.g. 90)"
            required
            min="0"
            step="any"
          />
        </div>

        {/* Step 9: Input field for Currency (Display Euro / allow input) */}
        <div className="form-group">
          <label htmlFor="target-currency" className="form-label">
            Target Currency:
          </label>
          <input
            id="target-currency"
            type="text"
            className="form-input"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            placeholder="Currency (e.g., Euro)"
          />
        </div>

        {/* Step 10: Submit Button */}
        <button id="btn-submit" type="submit" className="btn btn-submit">
          Submit
        </button>
      </form>

      {/* Step 11: Display result below form */}
      {result && (
        <div id="conversion-result" className="result-box">
          <span className="result-label">Result:</span>
          <span className="result-value">{result}</span>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
