import React from 'react';
import BookingPage from '../components/BookingForm';

const Reservations = ( {availableTimes, reservationData,  onSubmit, updateTimes} ) => {
  return (
    <div>
      <h1>Reservations</h1>
      {/* Add more content here */}
      <BookingPage availableTimes={availableTimes} reservationData={reservationData} onSubmit={onSubmit} updateTimes={updateTimes} />
    </div>
  );
};

export default Reservations;
