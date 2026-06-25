import React from 'react';
import OddPlayers from './OddPlayers';
import EvenPlayers from './EvenPlayers';

// 2011 World Cup Indian team roster array definition
export const IndianTeam = ["Sachin Tendulkar", "MS Dhoni", "Virat Kohli", "Virender Sehwag", "Yuvraj Singh", "Suresh Raina"];

/**
 * IndianPlayers Component
 * Demonstrates ES6 Array Destructuring on IndianTeam and composes
 * OddPlayers and EvenPlayers components.
 */
const IndianPlayers = () => {
  // Using ES6 destructuring to extract all 6 players
  const [first, second, third, fourth, fifth, sixth] = IndianTeam;

  return (
    <div className="card indian-players-container">
      <h2 className="card-title">Indian Team Overview</h2>
      <div className="destructure-summary">
        <p className="summary-text">
          Team Roster (Destructured): {first}, {second}, {third}, {fourth}, {fifth}, {sixth}
        </p>
      </div>
      <div className="grid-2col">
        <OddPlayers />
        <EvenPlayers />
      </div>
    </div>
  );
};

export default IndianPlayers;
