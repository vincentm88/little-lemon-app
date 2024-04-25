import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = ( { availableTimes, reservationData, onSubmit, updateTimes }) => {
  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm availableTimes={availableTimes} onSubmit={onSubmit} updateTimes={updateTimes} />
      {reservationData && (
        <div>
          <h2>Reservation Details:</h2>
          <p>Date: {reservationData.date}</p>
          <p>Time: {reservationData.time}</p>
          <p>Guests: {reservationData.guests}</p>
          <p>Occasion: {reservationData.occasion}</p>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
