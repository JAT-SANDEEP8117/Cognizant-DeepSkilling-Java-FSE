import React from 'react';

/**
 * FlightDetails Component
 * Reusable component to render flight details inside a styled card.
 * Rendered for both Guest and Logged-in users.
 */
function FlightDetails() {
  // Sample flight information object
  const flight = {
    flightNumber: 'AI202',
    airline: 'Air India',
    from: 'Hyderabad',
    to: 'Chennai',
    departure: '10:00 AM',
    arrival: '11:30 AM',
    price: '₹4500',
  };

  return (
    <div className="flight-card">
      <div className="flight-card-header">
        <div className="airline-badge">✈️ {flight.airline}</div>
        <span className="flight-no">{flight.flightNumber}</span>
      </div>

      <div className="flight-route">
        <div className="route-point">
          <span className="city-name">{flight.from}</span>
          <span className="time">{flight.departure}</span>
        </div>
        <div className="flight-arrow">
          <span className="arrow-line"></span>
          <span className="plane-icon">✈</span>
        </div>
        <div className="route-point">
          <span className="city-name">{flight.to}</span>
          <span className="time">{flight.arrival}</span>
        </div>
      </div>

      <div className="flight-card-footer">
        <div className="flight-info-grid">
          <div className="info-item">
            <span className="info-label">Flight No</span>
            <span className="info-value">{flight.flightNumber}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Departure</span>
            <span className="info-value">{flight.departure}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Arrival</span>
            <span className="info-value">{flight.arrival}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Price</span>
            <span className="info-value price-tag">{flight.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightDetails;
