import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = ({ availableTimes, updateTimes, onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(3);
  const [occasion, setOccasion] = useState('');
  const [submitting, setSubmitting] = useState(false); // State variable to track form submission
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    setDate(formattedDate);
  }, []); // Run only once when the component mounts

  const handleSubmit = async (event) => {
    const form = event.target;
  
    // Check if the form is valid
    if (form.checkValidity()) {
      // Proceed with form submission
      event.preventDefault();
      console.log("handleSubmit", { date, time, guests, occasion });
      const today = new Date();
      const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
      if(date < formattedDate){
        const dateInput = document.getElementById('date');
        dateInput.setCustomValidity('Please select a date in the future');
        dateInput.reportValidity(); // Display the validation message
        return
      }
      if(!availableTimes.includes(time)){
        const timeInput = document.getElementById('time');
        timeInput.setCustomValidity('Please select from available times');
        timeInput.reportValidity(); // Display the validation message
      }
      if(guests < 1 || guests > 10){
        const guestsInput = document.getElementById('guests');
        guestsInput.setCustomValidity('Party size must be between 1 and 10, for large parties please contact us');
        guestsInput.reportValidity(); // Display the validation message
      }
      setSubmitting(true); // Set submitting state to true when form is submitted
      const submitdata = await onSubmit({ date, time, guests, occasion });
      setSubmitting(false); // Set submitting state to false when form submission is complete
      if (submitdata) {
        console.log("submitdata", submitdata);
        navigate('/confirmation', { state: { reservationData: { date, time, guests, occasion } } });
      }
    } else {
      // Form is invalid, do not submit
      console.log("Form is invalid. Submission prevented.");
    }
  };
  

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  return (
    <div className='BookingForm'>
      {submitting && <p>Booking Confirmation...</p>} {/* Display "Booking Confirmation" message while submitting */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" min={date} value={date} onChange={handleDateChange} required />

        <label htmlFor="time">Time:</label>
        <select id="time" aria-label="Select a time" onChange={(e) => setTime(e.target.value)} required>
          <option value="">Select a time</option>
          {availableTimes.map((availableTime, index) => (
            <option key={index} value={availableTime}>{availableTime}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests:</label>
        <input type="number" id="guests" value={guests} min="1" max="10" onChange={(e) => setGuests(e.target.value)} required />

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
