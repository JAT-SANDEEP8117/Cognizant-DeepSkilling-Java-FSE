import React from 'react';
import Counter from './components/Counter';
import CurrencyConverter from './components/CurrencyConverter';
import './App.css';

/**
 * App Component (Main Application Entry Component)
 * Step 12: Integrates Counter and CurrencyConverter components.
 * Demonstrates functional components, JSX structure, and CSS styling.
 */
function App() {
  return (
    <div className="app-container">
      {/* Main Page Header */}
      <header className="app-header">
        <h1 className="main-title green-heading">React Event Examples App</h1>
        <p className="subtitle">
          Demonstrating Synthetic Events, Multiple Function Calls, Parameter Passing & Form Handling
        </p>
      </header>

      {/* Main Content Layout */}
      <main className="main-content">
        {/* Step 3 - 7: Counter Component containing Increment, Decrement, Say Welcome, Click on me buttons */}
        <section className="section-container">
          <Counter />
        </section>

        {/* Step 8 - 11: Currency Converter Component below Counter */}
        <section className="section-container">
          <CurrencyConverter />
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2026 Event Examples Application - Built with React & Vite</p>
      </footer>
    </div>
  );
}

export default App;
