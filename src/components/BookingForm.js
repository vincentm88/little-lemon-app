import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ availableTimes, updateTimes, onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [submitting, setSubmitting] = useState(false); // State variable to track form submission
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handleSubmit", { date, time, guests, occasion });
    setSubmitting(true); // Set submitting state to true when form is submitted
    const submitdata = await onSubmit({ date, time, guests, occasion });
    setSubmitting(false); // Set submitting state to false when form submission is complete
    if (submitdata) {
      console.log("submitdata", submitdata);
      navigate('/confirmation', { state: { reservationData: { date, time, guests, occasion } } });
    }
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  return (
    <div>
      {submitting && <p>Booking Confirmation...</p>} {/* Display "Booking Confirmation" message while submitting */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} required />

        <label htmlFor="time">Time:</label>
        <select id="time" aria-label="Select a time" onChange={(e) => setTime(e.target.value)} required>
          <option value="">Select a time</option>
          {availableTimes.map((availableTime, index) => (
            <option key={index} value={availableTime}>{availableTime}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests:</label>
        <input type="number" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required />

        <label htmlFor="occasion">Occasion:</label>
        <select id="occasion" aria-label="Select an occasion" onChange={(e) => setOccasion(e.target.value)} required>
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Corporate">Corporate</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default BookingForm;
