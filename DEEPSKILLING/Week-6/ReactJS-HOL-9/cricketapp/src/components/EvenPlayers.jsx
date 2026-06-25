import React from 'react';
import { IndianTeam } from './IndianPlayers';

/**
 * EvenPlayers Component
 * Uses ES6 Array Destructuring with comma skipping to extract 2nd, 4th, and 6th players.
 */
const EvenPlayers = () => {
  // Using ES6 destructuring to get even-positioned players (index 1, 3, 5)
  const [, second, , fourth, , sixth] = IndianTeam;

  return (
    <div className="card sub-card">
      <h2 className="card-title">Even Players</h2>
      <ul className="player-list key-value-list">
        <li className="player-item">
          <span className="label">Second</span>
          <span className="value">{second}</span>
        </li>
        <li className="player-item">
          <span className="label">Fourth</span>
          <span className="value">{fourth}</span>
        </li>
        <li className="player-item">
          <span className="label">Sixth</span>
          <span className="value">{sixth}</span>
        </li>
      </ul>
    </div>
  );
};

export default EvenPlayers;
