import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmedBooking = () => {
  const location = useLocation();
  const reservationData = location.state?.reservationData;

  // Check if reservationData exists
  if (!reservationData) {
    return <div>No reservation data found</div>;
  }

  // Destructure reservationData to access its properties
  const { date, time, guests, occasion } = reservationData;

  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Your reservation details:</p>
      <ul>
        <li><strong>Date:</strong> {date}</li>
        <li><strong>Time:</strong> {time}</li>
        <li><strong>Number of Guests:</strong> {guests}</li>
        <li><strong>Occasion:</strong> {occasion}</li>
      </ul>
      <p>Thank you for your reservation!</p>
    </div>
  );
};

export default ConfirmedBooking;
