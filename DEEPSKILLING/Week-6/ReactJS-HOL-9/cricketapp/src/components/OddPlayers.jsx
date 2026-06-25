import React from 'react';
import { IndianTeam } from './IndianPlayers';

/**
 * OddPlayers Component
 * Uses ES6 Array Destructuring with comma skipping to extract 1st, 3rd, and 5th players.
 */
const OddPlayers = () => {
  // Using ES6 destructuring to get odd-positioned players (index 0, 2, 4)
  const [first, , third, , fifth] = IndianTeam;

  return (
    <div className="card sub-card">
      <h2 className="card-title">Odd Players</h2>
      <ul className="player-list key-value-list">
        <li className="player-item">
          <span className="label">First</span>
          <span className="value">{first}</span>
        </li>
        <li className="player-item">
          <span className="label">Third</span>
          <span className="value">{third}</span>
        </li>
        <li className="player-item">
          <span className="label">Fifth</span>
          <span className="value">{fifth}</span>
        </li>
      </ul>
    </div>
  );
};

export default OddPlayers;
