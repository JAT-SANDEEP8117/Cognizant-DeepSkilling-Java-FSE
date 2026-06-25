import React from 'react';
import { players } from './ListofPlayers';

/**
 * ScoreBelow70 Component
 * Uses ES6 Arrow Functions and filter() method to extract and display players
 * with scores less than or equal to 70.
 */
const ScoreBelow70 = () => {
  // Using ES6 arrow function inside filter() to filter players with score <= 70
  const filteredPlayers = players.filter((player) => player.score <= 70);

  return (
    <div className="card">
      <h2 className="card-title">List of Players having Scores Less than 70</h2>
      <ul className="player-list">
        {/* Render filtered players using ES6 map() */}
        {filteredPlayers.map((player, index) => (
          <li key={index} className="player-item low-score">
            <span className="player-name">Mr. {player.name}</span>
            <span className="player-score badge-warning">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreBelow70;
