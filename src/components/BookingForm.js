import React, { useState } from 'react';

const BookingForm = ({ availableTimes, updateTimes, onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ date });
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={handleDateChange} required />

      <label htmlFor="time">Time:</label>
      <select id="time" aria-label="Select a time" required>
        <option value="">Select a time</option>
        {availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>{availableTime}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests:</label>
      <input type="number" id="guests" required />

      <label htmlFor="occasion">Occasion:</label>
      <select id="occasion" aria-label="Select an occasion" required>
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Submit Reservation</button>
    </form>
  );
};

export default BookingForm;