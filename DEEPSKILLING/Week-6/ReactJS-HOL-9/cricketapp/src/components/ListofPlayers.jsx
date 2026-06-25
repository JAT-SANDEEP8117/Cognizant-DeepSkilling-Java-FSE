import React from 'react';

// Array containing 11 players from the legendary India 2011 World Cup winning squad
export const players = [
  { name: "Sachin Tendulkar", score: 95 },
  { name: "Virender Sehwag", score: 82 },
  { name: "Gautam Gambhir", score: 97 },
  { name: "MS Dhoni", score: 91 },
  { name: "Yuvraj Singh", score: 85 },
  { name: "Virat Kohli", score: 78 },
  { name: "Suresh Raina", score: 68 },
  { name: "Harbhajan Singh", score: 55 },
  { name: "Zaheer Khan", score: 60 },
  { name: "Munaf Patel", score: 45 },
  { name: "Ashish Nehra", score: 40 }
];

/**
 * ListofPlayers Component
 * Uses ES6 map() method to render the full list of 11 players.
 */
const ListofPlayers = () => {
  return (
    <div className="card">
      <h2 className="card-title">List of Players</h2>
      <ul className="player-list">
        {/* Using ES6 map() to transform array objects into list elements */}
        {players.map((player, index) => (
          <li key={index} className="player-item">
            <span className="player-name">Mr. {player.name}</span>
            <span className="player-score">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
