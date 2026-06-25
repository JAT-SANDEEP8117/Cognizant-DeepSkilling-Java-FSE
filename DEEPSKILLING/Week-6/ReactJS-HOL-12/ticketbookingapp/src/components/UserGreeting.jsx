import React, { useState } from 'react';
import LogoutButton from './LogoutButton';
import FlightDetails from './FlightDetails';

/**
 * UserGreeting Component
 * Rendered when user is logged in (isLoggedIn = true).
 * Displays a welcome message, Logout button, flight details, and a Book Ticket feature.
 */
function UserGreeting({ onLogout }) {
  const [bookingStatus, setBookingStatus] = useState('');

  const handleBookTicket = () => {
    const successMsg = 'Your ticket has been booked successfully!';
    setBookingStatus(successMsg);
  };

  return (
    <div className="greeting-container user-greeting">
      <div className="greeting-header">
        <h2>Welcome back</h2>
        <p className="subtitle">You are logged in and eligible to book flights.</p>
        <LogoutButton onClick={onLogout} />
      </div>

      <FlightDetails />

      <div className="booking-section">
        <button className="btn btn-book" onClick={handleBookTicket}>
          🎫 Book Ticket
        </button>

        {/* Display booking confirmation message below button */}
        {bookingStatus && (
          <div className="booking-alert-success" role="alert">
            ✅ {bookingStatus}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserGreeting;
