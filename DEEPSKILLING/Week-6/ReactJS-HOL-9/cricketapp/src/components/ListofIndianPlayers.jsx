import React from 'react';

// 2011 World Cup Top Order
const T20Players = [
  "Sachin Tendulkar",
  "Virender Sehwag",
  "Gautam Gambhir"
];

// 2011 World Cup Middle Order
const RanjiTrophyPlayers = [
  "Virat Kohli",
  "Yuvraj Singh",
  "MS Dhoni"
];

// Merged Array using ES6 Spread Operator (...)
const IndianPlayers = [
  ...T20Players,
  ...RanjiTrophyPlayers
];

/**
 * ListofIndianPlayers Component
 * Demonstrates ES6 Spread Operator to combine two arrays and map over the merged list.
 */
const ListofIndianPlayers = () => {
  return (
    <div className="card">
      <h2 className="card-title">List of Indian Players Merged</h2>
      <ul className="player-list">
        {/* Using ES6 map() to render each merged player */}
        {IndianPlayers.map((player, index) => (
          <li key={index} className="player-item">
            <span className="player-name">Mr. {player}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofIndianPlayers;
