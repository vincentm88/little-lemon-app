import { useReducer, useState, useEffect } from 'react';
import { Routes, Route, Outlet, Link, BrowserRouter as Router } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Nav from "./components/Nav";
import About from "./pages/About";
import Menu from "./pages/Menu";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import ConfirmedBooking from './components/ConfirmedBooking';
import { fetchAPI, submitAPI } from "./simulationapi";


const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return action.payload;
    default:
      return state;
  }
}


function App() {
  const [reservationData, setReservationData] = useState(null);
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);
  


  useEffect(() => {
    // Fetch available times for today's date when component mounts
    const fetchAvailableTimes = async () => {
      
      initilizeTimes();
    };

    fetchAvailableTimes();
  }, []); // Run effect only once on component mount

  async function initilizeTimes() {
    try {
      const today = new Date();
      const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
      const times = await fetchAPI(formattedDate);
      dispatch({ type: "SET_TIMES", payload: times });
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  }

  async function updateTimes(selectedData) {
    try {
      const times = await fetchAPI(selectedData);
      dispatch({ type: "SET_TIMES", payload: times });
    } catch (error) {
      console.error('Error updating available times:', error);
    }
  }

  const handleFormSubmit = async (data) => {
    try {
      const response = await submitAPI(data);
      console.log('Form submitted successfully:', response);
      return response; // Return the response data
    } catch (error) {
      console.error('Error submitting form:', error);
      return null; // Return null if there's an error
    }
  };
  

  return (
    <Router>
      <Nav />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order-online" element={<OrderOnline />} />
        <Route path="login" element={<Login />} />
        <Route path="reservations" element={<Reservations onSubmit={handleFormSubmit} availableTimes={availableTimes} reservationData={reservationData} updateTimes={updateTimes} />} />
        <Route path="confirmation" element={<ConfirmedBooking reservationData={reservationData} />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
